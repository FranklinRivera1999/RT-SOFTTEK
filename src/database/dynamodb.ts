import {
  DYNAMO_ACCESS_KEY_ID,
  DYNAMO_ENDPOINT,
  DYNAMO_REGION,
  DYNAMO_SECRET_ACCESS_KEY,
} from "../env";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
export default class DynamoDatabase {
  constructor() {}

  getConnection(): DocumentClient {
    return new DocumentClient({
      accessKeyId: DYNAMO_ACCESS_KEY_ID,
      secretAccessKey: DYNAMO_SECRET_ACCESS_KEY,
      endpoint: DYNAMO_ENDPOINT,
      region: DYNAMO_REGION,
      logger: console,
    });
  }
}
