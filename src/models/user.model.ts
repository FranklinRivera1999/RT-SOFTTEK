import { DocumentClient, ItemList } from "aws-sdk/clients/dynamodb";
import { DynamoDatabase } from "../database";
import { v4 } from "uuid";

export type User = {
  nombre: string;
  apellido: string;
  id?: string | null;
};

export default class UserModel {
  private _dynamoConnection: DynamoDatabase;
  private readonly _tableName: string = "users";
  private _client: DocumentClient;
  constructor() {
    this._dynamoConnection = new DynamoDatabase();
    this._client = this._dynamoConnection.getConnection();
  }

  async getAllUsers(): Promise<ItemList | undefined> {
    const response = await this._client
      .scan({ TableName: this._tableName })
      .promise();
    return response.Items;
  }

  async createUser(item: User): Promise<User> {
    item.id = v4();
    await this._client
      .put({
        TableName: this._tableName,
        Item: item,
      })
      .promise();
    return item;
  }
}
