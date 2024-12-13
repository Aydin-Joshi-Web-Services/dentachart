import { Account, Client, Databases, ID } from "appwrite"

const client = new Client()
.setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`) // Your API Endpoint
.setProject(`${process.env.PROJECT_ID}`);

const databases = new Databases(client)
const account = new Account(client)

export { client, databases, account, ID }