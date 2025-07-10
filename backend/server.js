import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

//Enable CORS
//Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173", // update this
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); //allows us to accept JSON data in the req.body

//route files
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome, server is live");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5400 ");
});
