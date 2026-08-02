# 🚀 Dockerized Nginx Load Balancer with Prometheus Monitoring

A production-inspired project demonstrating how to build a scalable backend architecture using Docker, Docker Compose, Nginx Reverse Proxy, and Prometheus Monitoring.

This project contains three Node.js backend servers running inside Docker containers behind an Nginx Load Balancer. Prometheus continuously monitors every backend by scraping application metrics.

---

# 📌 Project Goal

The goal of this project is to understand how real-world backend systems are designed.

Instead of exposing a single backend server directly to users, requests first go through an Nginx Reverse Proxy which distributes traffic among multiple backend servers.

Additionally, Prometheus continuously monitors the health and performance of every backend service.

---

# 🏗 Project Architecture

```
                 Client
                    │
                    ▼
         ┌────────────────────┐
         │  NGINX Reverse Proxy│
         │    Load Balancer    │
         └────────────────────┘
          │        │        │
          ▼        ▼        ▼
      App-1     App-2     App-3
          │        │        │
          └────────┼────────┘
                   │
                   ▼
             Prometheus
          (Metrics Collector)

```

---

# 📷 Architecture Diagram

> Add this image inside the `images/` folder.

```
images/architecture.png
```

---

# 📚 What is Reverse Proxy?

A Reverse Proxy is a server that sits between clients and backend servers.

Instead of clients communicating directly with backend servers, every request first reaches Nginx.

Nginx then forwards that request to one of the available backend servers.

### Benefits

- Hide backend servers
- Increase security
- Load balancing
- Better scalability
- SSL termination
- Caching support

---

# 📚 What is Load Balancing?

Load Balancing means distributing incoming requests across multiple backend servers.

Instead of sending every request to a single server:

```
Client
   │
   ▼
App-1 ❌ overloaded
```

Requests become:

```
Client
   │
   ▼
Nginx

 ├──► App-1
 ├──► App-2
 └──► App-3
```

This improves

- Performance
- Availability
- Fault tolerance
- Scalability

---

# 📚 What is Prometheus?

Prometheus is an open-source monitoring tool.

Instead of applications sending metrics to Prometheus,

Prometheus **pulls** metrics from applications.

This is called the **Pull Model**.

Every few seconds Prometheus sends an HTTP request:

```
GET /metrics
```

The application responds with all current metrics.

---

# 📚 What are Metrics?

Metrics are numerical values that describe the current state of an application.

Examples:

- CPU Usage
- Memory Usage
- Number of HTTP Requests
- Application Uptime
- Response Time
- Error Count

Example:

```
http_requests_total 52
```

Means:

Application has served 52 requests.

---

# 📚 Why Monitoring?

Without monitoring,

we never know

- whether a container is alive
- how many requests it served
- memory usage
- CPU usage
- application crashes

Monitoring provides complete visibility into running services.

---

# 📂 Project Structure

```
nginx-load-balancer/
│
├── app/
│   ├── server.js
│   ├── Dockerfile
│   ├── package.json
│
├── nginx/
│   └── nginx.conf
│
├── prometheus/
│   └── prometheus.yml
│
├── docker-compose.yml
│
├── images/
│
└── README.md
```

---

# ⚙ Tech Stack

- Node.js
- Express.js
- Docker
- Docker Compose
- Nginx
- Prometheus
- Prom Client

---

# ⚙ Features

✅ Dockerized Backend

✅ Nginx Reverse Proxy

✅ Round Robin Load Balancing

✅ Multiple Backend Containers

✅ Prometheus Monitoring

✅ HTTP Request Counter

✅ Health Monitoring

✅ Metrics Endpoint

---

# 🚀 Running the Project

Clone repository

```bash
git clone <repository-url>
```

Move into project

```bash
cd nginx-load-balancer
```

Run containers

```bash
docker compose up --build
```

---

# 🌐 Application

Open

```
http://localhost:8080
```

Refresh multiple times.

You'll notice responses coming from

- App-1
- App-2
- App-3

showing Nginx Load Balancing.

---

# 📈 Prometheus

Open

```
http://localhost:9090
```

---

# Check Targets

```
Status
   ↓
Targets
```

Expected

```
app1   UP

app2   UP

app3   UP
```

---

# Useful Prometheus Queries

## Check Health

```
up
```

Result

```
1 = Running

0 = Down
```

---

## HTTP Requests

```
http_requests_total
```

Shows how many requests every backend has handled.

---

# 📊 Example Monitoring Output

```
App-1 -> 16 Requests

App-2 -> 7 Requests

App-3 -> 16 Requests
```

---

# Simulating Failure

Stop one backend

```bash
docker stop app2
```

Run query

```
up
```

Result

```
App-1 = 1

App-2 = 0

App-3 = 1
```

Prometheus immediately detects that App-2 is down.

---

# Docker Containers

```
app1

app2

app3

nginx

prometheus
```

---

# Screenshots

## Architecture

![Architecture](images/architecture.png)

---

## Docker Containers

![Docker](images/docker-containers.png)

---

## Load Balancing

### App-1

![App1](images/app1.png)

---

### App-2

![App2](images/app2.png)

---

### App-3

![App3](images/app3.png)

---

## Prometheus Targets

![Targets](images/prometheus-targets.png)

---

## HTTP Request Metrics

![Metrics](images/prometheus-http.png)

---

## Graph

![Graph](images/prometheus-graph.png)

---

## Health Monitoring

![Health](images/prometheus-up.png)

---

# Future Improvements

- Grafana Dashboard
- Alertmanager
- Kubernetes Deployment
- HTTPS
- SSL Certificate
- CI/CD Pipeline using GitHub Actions
- Docker Swarm
- Kubernetes HPA
- Loki Logging
- Jaeger Tracing

---

# Learning Outcomes

Through this project I learned:

- Docker Images
- Docker Containers
- Docker Compose
- Multi-container Applications
- Reverse Proxy
- Load Balancing
- Monitoring
- Metrics
- Prometheus
- Container Networking
- Production Architecture Basics

---

# Author

**Mohd Farhan Khan**

If you found this project useful, consider giving it a ⭐ on GitHub.
