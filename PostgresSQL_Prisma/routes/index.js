import { Router } from "express";
import userRoutes from "./userRoutes.js"

const router = Router();

router.use("/api/auth", userRoutes)

export default router;