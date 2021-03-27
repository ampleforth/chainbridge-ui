.PHONY: ecr-login install build push

DOCKER_REPO ?= chainbridge-ui
# Uses Git's HEAD revision hash as DOCKER_TAG
# Change DOCKER_TAG value for test runs

COMMIT_HASH = $(shell git rev-parse --short HEAD)

DOCKER_TAG ?= $(shell whoami)-$(COMMIT_HASH)
DOCKER_TAG_LATEST ?= 'latest'

AWS_ACCOUNT_ID ?= 834138259469
AWS_ECR_REGION ?= us-west-2
AWS_ECR_DOMAIN ?= $(AWS_ACCOUNT_ID).dkr.ecr.$(AWS_ECR_REGION).amazonaws.com

ecr-login:
	@$(shell aws ecr get-login --no-include-email --region $(AWS_ECR_REGION))

build:
	# --no-cache to avoid caching outdated github master repo
	@docker build --no-cache -t $(DOCKER_REPO):$(DOCKER_TAG) .

push: ecr-login
	@docker tag $(DOCKER_REPO):$(DOCKER_TAG) $(AWS_ECR_DOMAIN)/$(DOCKER_REPO):$(DOCKER_TAG)
	@docker push $(AWS_ECR_DOMAIN)/$(DOCKER_REPO):$(DOCKER_TAG)
	@docker tag $(DOCKER_REPO):$(DOCKER_TAG) $(AWS_ECR_DOMAIN)/$(DOCKER_REPO):$(DOCKER_TAG_LATEST)
	@docker push $(AWS_ECR_DOMAIN)/$(DOCKER_REPO):$(DOCKER_TAG_LATEST)

minikube:
	@eval $(minikube docker-env); \
	kubectl config use-context minikube
