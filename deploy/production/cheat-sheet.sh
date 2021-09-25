minikube delete
minikube start --cpus=36 --cni=bridge
source .env
minikube addons enable registry
minikube addons enable ingress
helm repo add cockroachdb https://charts.cockroachdb.com/
helm repo update
PROJECT_NAME=medical-chain-test
kubectl create ns ${PROJECT_NAME} --dry-run=client -o yaml | kubectl apply -f -
helm delete cockroach-auth --namespace=${PROJECT_NAME}
export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/cockroach.values.tmp.yaml > cockroach.values.yaml
helm install cockroach-auth -f cockroach.values.yaml --namespace=${PROJECT_NAME} cockroachdb/cockroachdb
kubectl -n=${PROJECT_NAME} get pvc -w
kubectl -n=${PROJECT_NAME} delete pvc datadir-cockroach-auth-cockroachdb-0 datadir-cockroach-auth-cockroachdb-1 datadir-cockroach-auth-cockroachdb-2

echo '{"identifier":"0333888648","type":"PHONE"}' | grpc-client-cli -service medical_chain.AuthService -method GetCredential localhost:10020

export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/chart/values.tmp.yaml > service.values.yaml
helm delete auth-service --namespace=${PROJECT_NAME}
helm install auth-service -f service.values.yaml --namespace=${PROJECT_NAME} deploy/production/chart/

helm template auth-service -f service.values.yaml --namespace=${PROJECT_NAME} deploy/production/chart/

kubectl -n=${PROJECT_NAME} describe pod auth-service
kubectl  -n=${PROJECT_NAME} get pods,statefulsets,services,ingresses
kubectl -n=${PROJECT_NAME} logs -l app=auth-service-selector --all-containers=true -f
kubectl -n=${PROJECT_NAME} logs -l app=auth-service-selector -c init-auth-service  -f

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

kubectl delete pvc
kubectl get pv

kubectl run -it --rm cockroach-client \
      --image=cockroachdb/cockroach \
      --restart=Never \
      --command -- \
      ./cockroach sql --insecure --host=cdb-cockroachdb-public.linksrus-data


export $(grep -v '^#' .env | xargs) && envsubst < deploy/production/sish-client-chart/values.tmp.yaml > auth-tunnel.values.yaml
helm delete auth-tunnel --namespace=${PROJECT_NAME}
helm install auth-tunnel -f auth-tunnel.values.yaml --namespace=${PROJECT_NAME} deploy/production/sish-client-chart/
kubectl -n=${PROJECT_NAME} describe pod auth-tunnel
kubectl  -n=${PROJECT_NAME} get pods,statefulsets,services,ingresses
kubectl -n=${PROJECT_NAME} logs -l app=auth-tunnel-selector --all-containers=true -f
kubectl --namespace=${PROJECT_NAME} exec --stdin --tty auth-service-deployment-649c4b9668-pgcnr -- /bin/sh