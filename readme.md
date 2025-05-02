# 📊 NL-Query Platform

**Upload your database → Chat with your data → Get instant insights**  
Built with a **Java (Spring Boot)** backend and **Next.js / TypeScript** frontend using a **TurboRepo** Monorepo.

---

## ✨ Features

- **Authentication**: OAuth2 / JWT
- **Projects**: Create multiple projects to organize your data
- **Chats**: Each chat is tied to one Excel/CSV upload
- **Data Upload**: Smart file ingestion with automatic schema detection
- **Natural-Language Queries**: Ask questions like “Top sales last quarter?”
- **SQL Translation**: Secure NL → SQL → Query execution
- **Realtime Updates**: Live upload and query progress via WebSocket (Socket.IO)
- **Insights & Summaries**: LLM-powered text summaries + visualizations
- **Export**: Download results as CSV or Excel
- **Cloud Native**: Deployed on AWS (EKS, RDS, S3) using Kubernetes + Helm
- **CI/CD**: GitHub Actions for automated build, test, deploy

---

## 🏗️ Tech Stack

| Layer          | Tech                                                                 |
|----------------|----------------------------------------------------------------------|
| Frontend       | Next.js (TypeScript), Tailwind CSS, Vercel Edge Functions            |
| API Gateway    | Node.js, Express.js, tRPC, GraphQL, Prisma                           |
| Core Backend   | Java 17+, Spring Boot 3 (WebFlux, Security, Batch, Cloud)            |
| Data & Caching | PostgreSQL, MongoDB, Redis, AWS S3                                   |
| Real-time      | Socket.IO (WebSocket Pub/Sub)                                        |
| DevOps         | Docker, Kubernetes (AWS EKS), Helm, GitHub Actions                   |
| Observability  | Prometheus, Grafana, ELK Stack                                       |

---

## 🧱 Monorepo Structure

```
/apps
  /frontend    → Next.js app
  /bff         → Node.js API Gateway (tRPC/GraphQL)

/infra
  /helm        → Helm charts for Kubernetes deployments

/services
  /auth        → Java microservice (Authentication)
  /upload      → Java microservice (File upload & ingestion)
  /etl         → Java microservice (Schema inference & ETL)
  /query       → Java microservice (NL-to-SQL + query execution)
  /insights    → Java microservice (Insights and summaries)
```

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js v18+
- JDK 17+
- Docker
- `kubectl` + Helm
- AWS CLI (optional for cloud deployment)

---

### 2. Setup Monorepo

```bash
# Clone repo
git clone https://github.com/yourusername/nl-query-platform.git
cd nl-query-platform

# Install frontend and BFF dependencies
cd apps/frontend && npm install
cd ../bff && npm install

# Build Java microservices (example)
cd services/auth && ./mvnw install
```

---

### 3. Local Development

```bash
# Start frontend (Next.js)
cd apps/frontend
npm run dev

# Start BFF (tRPC/Express)
cd ../bff
npm run dev

# Start Java microservices (example: auth)
cd services/auth
./mvnw spring-boot:run
```

- **Frontend** → http://localhost:3000  
- **BFF** → http://localhost:4000  
- **Java services** → run on their respective ports

---

### 4. Docker Compose (optional local setup)

_Coming soon! (Compose file to run everything together.)_

---

## 🛡️ CI/CD Pipeline

**GitHub Actions:**

- Lint + Test Node.js apps
- Build + Test Java services
- Dockerize and push to AWS ECR
- Deploy via Helm to AWS EKS

---

## 📈 Roadmap

- Monorepo bootstrapped (TurboRepo)
- Basic project / chat flows
- Realtime collaboration on chats
- SSO / OAuth2 providers integration
- Admin dashboard for monitoring
- AI-based chart suggestions (future)

---

## 🤝 Contributing

Pull requests are welcome!  
Please open an issue first to discuss major changes.
