🚀 React App on AWS ECS with ECR & ALB
This project demonstrates how to containerize a React application and deploy it securely to AWS ECS (Fargate) using:

Amazon ECR for image storage

Application Load Balancer (ALB) for routing

VPC networking best practices for secure isolation

ECS Service Auto Scaling based on CPU utilization

🧱 Architecture Overview
React app containerized using Docker

Docker image stored in Amazon ECR

Deployed to ECS (Fargate) as a service

ALB routes incoming traffic to ECS tasks

ECS tasks hosted in private subnets

ALB & NAT Gateway in public subnets

Auto Scaling enabled for ECS based on CPU

🔐 VPC Networking Layout
scss
Copy
Edit
VPC
├── Public Subnet(s)
│   ├── Application Load Balancer (ALB)
│   └── NAT Gateway
│
└── Private Subnet(s)
    └── ECS Service (Fargate Tasks running React container)
ALB receives public HTTPS traffic and routes it to ECS

ECS tasks are isolated from the internet

NAT Gateway allows outbound access if needed (e.g., for updates)

⚖️ Auto Scaling Based on CPU
To ensure the app scales under load, ECS Service Auto Scaling was configured:

Scaling metric: CPU utilization

Target threshold: 70%

If average CPU usage across running tasks exceeds 70%, new tasks are added

If CPU usage drops, excess tasks are removed

This provides horizontal scalability, helping maintain performance and availability under varying traffic loads.

🐳 Containerization with Docker
Dockerfile
Copy
Edit
# Dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
📦 CI/CD: Pushing Image to Amazon ECR via GitHub Actions
This project uses GitHub Actions to build and push the Docker image to Amazon ECR automatically on code changes.

✅ What Happens
On every push to main, the workflow:

Checks out the latest code

Builds the Docker image

Authenticates to ECR using OIDC (secure)

Pushes the image to your ECR repo

📌 Prerequisites
ECR repo (e.g., react-app)

IAM role with OIDC trust for GitHub

GitHub repo permissions properly configured

🧩 Sample GitHub Actions Workflow
yaml
Copy
Edit
name: Deploy React App to ECR

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      id-token: write
      contents: read

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::<aws_account_id>:role/<github_oidc_role>
          aws-region: <region>

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push Docker image
        env:
          ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
          ECR_REPOSITORY: react-app
          IMAGE_TAG: latest
        run: |
          docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
🚀 Deploying to ECS (Fargate)
Create ECS Cluster

Register Task Definition

Set CPU & memory

Point to your ECR image

Create ECS Service

Launch type: Fargate

Network: Private subnets

Attach to ALB Target Group

Enable Auto Scaling

Target CPU Utilization: 70%

Set min/max task count (e.g., 1–5)

🌐 Routing with Application Load Balancer (ALB)
ALB is deployed in public subnet

HTTPS listener forwards requests to ECS

Security Groups:

ALB allows inbound 443 (HTTPS)

ECS only accepts traffic from ALB

🔐 Security Best Practices
ECS tasks are not publicly accessible

ALB is the only internet-facing component

NAT Gateway used only if tasks require outbound access

IAM roles follow least privilege principle

🧪 Testing the Setup
Access the app using the ALB DNS name or your custom domain

Ensure it loads over HTTPS

Monitor logs in CloudWatch

Simulate load to observe auto scaling behavior

✅ To-Do / Customization Ideas
⛓️ Add SSL with ACM

📦 Automate infra with Terraform/CDK

🧪 Add staging environments

🛰️ Add CloudFront as CDN

🔁 Extend CI/CD to trigger ECS deployment post-push

📬 Contact
Feel free to reach out for questions, feedback, or collaboration!