#!/usr/bin/env pwsh

# Get the API Gateway URL from Terraform output
$apiUrl = terraform -chdir="./backend/infra" output -raw api_gateway_url

# Create or update the .env file
@"
VITE_API_URL=$apiUrl
"@ | Out-File -FilePath "./frontend/.env" -Encoding UTF8

Write-Host "Created .env file with API URL: $apiUrl"