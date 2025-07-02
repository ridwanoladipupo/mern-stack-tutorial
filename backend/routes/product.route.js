import express from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
} from "../controllers/product.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getProducts);

router.get("/:id", authMiddleware, getProductsById);

router.post("/", authMiddleware, createProducts);

router.put("/:id", authMiddleware, updateProducts);

router.delete("/:id", authMiddleware, deleteProducts);

export default router;
