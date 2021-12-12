#!/bin/bash

set -o allexport; source .env; set +o allexport

$1
if [ -f "$1" ]; then
	envsubst < $1 | kubectl apply -f -
else 
    echo "$FILE does not exist."
fi