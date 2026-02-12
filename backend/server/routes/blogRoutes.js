/**
 * blogRoutes.js
 * ---------------------------------------
 * Defines API routes for blog features.
 */

const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Blog routes
router.post("/posts", blogController.createPost);
router.get("/posts", blogController.getAllPosts);
router.delete("/posts/:id", blogController.deletePost);

module.exports = router;
