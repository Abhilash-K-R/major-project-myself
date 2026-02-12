/**
 * blogRoutes.js
 * --------------------------------------------------
 * Defines all API endpoints related to blog posts.
 */

const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

/**
 * @route   POST /api/posts
 * @desc    Create new blog post
 */
router.post("/posts", blogController.createPost);

/**
 * @route   GET /api/posts
 * @desc    Get all blog posts
 */
router.get("/posts", blogController.getAllPosts);

/**
 * @route   DELETE /api/posts/:id
 * @desc    Delete blog post by ID
 */
router.delete("/posts/:id", blogController.deletePost);

module.exports = router;
