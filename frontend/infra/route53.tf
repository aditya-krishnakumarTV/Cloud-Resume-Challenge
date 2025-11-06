locals {
  s3_origin_id = "s3_${aws_s3_bucket.adi-cloud-resume-challenge-bucket.bucket}"
}

# Retrive the hosted zone from Route53
data "aws_route53_zone" "hosted_zone" {
  name = var.domain_name
}

# Create Route53 records for the CloudFront distribution aliases
resource "aws_route53_record" "resume-cloudfront" {
  for_each = toset(aws_cloudfront_distribution.s3_distribution.aliases)

  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name    = each.key
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# This resource creates an ACM certificate for the domain name specified in the variables.
resource "aws_acm_certificate" "resume-acm-certificate" {
  domain_name       = var.domain_name
  validation_method = "DNS"


  lifecycle {
    create_before_destroy = true
  }
}

# This resource creates the CNAME records in Route 53 for DNS validation.
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.resume-acm-certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

# This resource tells Terraform to wait until the validation is complete and the certificate is ISSUED before trying to use it.
resource "aws_acm_certificate_validation" "cert_validation_wait" {
  certificate_arn         = aws_acm_certificate.resume-acm-certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
