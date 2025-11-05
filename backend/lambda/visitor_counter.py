import boto3
from botocore.exceptions import ClientError
from decimal import Decimal

TABLE_NAME = "Cloud-Resume-DynamoDB-visitor-counter"
ITEM_PK_NAME = "counter_id"
ITEM_PK_VALUE = "0"
COUNTER_ATTR_NAME = "visitor_count"


def lambda_handler(event, context):

    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(TABLE_NAME)

    try:
        response = table.update_item(
            Key={
                ITEM_PK_NAME: ITEM_PK_VALUE
            },

            UpdateExpression=f"SET {COUNTER_ATTR_NAME} = if_not_exists({COUNTER_ATTR_NAME}, :start) + :inc",

            ExpressionAttributeValues={
                ':inc': Decimal(1),
                ':start': Decimal(0)
            },
            ReturnValues="UPDATED_NEW"
        )

        new_count = response['Attributes'][COUNTER_ATTR_NAME]

        print(
            f"Successfully incremented count for '{ITEM_PK_VALUE}'. New count: {new_count}")

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST'
            },
            'body': str(new_count)
        }

    except ClientError as e:
        # Handle potential errors
        error_code = e.response['Error']['Code']
        if error_code == 'ResourceNotFoundException':
            print(f"Error: The table '{TABLE_NAME}' was not found.")
        elif error_code == 'ValidationException':
            print(f"Error: Validation failed. Check your Key schema and attribute names.")
        elif error_code == 'ProvisionedThroughputExceededException':
            print("Error: Provisioned throughput exceeded. Consider on-demand scaling.")
        else:
            print(f"An unexpected error occurred: {e}")

        # Return an error response
        return {
            'statusCode': 500,
            'body': f"Error updating count: {e.response['Error']['Message']}"
        }

    except Exception as e:
        print(f"An unknown error occurred: {e}")
        return {
            'statusCode': 500,
            'body': "An unknown server error occurred."
        }
