# Create an S3 bucket for hosting the static website
resource "aws_s3_bucket" "adi-cloud-resume-challenge-bucket" {
  bucket = "adi-cloud-resume-challenge-bucket"

  tags = {
    Name = "Adi Cloud Resume Challenge Bucket"
  }
}

# Configure the S3 bucket for website hosting
resource "aws_s3_bucket_website_configuration" "cloud-resume-bucket-config" {
  bucket = aws_s3_bucket.adi-cloud-resume-challenge-bucket.id

  index_document {
    suffix = "index.html"
  }
}

# Set the bucket policy to allow public read access
resource "aws_s3_bucket_policy" "cloud-resume-bucket-policy" {
  bucket = aws_s3_bucket.adi-cloud-resume-challenge-bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.adi-cloud-resume-challenge-bucket.arn}/*"
      }
    ]
  })
}

# Bucket ownership controls settings
resource "aws_s3_bucket_ownership_controls" "cloud-resume-bucket-ownership-controls" {
  bucket = aws_s3_bucket.adi-cloud-resume-challenge-bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Block public access settings
resource "aws_s3_bucket_public_access_block" "cloud-resume-bucket-public-access-block" {
  bucket = aws_s3_bucket.adi-cloud-resume-challenge-bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Bucket ACL settings
resource "aws_s3_bucket_acl" "cloud-resume-bucket-acl" {
  bucket = aws_s3_bucket.adi-cloud-resume-challenge-bucket.id
  acl    = "public-read"

  depends_on = [
    aws_s3_bucket_ownership_controls.cloud-resume-bucket-ownership-controls,
    aws_s3_bucket_public_access_block.cloud-resume-bucket-public-access-block,
  ]
}

output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.adi-cloud-resume-challenge-bucket.bucket
}
