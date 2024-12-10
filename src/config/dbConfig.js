import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connect to MongoDB Database");
  } catch (error) {
    console.log("Error in connecting the Database", error);
  }
}
