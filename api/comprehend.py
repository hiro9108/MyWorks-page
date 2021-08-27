import json
import boto3


# Comprehend constant
REGION = 'ca-central-1'


# Function for detecting sentiment
def detect_sentiment(text, language_code):
    comprehend = boto3.client('comprehend', region_name=REGION)
    response = comprehend.detect_sentiment(Text=text, LanguageCode=language_code)
    return response


def main(event, context):
    print(f"Check {event}")
    decoded_body = json.loads(event['body'])

    # text
    text = decoded_body['textData']

    # language code
    language_code = 'en'

    # detecting sentiment
    result = detect_sentiment(text, language_code)
    print("Starting detecting sentiment")
    print(json.dumps(result, sort_keys=True, indent=4))
    print("End of detecting sentiment\n")

    return {
        'body': json.dumps(result),
        'headers': {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
    }


if __name__ == '__main__':
    main()