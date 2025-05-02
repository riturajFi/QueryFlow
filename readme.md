# 📊 NL-Query Platform

*Upload your database → Chat with your data → Get instant insights*  
Built as a full-stack, cloud-native app with Java (Spring Boot) backend and Next.js/TypeScript frontend, organized in a TurboRepo monorepo.

---

## ✨ Features

- **Authentication**: OAuth2 / JWT  
- **Projects**: Organize uploads into multiple projects  
- **Chats**: One chat per Excel/CSV upload  
- **Smart Ingestion**: Automatic schema inference & preview  
- **Natural-Language Queries**: “Top sales last quarter?” → instant answers  
- **Secure NL→SQL**: Parameterized SQL generated & executed safely  
- **Realtime Updates**: Upload & query status via WebSocket (Socket.IO)  
- **LLM-Powered Insights**: Text summaries + charts  
- **Export**: CSV or Excel downloads  
- **Cloud-Native**: AWS EKS, RDS, S3 + Kubernetes + Helm  
- **CI/CD**: GitHub Actions for build, test, deploy  

---

## 🏗️ Tech Stack

| Layer             | Technology                                                                               |
|-------------------|------------------------------------------------------------------------------------------|
| **Frontend**      | Next.js (TypeScript), Tailwind CSS, Vercel Edge Functions                                |
| **BFF / API**     | Node.js, Express.js, tRPC, GraphQL, Prisma                                               |
| **Core Backend**  | Java 17+, Spring Boot 3 (WebFlux, Security, Batch, Cloud)                                |
| **Databases**     | PostgreSQL, MongoDB, Redis                                                               |
| **Storage**       | AWS S3                                                                                   |
| **Realtime**      | Socket.IO (WebSocket Pub/Sub)                                                            |
| **DevOps**        | Docker, Kubernetes (AWS EKS), Helm, GitHub Actions                                       |
| **Observability** | Prometheus, Grafana, ELK Stack                                                           |

---

## 🧱 Monorepo Layout

\`\`\`bash
/apps
  ├── frontend    # Next.js + Tailwind UI
  └── bff         # Node.js API Gateway (tRPC/GraphQL)

/infra
  └── helm        # Kubernetes Helm charts

/services
  ├── auth        # Spring Boot (OAuth2 / JWT)
  ├── upload      # Spring Batch → S3 ingestion
  ├── etl         # Schema inference & ETL
  ├── query       # NL→SQL translation & execution
  └── insights    # Aggregates + LLM summaries
\`\`\`

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js** v18+  
- **JDK** 17+  
- **Docker** & **Docker Compose**  
- **kubectl** + **Helm**  
- **AWS CLI** (optional)

---

### 2. Clone & Install

\`\`\`bash
git clone https://github.com/yourusername/nl-query-platform.git
cd nl-query-platform

# Install frontend deps
cd apps/frontend && npm install

# Install BFF deps
cd ../bff && npm install

# Build Java services
cd ../../services/auth && ./mvnw clean install
\`\`\`

---

### 3. Local Development

\`\`\`bash
# Frontend
cd apps/frontend
npm run dev           # → http://localhost:3000

# API Gateway (BFF)
cd ../bff
npm run dev           # → http://localhost:4000

# Java microservices
cd ../../services/auth
./mvnw spring-boot:run
# repeat for /upload, /etl, /query, /insights
\`\`\`

---

### 4. (Optional) Docker Compose

_Compose file coming soon to spin up all services locally._

---

## 🛡️ CI/CD Pipeline

GitHub Actions workflows:

1. **Lint & Test** Node.js apps  
2. **Build & Test** Java services  
3. **Dockerize** & push images to AWS ECR  
4. **Helm Deploy** to AWS EKS  

---

## 📈 Roadmap

- ✅ Monorepo scaffolded (TurboRepo)  
- ✅ Basic project & chat flows  
- 🔄 Realtime collaboration  
- 🔜 SSO / OAuth2 provider integration  
- 🔜 Admin / monitoring dashboard  
- 🔜 AI-driven chart suggestions  

---

## 🤝 Contributing

Pull requests welcome!  
Please open an issue first to discuss significant changes.
