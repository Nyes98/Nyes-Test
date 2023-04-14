import { IUser } from './../test7/src/interfaces/user.interface';
import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { IWhiskey, Whiskey, User, Admin, IAdmin, FoodBoard, IFoodBoard, board } from './models';
import bodyParser from 'body-parser';
const app = express();
const uri = 'mongodb://127.0.0.1:27017/wineWin';
const routes = require('./routes');

app.use(bodyParser.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

mongoose
    .connect(uri, {})
    .then(() => console.log('connected to MongD'))
    .catch((err) => console.log(err));

app.get('/', async (req, res) => {
    console.log('12342424123');

    try {
        console.log('123123');
        const users: IUser[] = await User.find();
        console.log('users', users);
        // const db = mongodb.getDb("test");
        // const usersCollection = db.collection("testcal");

        // const users = await usersCollection.find().toArray();
        // console.log("users", users);
        // res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Internal server error');
    }
});

app.post('/api/insert', async (req: Request, res: Response) => {
    const newWhiskey: IWhiskey = new Whiskey({
        name: 'new whiskey',
        Img: '1.png',
        owner: '김영준',
        price: 100,
        mintTime: new Date(),
        info: '17년산',
    });
    Whiskey.create(newWhiskey)
        .then((whiskey) => console.log('wiskey created'))
        .catch((error) => console.log(error));

    const newAdmin: IAdmin = new Admin({});
    const newBoardItem: board = {
        title: '1',
        text: '1',
        img: '1',
        video: '1',
        createdAt: new Date(),
        view: 1,
        like: 1,
    };
    // Admin.create(newAdmin)
    //   .then((admin) => console.log("admin created"))
    //   .catch((error) => console.log(error));

    Admin.updateOne({ number: 0 }, { $push: { board: newBoardItem } })
        .then((admin) => console.log('admin updated'))
        .catch((error) => console.log(error));
});
app.post('/api/delete', async (req: Request, res: Response) => {
    Whiskey.deleteOne({ owner: '김영준' })
        .then((result) => console.log('wiskey destroyed'))
        .catch((error) => console.log(error));
});

app.use('/api', routes);

// Start the server
app.listen(5000, () => {
    console.log('Express server is running on http://localhost:5000');
});
