import { DataAPIClient } from '@datastax/astra-db-ts';
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db('https://8ce1a9d9-fb59-4236-9d4c-451485cff59b-us-east-2.apps.astra.datastax.com');

export default db;