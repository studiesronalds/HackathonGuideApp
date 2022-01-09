#!/bin/bash

set -o allexport; source .env; set +o allexport

echo $DOCKER_REPOSITORY_URL

docker push "${DOCKER_REPOSITORY_URL}/hackathonguide:v1"
