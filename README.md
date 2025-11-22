# Cloud Resume Challenge - AWS

[![Architecture](https://img.shields.io/badge/Architecture-Serverless-orange?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/)  

[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)]()   

[![Website](https://img.shields.io/badge/Website-Live-blue?style=flat-square)](https://adityakrishnakumar.com/)

This repository contains the source code and infrastructure configurations for my submission to the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

The project deploys a static resume website on AWS using a serverless architecture. It includes a visitor counter that tracks page views using a Python Lambda function and DynamoDB.

## 🏗 Architecture

The infrastructure follows a completely serverless approach to ensure scalability, low cost, and high availability.

<img width="929" height="691" alt="Cloud-Resume-Challenge-infra" src="https://github.com/user-attachments/assets/411ce4ed-7cf5-46eb-a4dc-003f76e691ca" />

## Data Flow

1.  **Frontend Delivery:**
    * **Route 53** resolves the domain name and directs traffic to CloudFront.
    * **CloudFront** (CDN) serves the static website content globally with low latency. It pulls content from an **S3 Bucket**.
    * **AWS Certificate Manager (ACM)** provisions the SSL/TLS certificate, ensuring the site is secure (HTTPS).

2.  **Backend (Visitor Counter):**
    * JavaScript on the client side sends a `GET` request to **API Gateway** when the page loads.
    * API Gateway invokes an **AWS Lambda** function.
    * The Lambda function performs atomic updates on an **Amazon DynamoDB** table to increment the visitor count and returns the updated value to the frontend.

## 🛠 Tech Stack

**Frontend**
* **React ( HTML/TailwindCSS/Typescript )** : Resume content and styling.
* **Amazon S3** : Static object storage.
* **Amazon CloudFront** : Content Delivery Network.
* **Amazon Route 53** : DNS Management.

**Backend**
* **AWS API Gateway** : REST API endpoint.
* **AWS Lambda** : Serverless compute (Python/Node.js).
* **Amazon DynamoDB** : NoSQL database for state storage.

**DevOps & CI/CD**
* **GitHub Actions** : Automates the deployment of frontend code.
* **Infrastructure as Code (IaC)** : Defined resources using Terraform for both frontend and backend.

## 📂 Project Structure

```bash
.
├── .github/workflows/
│   └── frontend-deploy.yaml # GitHub Actions workflow for frontend deployment
├── backend/
│   ├── infra/               # Backend-specific infrastructure code (IaC)
│   └── lambda/              # Source code for the visitor counter Lambda
├── frontend/
│   ├── infra/               # Frontend-specific infrastructure code (IaC)
│   ├── public/              # Static assets (images, icons)
│   ├── src/                 # Main React/TypeScript source code
│   ├── index.html           # HTML entry point
│   ├── vite.config.js       # Vite build configuration
│   └── package.json         # Frontend dependencies and scripts
└── README.md
