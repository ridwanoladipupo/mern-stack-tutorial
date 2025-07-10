import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import {
  validateLogin,
  validateRegister,
} from "../validators/authValidators.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

export default router;
