import { EntityConfiguration } from 'electrodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Config } from '@serverless-stack/node/config';

export const Client = new DynamoDBClient({});

export const DynamoConfiguration: EntityConfiguration = {
  table: Config.TABLE_NAME,
  client: Client,
};
