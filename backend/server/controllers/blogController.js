/**
 * blogController.js
 * ------------------------------------------------
 * Handles business logic for blog operations.
 *
 * FUTURE IMPROVEMENT AREA:
 * - Add authentication
 * - Add update functionality
 * - Add pagination
 */

const db = require("../database/db");

// Create new post
exports.createPost = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required." });
  }

  const query = `INSERT INTO blog_posts (title, content) VALUES (?, ?)`;

  db.run(query, [title, content], function (err) {
    if (err) {
      console.error("❌ Error creating post:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("📝 New post created with ID:", this.lastID);

    res.status(201).json({
      message: "Post created successfully",
      postId: this.lastID,
    });
  });
};

// Get all posts
exports.getAllPosts = (req, res) => {
  const query = `SELECT * FROM blog_posts ORDER BY created_at DESC`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching posts:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(rows);
  });
};

// Delete post
exports.deletePost = (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM blog_posts WHERE id = ?`;

  db.run(query, id, function (err) {
    if (err) {
      console.error("❌ Error deleting post:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("🗑 Post deleted with ID:", id);

    res.json({ message: "Post deleted successfully" });
  });
};
