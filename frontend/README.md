# Frontend - Cloud Resume Challenge

This directory contains the frontend source code (React + Vite) and the infrastructure configuration (Terraform) required to host the website on AWS using S3 and CloudFront.

## 📂 Project Structure

```bash
frontend/
├── infra/                  # Terraform Infrastructure
│   ├── main.tf             # Main entry point
│   ├── route53.tf          # DNS and Certificate configuration (ACM)
│   ├── ui.tf               # S3 Bucket and CloudFront Distribution setup
│   ├── variables.tf        # Input variables (e.g., domain name)
│   ├── outputs.tf          # Output values (e.g., CloudFront URL)
│   └── provider.tf         # AWS Provider settings
├── src/                    # React Source Code
│   ├── api/                # API integration (visitorCounter.ts)
│   ├── pages/              # Website pages
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
````

## 🛠 Prerequisites

  * **Node.js & npm** (v16+ recommended)
  * **Terraform CLI**
  * **AWS CLI** configured (`aws configure`)

-----

## 💻 Part 1: Local Development (Vite)

Follow these steps to run the website locally on your machine.

### 1\. Install Dependencies

Navigate to the frontend folder and install the node modules.

```bash
cd frontend
npm install
```

### 2\. Configure Backend URL

Open `src/api/visitorCounter.ts`. Ensure the API URL points to the endpoint you generated in the Backend deployment step.
*(Alternatively, if you are using `.env` files, update your `.env.local`)*.

### 3\. Run Development Server

Start the local server.

```bash
npm run dev
```

Access the site at `http://localhost:5173` (or the port shown in your terminal).

### 4\. Build for Production

Before deploying, generate the optimized static files. This creates a `dist` folder.

```bash
npm run build
```

-----

## ☁️ Part 2: Infrastructure Setup (Terraform)

This sets up the S3 bucket for hosting, CloudFront for caching/HTTPS, and Route 53 for the domain.

### 1\. Initialize Terraform

Navigate to the infrastructure folder.

```bash
cd infra
terraform init
```

### 2\. Configure Variables

Check `variables.tf` to see required inputs (usually your domain name). You may need to create a `terraform.tfvars` file or enter values when prompted.

*Example `terraform.tfvars`:*

```hcl
domain_name = "example.com"
bucket_name = "my-resume-bucket"
```

> **Note** : If you have **not** purchased your domain directly through AWS, you will need to manually update the **Nameservers** in your domain registrar (e.g., GoDaddy, Namecheap) to match the Nameservers that Terraform creates in your Route 53 Hosted Zone.


### 3\. Plan and Apply

Review and provision the resources.

```bash
terraform plan
terraform apply
```

### 4\. Deployment (Sync Files)

Terraform creates the infrastructure, but **you must upload the website files manually** (or via CI/CD).

After running `npm run build` (from Part 1), sync the `dist` folder to your new S3 bucket:

```bash
# Replace with your actual bucket name
aws s3 sync ../dist s3://YOUR_BUCKET_NAME --delete
```

-----

## 🧹 Cleanup

To remove the infrastructure and stop costs:

1.  **Empty the S3 Bucket** (Terraform usually fails to delete non-empty buckets):
    ```bash
    aws s3 rm s3://YOUR_BUCKET_NAME --recursive
    ```
2.  **Destroy Resources**:
    ```bash
    cd infra
    terraform destroy
    ```

-----

## ⚠️ Security Note

**Do not commit the following files to GitHub:**

  * `.env` or `.env.local`
  * `infra/.terraform/`
  * `infra/*.tfstate`
  * `infra/*.tfstate.backup`
  * `infra/terraform.tfvars`

Ensure these are listed in your `.gitignore` file.

```
