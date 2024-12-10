import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Helloooooooo World!!, this is an express server.");
});

app.listen(PORT, () => {
  console.log("Server is running on Port:3000");
  connectDB();
});
