import express from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
} from "../controllers/product.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, authorizeRoles("customer"), getProducts);

router.get("/:id", authMiddleware, getProductsById);

router.post("/", authMiddleware, createProducts);

router.put("/:id", authMiddleware, updateProducts);

router.delete("/:id", authMiddleware, deleteProducts);

export default router;
