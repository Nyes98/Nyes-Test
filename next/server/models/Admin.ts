// src/userModel.ts
import mongoose, { Schema, Document } from "mongoose";

export interface board {
  title: string;
  text: string;
  img: string;
  video: string;
  createdAt: Date;
  view: number;
  like: number;
}
export interface declaration {
  from: string;
  to: string;
  type: string;
  writing: string;
  reason: string;
}
export interface inquiry {
  from: string;
  title: string;
  text: string;
  answer: string;
}
export interface IAdmin extends Document {
  board: board[];
  declaration: declaration[];
  inquiry: inquiry[];
  number: number;
}

const AdminSchema: Schema = new Schema({
  board: { type: [Object], default: [] },
  declaration: { type: [Object], default: [] },
  inquiry: { type: [Object], default: [] },
  number: { type: Number, default: 0 },
});

export default mongoose.model<IAdmin>("Admin", AdminSchema);
