# This is the default provider for ACM and CloudFront
provider "aws" {
  region = "us-east-1"
}

# This is an aliased provider for S3 bucket in Mumbai
provider "aws" {
  alias  = "mumbai"
  region = "ap-south-1"
}
