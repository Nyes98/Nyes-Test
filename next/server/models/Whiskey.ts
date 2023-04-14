// src/userModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface previousPrice {
  when: Date;
  price: number;
}
interface saleInfo {
  when: Date;
  while: Date;
}

export interface IWhiskey extends Document {
  name: string;
  Img: string;
  owner: string;
  mintTime: Date;
  createdAt: Date;
  search: number;
  like: number;
  view: number;
  price: number;
  info: string;
  previousPrice: previousPrice[];
  saleInfo: saleInfo[];
}

const WhiskeySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  Img: { type: String, required: true },
  owner: { type: String, required: true },
  mintTime: { type: Date },
  createdAt: { type: Date, default: new Date() },
  search: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
  view: { type: Number, default: 0 },
  info: { type: String, default: "맛있는 술" },
  price: { type: Number, required: true },
  previousPrice: { type: [Object] },
  saleInfo: { type: [Object] },
});

export default mongoose.model<IWhiskey>("Whiskey", WhiskeySchema);
