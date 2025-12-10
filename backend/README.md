# Backend - Cloud Resume Challenge

This directory contains the serverless backend infrastructure and application code for the Cloud Resume Challenge. The backend is responsible for the Visitor Counter feature, utilizing **AWS Lambda**, **API Gateway**, and **DynamoDB**, all provisioned via **Terraform**.

## 📂 Project Structure

The backend is organized into infrastructure configuration (Terraform) and application logic (Python Lambda).

```bash
backend/
├── infra/                  # Terraform Infrastructure as Code
│   ├── api.tf              # API Gateway v2 (HTTP API) configuration
│   ├── cors.tf             # CORS headers/settings for the API
│   ├── database.tf         # DynamoDB Table definition
│   ├── main.tf             # Main Terraform entry point
│   ├── outputs.tf          # Output variables (e.g., API Endpoint URL)
│   ├── providers.tf        # AWS Provider configuration
│   ├── serverless.tf       # Lambda function configuration and IAM roles
├── lambda/                 # Application Code
│   ├── visitor_counter.py  # Python logic for the atomic counter
└── .gitignore
```

## 🛠 Prerequisites

Before running the deployment, ensure you have the following installed and configured:

1.  **Terraform CLI** (v1.0+) installed.
2.  **AWS CLI** installed and configured with valid credentials (`aws configure`).
3.  **Python 3.x** (optional, if you need to modify/test the script locally).

## 🚀 Deployment Instructions

Follow these steps to provision the infrastructure on AWS.

### 1\. Initialize Terraform

Navigate to the infrastructure directory to initialize the project. This downloads the necessary AWS providers.

```bash
cd ../infra
terraform init
```

### 2\. Plan the Infrastructure

Run a plan to see exactly what resources Terraform will create. This ensures there are no syntax errors.

```bash
terraform plan
```

### 3\. Apply and Deploy

Provision the resources on AWS. Type `yes` when prompted to confirm.

```bash
terraform apply
```

> **Note** : The Terraform code already includes the process of zipping the Python code for upload, so that is covered when you perform `terraform apply` .

### 4\. Get the API Endpoint

Once the deployment is complete, Terraform will print the `outputs`. Look for the API Gateway URL (e.g., `api_endpoint`).

> **Copy this URL.** You will need to paste it into your Frontend JavaScript code so your website can talk to this backend.

## 🧪 Testing

You can test the backend immediately after deployment using `curl`:

```bash
# Replace with the URL from your terraform outputs
curl https://xyz123.execute-api.us-east-1.amazonaws.com/dev/visitor-count
```

**Expected Output:**

```json
{"count": 1}
```

## 🧹 Cleanup

To remove all resources and avoid incurring AWS costs, run the destroy command from the `backend/infra` directory:

```bash
terraform destroy
```

-----

## ⚠️ Important Note on Security

**Do not commit `terraform.tfstate` or `terraform.tfstate.backup` to GitHub.**
These files contain sensitive information about your infrastructure. Ensure your `.gitignore` in the `backend/` folder includes:

```text
.terraform/
*.tfstate
*.tfstate.backup
*.tfvars
*.zip
```
