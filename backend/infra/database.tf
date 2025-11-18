# DynamoDB table for visitor counter
resource "aws_dynamodb_table" "cloud_resume_dynamoDB" {
  name         = "Cloud-Resume-DynamoDB-visitor-counter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "counter_id"

  attribute {
    name = "counter_id"
    type = "S"
  }

  tags = {
    Name = "Cloud_resume_dynamoDB"
  }

}
