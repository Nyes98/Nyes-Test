// import { IUser } from '@/interfaces/user.interface';
import { IUser } from './../../test7/src/interfaces/user.interface';
import { Router, Request, Response } from 'express';
import { User } from '../models';

const router = Router();

router.post('/test', async (req: Request, res: Response) => {
    const users: IUser[] = await User.find();
    res.send(users);
});

router.post('/create', async (req: Request, res: Response) => {
    console.log(req.body);
    const newUser: IUser = new User({
        name: req.body.name,
        address: req.body.address,
    });

    User.create(newUser)
        .then((user) => console.log('user created'))
        .catch((error) => console.log(error));
});

export default router;
