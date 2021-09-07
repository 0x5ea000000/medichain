PACKAGES=$(shell go list ./... | grep -v '/simulation')

VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')

ldflags = -X github.com/sota/medichain/version.Name=Medichain \
	-X github.com/sota/medichain/version.ServerName=medichaind \
	-X github.com/sota/medichain/version.Version=$(VERSION) \
	-X github.com/sota/medichain/version.Commit=$(COMMIT)

BUILD_FLAGS := -ldflags '$(ldflags)'

all: install

install: go.sum
		@echo "--> Installing medichaind"
		@go install -mod=readonly $(BUILD_FLAGS) ./cmd/medichaind

go.sum: go.mod
		@echo "--> Ensure dependencies have not been modified"
		GO111MODULE=on go mod verify

test:
	@go test -mod=readonly $(PACKAGES)