/**
 * blogController.js
 * ------------------------------------------------
 * Handles business logic for blog operations.
 *
 * FUTURE IMPROVEMENTS:
 * - Add authentication middleware
 * - Add update (PUT) route
 * - Add pagination
 * - Add input validation library (Joi / Zod)
 */

const db = require("../database/db");

/**
 * Create New Blog Post
 */
exports.createPost = (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required.",
      });
    }

    const query = `
      INSERT INTO blog_posts (title, content)
      VALUES (?, ?)
    `;

    db.run(query, [title, content], function (err) {
      if (err) {
        console.error("❌ Database Insert Error:", err.message);
        return res.status(500).json({
          success: false,
          message: "Failed to create post",
        });
      }

      return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: {
          id: this.lastID,
          title,
          content,
        },
      });
    });
  } catch (error) {
    console.error("🔥 Create Post Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * Get All Blog Posts
 */
exports.getAllPosts = (req, res) => {
  try {
    const query = `
      SELECT * FROM blog_posts
      ORDER BY created_at DESC
    `;

    db.all(query, [], (err, rows) => {
      if (err) {
        console.error("❌ Database Fetch Error:", err.message);
        return res.status(500).json({
          success: false,
          message: "Failed to fetch posts",
        });
      }

      return res.status(200).json({
        success: true,
        count: rows.length,
        data: rows,
      });
    });
  } catch (error) {
    console.error("🔥 Get Posts Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * Delete Blog Post
 */
exports.deletePost = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Post ID is required",
      });
    }

    const query = `DELETE FROM blog_posts WHERE id = ?`;

    db.run(query, [id], function (err) {
      if (err) {
        console.error("❌ Database Delete Error:", err.message);
        return res.status(500).json({
          success: false,
          message: "Failed to delete post",
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          success: false,
          message: "Post not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Post deleted successfully",
      });
    });
  } catch (error) {
    console.error("🔥 Delete Post Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
