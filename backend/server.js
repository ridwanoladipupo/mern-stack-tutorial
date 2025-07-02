import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = 5400;

//Enable CORS
app.use(cors());

app.use(express.json()); //allows us to accept JSON data in the req.body

//route files
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome, server is live");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5400 ");
});
