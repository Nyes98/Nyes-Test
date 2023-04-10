import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
// import { MongoDB } from '../db/index';
app.use(cors());
// Define your Express routes, middleware, and other server configurations here

app.get('/', async (req, res) => {
    console.log('12342424123');

    try {
        console.log('123123');
        // const mongodb = await MongoDB.getInstance();
        // const db = mongodb.getDb('mydb');
        // const usersCollection = db.collection('users');

        // const users = await usersCollection.find({}).toArray();
        // console.log(users);
        // res.json(users);
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

app.post('/api/tete', (req: Request, res: Response) => {
    // Handle your Express route logic here
    res.send({ data: 'dattta' });
});

// Start the server
app.listen(5000, () => {
    console.log('Express server is running on http://localhost:5000');
});
