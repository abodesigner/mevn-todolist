const express = require("express");
const router = express.Router();

const postController = require("../controller/postController")

router.post("/api/posts/create", postController.createPost);
router.get("/api/posts",         postController.getAllPosts);
router.get("/api/posts/:id",     postController.getPost);
router.patch("/api/posts/:id",   postController.updatePost);
router.delete("/api/posts/:id",  postController.deletePost);
router.delete("/api/posts",      postController.deleteAllPosts);

module.exports = router