# 🚀 Nginx Load Balancer with Docker & Prometheus Monitoring

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-384D54?style=for-the-badge&logo=docker&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

# 📌 Overview

This project demonstrates how to deploy multiple Node.js applications behind an **Nginx Reverse Proxy** using **Docker Compose** and monitor them using **Prometheus**.

Instead of exposing every application individually, Nginx acts as a single entry point and distributes incoming requests across multiple backend containers using the **Round Robin Load Balancing** algorithm.

Prometheus continuously collects metrics from each application and provides real-time monitoring.

---

# 🎯 Problem Statement

Imagine your application receives thousands of requests every second.

Running only one application container creates problems:

- Single point of failure
- High CPU usage
- Poor scalability
- Downtime during maintenance

This project solves these problems by introducing:

- Reverse Proxy
- Load Balancing
- Multiple Containers
- Monitoring

---

# 🏗 Architecture

```
                    Client
                       │
                       ▼
                 Nginx Reverse Proxy
             ┌────────┼────────┐
             ▼        ▼        ▼
          App-1     App-2     App-3
             ▲        ▲        ▲
             └────────┼────────┘
                      │
                Prometheus
```

---

# ✨ Features

- Dockerized Node.js applications
- Nginx Reverse Proxy
- Round Robin Load Balancing
- Docker Compose
- Environment Variables
- Prometheus Monitoring
- Custom Metrics
- Health Monitoring
- Production Folder Structure
- Easy Deployment

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Backend |
| Express | API |
| Docker | Containerization |
| Docker Compose | Multi-container Management |
| Nginx | Reverse Proxy & Load Balancer |
| Prometheus | Monitoring |
| Linux | Development Environment |

---

# 📂 Project Structure

```
nginx-load-balancer-monitoring/

│
├── app/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── nginx/
│   └── nginx.conf
│
├── prometheus/
│   └── prometheus.yml
│
├── screenshots/
│   ├── architecture.png
│   ├── browser.png
│   ├── prometheus-home.png
│   ├── prometheus-targets.png
│   └── metrics.png
│
├── docker-compose.yml
│
├── .gitignore
│
└── README.md
```

---

# ⚙️ How It Works

### Step 1

The user opens

```
http://localhost:8080
```

↓

### Step 2

The request reaches Nginx.

↓

### Step 3

Nginx forwards the request to one backend container.

↓

```
App-1
```

↓

Next request

```
App-2
```

↓

Next request

```
App-3
```

↓

Again

```
App-1
```

This is called **Round Robin Load Balancing**.

---

# 📊 Monitoring Workflow

Prometheus continuously sends requests to

```
GET /metrics
```

for every application.

```
Prometheus

↓

GET /metrics

↓

App-1

↓

Metrics

↓

Database
```

The same process is repeated for App-2 and App-3 every 15 seconds.

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/nginx-load-balancer-monitoring.git

cd nginx-load-balancer-monitoring
```

---

## Build Containers

```bash
docker compose up --build
```

---

## Verify Running Containers

```bash
docker ps
```

---

## Open Application

```
http://localhost:8080
```

Refresh multiple times to observe load balancing.

---

## Open Prometheus

```
http://localhost:9090
```

---

# 📈 Prometheus Queries

Check application status

```
up
```

Total requests

```
http_requests_total
```

Memory Usage

```
process_resident_memory_bytes
```

CPU Usage

```
process_cpu_seconds_total
```

Node Version

```
nodejs_version_info
```

---

# 📡 API

## Home

```
GET /
```

Response

```json
{
    "app":"App-1",
    "hostname":"container-id",
    "time":"2026-08-02T12:30:22.000Z"
}
```

---

## Metrics

```
GET /metrics
```

Returns Prometheus metrics such as

- CPU Usage
- Memory Usage
- Event Loop
- HTTP Requests
- Node.js Metrics

---

# 🐳 Useful Docker Commands

Start containers

```bash
docker compose up
```

Stop containers

```bash
docker compose down
```

Rebuild

```bash
docker compose up --build
```

View running containers

```bash
docker ps
```

View logs

```bash
docker logs app1
```

Access container

```bash
docker exec -it app1 sh
```

---

# 📸 Screenshots

## Application

> Add browser screenshot here

```
screenshots/browser.png

```

---

## Docker Containers

```
screenshots/docker-ps.png
```

---

## Prometheus Dashboard

```
screenshots/prometheus-home.png
```

---

## Prometheus Targets

```
screenshots/prometheus-targets.png
```

---

## Metrics

```
screenshots/metrics.png
```

---

# 💡 Challenges Faced

During development, several issues were encountered and solved.

- Docker Build Issues
- npm install failures
- Node Version Compatibility
- Port Conflicts
- Nginx Upstream Errors
- Container Networking
- Docker Compose Debugging
- Prometheus Configuration Errors
- YAML Indentation Problems

Each issue helped improve debugging and troubleshooting skills.

---

# 📚 Learning Outcomes

After completing this project I learned:

- Docker Fundamentals
- Docker Compose
- Reverse Proxy
- Load Balancing
- Container Networking
- Environment Variables
- Monitoring
- Prometheus Metrics
- Docker Debugging
- Production Folder Structure

---

# 🔮 Future Improvements

- Grafana Dashboard
- Kubernetes Deployment
- AlertManager
- GitHub Actions CI/CD
- Health Checks
- SSL with Nginx
- HTTPS Support
- Auto Scaling
- Redis Cache
- Logging with Loki

---

# 👨‍💻 Author

**Mohd Farhan Khan**

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

# ⭐ Support

If you like this project:

- ⭐ Star this repository
- 🍴 Fork it
- 🛠 Contribute
- 📢 Share with others

---

## Thank You ❤️
