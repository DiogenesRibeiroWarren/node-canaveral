import { MongoClient, Db } from "mongodb";

require('dotenv').config()

const DB_URI = process.env.MONGO_URI as string

export class MongoDbClient {

    private client: MongoClient = new MongoClient(DB_URI)
    private db: Db = this.client.db('Portfolio')

    async connect(): Promise<any> {
        await this.client.connect()
        console.log('Success to connect to DataBase')

        return 'done.'
    }

    databaseQuery(): Db {
        return this.db
    }

}