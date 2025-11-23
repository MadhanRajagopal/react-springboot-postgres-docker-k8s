# React + Spring Boot + PostgreSQL — Docker & Kubernetes Demo

**Full-stack application** demonstrating a React frontend, Spring Boot backend, and PostgreSQL database — fully containerized with Docker and deployable to Kubernetes.

---

## Tech Stack
- **Frontend:** React (TypeScript)
- **Backend:** Spring Boot (Java)
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose
- **Orchestration:** Kubernetes
- **Build Tools:** Maven (backend), npm/yarn (frontend)

---

## Features
- CRUD operations for employee management (example)
- REST API implemented in Spring Boot
- React UI for interacting with backend
- PostgreSQL for persistent data
- Dockerized for consistent environment
- Kubernetes manifests for deployment

---

## Project Structure

``` bash
react-springboot-postgres-docker-k8s/
│
├── backend/employee-service/     # Spring Boot app
├── frontend/employee-ui/         # React app
├── k8s/                          # Kubernetes manifests
├── docker-compose.yml
├── .env                          # (should be private)
└── README.md                     

```

## Run frontend and backend locally (no containers)
``` 
# from repo root or backend/employee-service
cd backend/employee-service
mvn clean package
# run
java -jar target/*.jar

```

```
cd frontend/employee-ui
npm install
npm start
# or
yarn
yarn start
```


##  Quick local run using Docker Compose
This is the fastest way to run everything locally.

1. Create an env example:
   - In `.env` → add db secrets with placeholders.
2. Start:
```bash
docker compose up --build
```

## Build Docker images (if you prefer manual Docker commands)

# backend/employee-service
```
docker build -t your-dockerhub-username/employee-service:latest .
```
# frontend/employee-ui
```
docker build -t your-dockerhub-username/employee-ui:latest .

```
# Push Docker images into dockerhub registry
```
docker push your-dockerhub-username/employee-service:latest
docker push your-dockerhub-username/employee-ui:latest
```

## Kubernetes Deployment

```
kubectl apply -f k8s/
```

# verify resources 

```
kubectl get deployments,svc,pods 

```

# Troubleshooting
```
kubectl describe pod <pod-name> 
kubectl logs <pod-name> 

```

## --------------------------------Run Application using Local Image ----------------------------

##  1. Build Docker Images Locally using docker-compose 

# Backend
```
cd backend/employee-service
docker build -t employee-service:local .
```

# Frontend
```
cd frontend/employee-ui
docker build -t employee-ui:local .
```
The :local tag is optional — it just distinguishes that these are local images.

# Run With Docker Compose Locally

If you have a docker-compose.yml like in your repo:
```
docker compose up --build

```

Docker Compose will use the locally built images.
Make sure image: in docker-compose.yml matches the local tag, e.g. employee-service:local.
No registry is needed because Compose pulls from your local Docker daemon.


## 2  Running Locally with Kubernetes Kind (Kubernetes in Docker)

```
# Build image locally
docker build -t employee-service:local ./backend/employee-service
docker build -t employee-ui:local ./frontend/employee-ui

# Load into Kind cluster
kind load docker-image employee-service:local
kind load docker-image employee-ui:local

```

Then in your K8s manifests, use the same image names.

Kind will use the images without needing a registry.


✅ Tips

Always match the image: in your K8s YAML with the local tag.

Use imagePullPolicy: Never in your Deployment YAML so Kubernetes won’t try to pull from a registry:
```
spec:
  containers:
    - name: employee-service
      image: employee-service:local
      imagePullPolicy: Never
```

Same for the frontend.



