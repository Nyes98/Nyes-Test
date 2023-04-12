import mongoose, { Schema, Document } from "mongoose";

// export interface IItem extends Document {
//   name: string;
//   description: string;
//   price: number;
// }
import { IItem } from "./interface";

const ItemSchema: Schema = new Schema(
  {
    name: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { collection: "myItems" }
);

export default mongoose.model<IItem>("Item", ItemSchema);
