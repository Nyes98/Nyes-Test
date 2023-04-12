import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import { MongoDB } from '../db/index';
app.use(cors());
// Define your Express routes, middleware, and other server configurations here\

let mongodb;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    try {
        mongodb = await MongoDB.getInstance();
        const db = mongodb.getDb('test');
        const usersCollection = db.collection('testcal');

        const users = await usersCollection.find().toArray();
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Internal server error');
    }
});

app.get('/api/data', (req: Request, res: Response) => {
    // Handle your Express route logic here
    res.json({ message: 'Hello from Express server!' });
});

app.post('/api/click', (req: Request, res: Response) => {
    // Handle your Express route logic here
    res.send({ msg: '통신완료!!' });
});

app.post('/api/insert', async (req: Request, res: Response) => {
    // Handle your Express route logic here
    console.log(mongodb);
    const db = mongodb.getDb('test');
    const usersCollection = db.collection('testcal');
    const data = await usersCollection.insertOne({ c: 3 });
    const users = await usersCollection.find().toArray();
    console.log('users', users);
    res.json(users);
});
app.post('/api/create', async (req: Request, res: Response) => {
    // Handle your Express route logic here
    console.log(mongodb);
    const create = mongodb.createDatabase('ttt3t');
    const db = mongodb.getDb('ttt3t');
    const usersCollection = db.collection('tqwet');
    const data = await usersCollection.insertOne({ a: 1 });
    const users = await usersCollection.find().toArray();
    console.log('users', users);
    res.json(users);
});

app.post('/api/ys', async (req: Request, res: Response) => {
    console.log('이건감', req.body);
    const a = req.body.a;
    const b = req.body.b;
    const db = mongodb.getDb('ys');
    const create = mongodb.createItem(a, b);
    console.log(create);
});

app.post('/api/createItem', async (req: Request, res: Response) => {
    // Handle your Express route logic here
    console.log(mongodb);
    const name = '김영준';
    const description = 123;
    const price = 6600;
    const db = mongodb.getDb('ttt3t');
    console.log('여까진 지날걸');
    const create = mongodb.createItem(name, description, price);
    console.log('create', create);
    // const usersCollection = db.collection("tqwet");
    // const data = await usersCollection.insertOne({ a: 1 });
    // const users = await usersCollection.find().toArray();
    // console.log("users", users);
    // res.json(users);
});
// Start the server
app.listen(5000, () => {
    console.log('Express server is running on http://localhost:5000');
});
