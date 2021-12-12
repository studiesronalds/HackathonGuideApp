# NestJS Kubernetes

## Snippet

  kubectl get -n nestjs-kubernetes-namespace pods

  PORT 3000
  HOST = "0.0.0.0"
  NODE_ENV = development
  APP_NAME = "Guide"
  APP_VERSION = "1.0"
  TYPEORM_CONNECTION = postgres
  TYPEORM_HOST = database
  TYPEORM_USERNAME = username

  TYPEORM_PORT = 5432
  TYPEORM_SYNCHRONIZE = true
  TYPEORM_LOGGING = true
  TYPEORM_ENTITIES = dist/**/*.entity.*
  TYPEORM_MIGRATIONS = dist/**/*.migration.*
  TYPEORM_ENTITIES_DIR = src/db/entity
  TYPEORM_MIGRATIONS_DIR = src/db/migration

NestJS Kubernetes example

## Features
- nestjs
- kubernetes
- skaffold
- postgres
- redis
- minio
- data
- secrets
- volumes

## How to use

```sh
git clone https://github.com/studiesronalds/HackathonGuideApp.git
```

```sh
cd HackathonGuideApp
```

### Create namespace and volume

- Add local-path-provisioner

```sh
kubectl apply -f kubernetes/_local-path-provisioner.yaml
```

- Create nestjs-kubernetes-namespace

```sh
kubectl apply -f kubernetes/01-namespaces.yaml
```

- Create nestjs-kubernetes-volume

```sh
kubectl apply -f kubernetes/02-volumes.yaml
```

- Create nestjs-kubernetes-secrets (Please fill {root}/.env data before that)

```sh
./env-kubectl-apply.sh kubernetes/03-secrets.yaml
kubectl get secrets -n nestjs-kubernetes-namespace # to check did it deploy
```

- Create nestjs-kubernetes-postgres (Please fill {root}/.env data before that)
```sh
./env-kubectl-apply.sh kubernetes/04-postgres.yaml
```

- Create nestjs-kubernetes-data
```sh
kubectl apply -f kubernetes/07-data.yaml
```

- Create nestjs-kubernetes-data (Please fill {root}/.env data before that)
```sh
./env-kubectl-apply.sh kubernetes/08-nestjs.yaml
```

- Get pod status
```sh
kubectl get -n nestjs-kubernetes-namespace pods
kubectl describe -n nestjs-kubernetes-namespace pods
kubectl describe -n nestjs-kubernetes-namespace deployment
kubectl describe pod 
```

- Delete everything related
```sh
kubectl delete all --all -n nestjs-kubernetes-namespace
```

### Port Forward

- 3000 - nestjs
- 3001 - data
- 9000 - minio
- 5432 - postgres
- 6379 - redis

Star it, open `http://localhost:3000` change the code and enjoy!

## License

MIT