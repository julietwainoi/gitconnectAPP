// src/appwriteConfig.js
import { Client, Functions } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite cloud endpoint
    .setProject('66f2b13d002cda030e33'); // Replace with your project ID

const functions = new Functions(client);

export { client, functions };
