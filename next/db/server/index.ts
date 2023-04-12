// import { MongoClient } from "mongodb";
// import mongoose from "mongoose";
// import Item from "../models/item";
// import { IItem } from "../models/interface";
// const uri = "mongodb://127.0.0.1:27017/ys123";
// // const dbName = "testdb";

// const main = async () => {
//   try {
//     await mongoose.connect(uri, {});
//     console.log("Connected to MongoDB");

//     // let testSchema: = mongoose.Schema({
//     //   name: "string",
//     //   address: "string",
//     //   age: "number",
//     // });

//     const newItem: IItem = new Item({
//       name: "Sample Item",
//       description: "This is a sample item",
//       price: 9.99,
//     });

//     // newItem.save((err, item) => {
//     //   if (err) {
//     //     console.error("Error saving item:", err);
//     //   } else {
//     //     console.log("Item saved:", item);
//     //   }
//     // });

//     console.log(newItem);
//     // Add your Mongoose operations here
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// main().catch(console.error);
// // mongoose
// //   .connect(uri)
// //   .then(() => {
// //     console.log("Connected to MongoDB");
// //     const client = new MongoClient(uri);
// //     const db = client.db("test");
// //     console.log("db", db);
// //     console.log("client", client);
// //     const temp = db
// //       .collection("testcal")
// //       .findOne({ a: 1 })
// //       .then((data) => {
// //         console.log("엘렐레", data);
// //       });
// //   })
// //   .catch((e) => {
// //     console.error(e);
// //   });

// // async function main() {
// //   const client = new MongoClient(uri);

// //   try {
// //     await client.connect();
// //     console.log("Connected to MongoDB");

// //     const db = client.db("test");
// //     console.log(db.collection("testcal").findOne({ a: 1 }));
// //     // Add your MongoDB operations here
// //   } catch (error) {
// //     console.error("Error connecting to MongoDB:", error);
// //   } finally {
// //     await client.close();
// //   }
// // }

// // main().catch(console.error);
