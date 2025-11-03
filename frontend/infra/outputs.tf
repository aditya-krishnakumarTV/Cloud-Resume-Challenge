output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.adi-cloud-resume-challenge-bucket.bucket
}

output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}
