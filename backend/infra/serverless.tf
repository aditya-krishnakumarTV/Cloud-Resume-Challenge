# zip the lambda function code
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "../lambda/visitor_counter.py"
  output_path = "../lambda/visitor_counter.zip"
}

# IAM role for Lambda function
resource "aws_iam_role" "lambda_role" {
  name = "lambda_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name = "Cloud resume Lambda role"
  }
}

# IAM policy to allow Lambda to access DynamoDB
resource "aws_iam_role_policy" "labmbda_iam_policy" {
  name = "lambda_dynamodb_policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem"
        ]
        Effect   = "Allow"
        Resource = aws_dynamodb_table.cloud_resume_dynamoDB.arn
      }
    ]
  })

}

# Attach AWSLambdaBasicExecutionRole policy to the Lambda role
data "aws_iam_policy" "lambda_basic_execution" {
  name = "AWSLambdaBasicExecutionRole"
}

# Attach the policy to the role
resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = data.aws_iam_policy.lambda_basic_execution.arn
}

# Create the Lambda function
resource "aws_lambda_function" "visitor_counter_lambda" {
  function_name    = "VisitorCounterFunction"
  role             = aws_iam_role.lambda_role.arn
  handler          = "visitor_counter.lambda_handler"
  runtime          = "python3.8"
  filename         = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256

  environment {
    variables = {
      DYNAMODB_TABLE_NAME = aws_dynamodb_table.cloud_resume_dynamoDB.name
    }
  }

  tags = {
    Name = "Cloud_resume_visitor_counter_lambda"
  }
}
