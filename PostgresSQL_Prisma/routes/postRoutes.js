import { Router } from "express";
import { createPost, getAllPosts, updatePost, getUserPosts, deletePost } from "../controllers/postController.js";

const router = Router();

router.get("/", getAllPosts)
router.get("/user_id", getUserPosts)
router.post("/", createPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)


export default router;