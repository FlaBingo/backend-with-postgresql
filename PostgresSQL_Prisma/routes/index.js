import { Router } from "express";
import userRoutes from "./userRoutes.js"
import postRoutes from "./postRoutes.js"

const router = Router();

router.use("/api/auth", userRoutes)
router.use("/api/post", postRoutes)

export default router;