import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Router/index.js";

dotenv.config();

const app = express();
const port = 4000;

const dbUrl =
  "mongodb+srv://yashsolanki:yashsolanki@cluster0.dpwnf3i.mongodb.net/E-commerce";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Middleware
app.use(bodyParser.json());
app.use("/images", express.static("upload/images"));
app.use(cors());

// Routes
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
