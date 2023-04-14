import { IUser } from './../../share/user.interface';
// src/userModel.ts
import mongoose, { Schema, Document } from 'mongoose';

// interface levelScore {
//     now: number;
//     max: number;
// }
// interface comment {
//     text: string;
//     where: string;
// }
// interface blockUser {
//     name: string;
//     address: string;
// }
// export interface IUser extends Document {
//     name: string;
//     level: number;
//     score: levelScore;
//     img: string;
//     address: string;
//     nft: object[];
//     likeContent: string[];
//     writing: string[];
//     comment: comment[];
//     blockList: blockUser[];
//     searchHistory: string[];
// }

const UserSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    level: { type: Number, default: 1 },
    score: { type: Object, default: { now: 0, max: 10 } },
    img: { type: String },
    address: { type: String, required: true },
    nft: { type: [Object] },
    likeContent: { type: [String], default: [] },
    writing: { type: [String], default: [] },
    comment: { type: [Object], default: [] },
    blockList: { type: [Object], default: [] },
    searchHistory: { type: [String], default: [] },
});

export default mongoose.model<IUser>('User', UserSchema);
