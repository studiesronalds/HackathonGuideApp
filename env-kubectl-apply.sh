#!/bin/bash

set -o allexport; source .env; set +o allexport
echo "apply $1 with enviroment params"
if [ -f "$1" ]; then
	envsubst < $1 | kubectl apply -f -
else 
    echo "$FILE does not exist."
fi