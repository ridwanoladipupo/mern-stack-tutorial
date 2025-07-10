import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";

import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

//Enable CORS
//Enable CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-tutorial.netlify.app", //
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json()); //allows us to accept JSON data in the req.body
app.use(
  "/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerSpec)
);

//route files
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome, server is live");
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5400 ");
  console.log(
    `Swagger docs available at http://localhost:${process.env.PORT}/api-docs`
  );
});
