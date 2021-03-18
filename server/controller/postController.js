const Post = require("../models/post");

// Post Blog Post
const createPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Get all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Get Single Post
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send()
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
}

// Update Post
const updatePost = async (req, res) => {
    try {

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true, useFindAndModify: false })

        if(!updatedPost) {
            return res.status(404).send()
        }

        res.send(updatedPost);
    } catch (error) {
        res.status(500).send(error)
    }
}

// Delete
const deletePost = async (req, res) => {
    try {
        const postFound = await Post.findByIdAndDelete(req.params.id)
        if (!postFound) {
            res.status(404).send({error: 'Not Found'});
        }
        res.send(postFound)
    } catch (error) {
        res.status(501).send(error)

    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}