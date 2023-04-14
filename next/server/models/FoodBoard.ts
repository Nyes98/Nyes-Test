// src/userModel.ts
import mongoose, { Schema, Document } from "mongoose";

interface comment {
  text: string;
  from: string;
  createdAt: Date;
  like: number;
}
export interface IFoodBoard extends Document {
  title: string;
  text: string;
  writer: string;
  createdAt: Date;
  like: number;
  view: number;
  tag: string;
  img: string;
  comment: comment[];
}

const FoodBoardSchema: Schema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  writer: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  like: { type: Number, default: 0 },
  view: { type: Number, default: 0 },
  tag: { type: String },
  Img: { type: String, required: true },
  comment: { type: [Object], default: [] },
});

export default mongoose.model<IFoodBoard>("FoodBoard", FoodBoardSchema);
