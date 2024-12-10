import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connectDB } from "./config/dbConfig.js";
import bookRouter from "./routes/book.js";
import userRouter from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/book", bookRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Helloooooooo World!!, this is an express server.");
});
app.get("/ping", (req, res) => {
  res.json({
    message: "Pong",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on Port:3000");
  connectDB();
});
