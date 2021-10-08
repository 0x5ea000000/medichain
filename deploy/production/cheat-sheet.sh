minikube delete
minikube start --cpus=36 --cni=bridge
source .env
minikube addons enable registry
minikube addons enable ingress
helm repo add cockroachdb https://charts.cockroachdb.com/
helm repo update
PROJECT_NAME=medichain-test
kubectl delete ns ${PROJECT_NAME}
kubectl create ns ${PROJECT_NAME} --dry-run=client -o yaml | kubectl apply -f -
helm delete cockroach-auth --namespace=${PROJECT_NAME}
export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/cockroach.values.tmp.yaml > cockroach.values.yaml
helm install cockroach-auth -f cockroach.values.yaml --namespace=${PROJECT_NAME} cockroachdb/cockroachdb
kubectl -n=${PROJECT_NAME} get pvc -w
kubectl -n=${PROJECT_NAME} delete pvc datadir-cockroach-auth-cockroachdb-0 datadir-cockroach-auth-cockroachdb-1 datadir-cockroach-auth-cockroachdb-2
helm install medichain --namespace=medical-chain-test ./deploy/production/chart/ -f ./deploy/production/chart/values.tmp.yaml
echo '{"identifier":"0333888648","type":"PHONE"}' | grpc-client-cli -service medical_chain.AuthService -method GetCredential localhost:10020

export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/chart/values.tmp.yaml > service.values.yaml
helm delete auth-service --namespace=${PROJECT_NAME}
helm install auth-service -f service.values.yaml --namespace=${PROJECT_NAME} deploy/production/chart/

helm template medichain -f service.values.yaml --namespace=${PROJECT_NAME} deploy/production/chart/
helm template auth-service -f service.values.yaml --namespace=${PROJECT_NAME} deploy/production/chart/
helm install medichain --namespace=${PROJECT_NAME} ./deploy/production/chart/ -f service.values.yaml
helm delete medichain --namespace=${PROJECT_NAME}
helm template medichain -f service.values.yaml --namespace=${PROJECT_NAME} production/chart/

kubectl -n=${PROJECT_NAME} describe pod auth-service
kubectl  -n=${PROJECT_NAME} get pods,statefulsets,services,ingresses
kubectl -n=${PROJECT_NAME} logs -l app=auth-service-selector --all-containers=true -f
kubectl -n=${PROJECT_NAME} logs -l app=auth-service-selector -c init-auth-service  -f
kubectl -n=${PROJECT_NAME} logs -l app=medichain-selector -c init-medichain  -f

kubectl  -n=${PROJECT_NAME} get pods,statefulsets,services,ingresses
#kubectl -n=${PROJECT_NAME} logs -l app=nginx-selector --all-containers=true -f
#kubectl -n=${PROJECT_NAME} logs -l app=backend-selector --all-containers=true -f
#kubectl -n=${PROJECT_NAME} logs -l app=blockchain-gateway-selector --all-containers=true -f
#kubectl -n=${PROJECT_NAME} logs -l app=nginx-selector --all-containers=true -f

helm repo add elastic https://helm.elastic.co

helm repo update

helm install es --namespace=linksrus-data   \
       --values chart-settings/es-settings.yaml \
       elastic/elasticsearch

kubectl port-forward pod/auth-service-deployment-649c4b9668-pgcnr 9999:80 --address 0.0.0.0  --namespace=${PROJECT_NAME}
kubectl port-forward cdb-cockroachdb-0 9999:8080 --namespace=linksrus-data
kubectl port-forward medichain-deployment-56765b664d-mnn7k 1317:1317 --namespace=${PROJECT_NAME}

kubectl delete pvc
kubectl get pv

kubectl run -it --rm cockroach-client \
      --image=cockroachdb/cockroach \
      --restart=Never \
      --command -- \
      ./cockroach sql --insecure --host=cdb-cockroachdb-public.linksrus-data


export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/sish-client-chart/values.tmp.yaml > medichain-tunnel.values.yaml
helm delete medichain-tunnel --namespace=${PROJECT_NAME}
helm install medichain-tunnel -f medichain-tunnel.values.yaml --namespace=${PROJECT_NAME} deploy/production/sish-client-chart/
kubectl -n=${PROJECT_NAME} describe pod medichain-tunnel
kubectl  -n=${PROJECT_NAME} get pods,statefulsets,services,ingresses
kubectl -n=${PROJECT_NAME} logs -l app=medichain-selector --all-containers=true -f
kubectl --namespace=${PROJECT_NAME} exec --stdin --tty medichain-deployment-6d87f99684-r528q -c medichain -- /bin/sh
medicalchain-deployment-84c4958779-xg79c