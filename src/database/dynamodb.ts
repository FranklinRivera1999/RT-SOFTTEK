import {
  DYNAMO_ACCESS_KEY_ID,
  DYNAMO_ENDPOINT,
  DYNAMO_REGION,
  DYNAMO_SECRET_ACCESS_KEY,
} from "../env";
import aws from "aws-sdk";
export default class DynamoDatabase {
  constructor() {}

  getConnection(): aws.DynamoDB.DocumentClient {
    return new aws.DynamoDB.DocumentClient({
      accessKeyId: DYNAMO_ACCESS_KEY_ID,
      secretAccessKey: DYNAMO_SECRET_ACCESS_KEY,
      endpoint: DYNAMO_ENDPOINT,
      region: DYNAMO_REGION,
      logger: console,
    });
  }
}
