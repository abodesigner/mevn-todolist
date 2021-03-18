const express = require("express");
const router = express.Router();

const postController = require("../controller/postController")

router.post("/posts/create", postController.createPost)
router.get("/posts", postController.getAllPosts)
router.get("/posts/:id", postController.getPost)
router.patch("/posts/:id", postController.updatePost)
router.delete("/posts/:id", postController.deletePost)

module.exports = router