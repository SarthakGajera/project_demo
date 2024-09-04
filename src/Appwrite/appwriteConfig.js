// src/AppwriteConfig.js
import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('66d3f5fa0002cb08b787');     // Your project ID

const account = new Account(client);

export default { client, account };
