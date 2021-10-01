# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
FROM golang:1.16.2-buster as base
RUN apt update && \
    apt-get install -y \
        build-essential \
        ca-certificates \
        curl

RUN GRPC_HEALTH_PROBE_VERSION=v0.4.5 && \
    wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
    chmod +x /bin/grpc_health_probe && \
    go install github.com/google/wire/cmd/wire@latest
WORKDIR /src

FROM base as dev
RUN curl -fLo install.sh https://raw.githubusercontent.com/cosmtrek/air/master/install.sh \
    && chmod +x install.sh && sh install.sh && mv ./bin/air /bin/air
RUN go install github.com/vadimi/grpc-client-cli/cmd/grpc-client-cli@latest


FROM base as builder
ARG SKAFFOLD_GO_GCFLAGS
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN make build
RUN ./dist/server --help
FROM alpine as release
WORKDIR /src
COPY --from=builder /bin/grpc_health_probe /bin/grpc_health_probe
COPY --from=builder /src/dist/server /usr/bin/server
ENTRYPOINT ["/usr/bin/server"]