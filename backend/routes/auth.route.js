import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import {
  validateLogin,
  validateRegister,
} from "../validators/authValidators.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Create a new account
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User Registered Successfully
 *       400:
 *         description: Invalid input
 */
router.post("/register", validateRegister, register);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Login as a returning user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User Logged-in Successfully
 *       400:
 *         description: Invalid input
 */
router.post("/login", validateLogin, login);

export default router;
