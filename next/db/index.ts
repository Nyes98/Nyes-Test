import { MongoClient, Db } from 'mongodb';
import Item from './models/item';
import { IItem } from './models/interface';

const uri = 'mongodb://127.0.0.1:27017/ys123';

export class MongoDB {
    private client: MongoClient;
    private static instance: MongoDB;

    private constructor() {
        // this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.client = new MongoClient(uri, {});
    }

    public static async getInstance(): Promise<MongoDB> {
        if (!MongoDB.instance) {
            MongoDB.instance = new MongoDB();
            await MongoDB.instance.connect();
        }
        return MongoDB.instance;
    }

    private async connect(): Promise<void> {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB successfully');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
        }
    }
    public async createDatabase(dbName: string) {
        const db = this.client.db(dbName);
        console.log(`Database ${dbName} created`);
    }
    public async createItem(name: string, description: string, price: number): Promise<IItem> {
        console.log('123123');
        const db = this.client.db('myItems');
        console.log('123');
        const item = new Item({ name, description, price });

        db.collection('items').insertOne(item);
        console.log(`item ${item} created`);
        // item.validate(() => {
        //     if (err !== null) {
        //         console.log(err);
        //     } else {
        //     }
        // });
        return item;
    }

    public getDb(databaseName: string): Db {
        return this.client.db(databaseName);
    }
}
