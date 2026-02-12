/**
 * db.js
 * -----------------------------------------
 * This file handles the SQLite database connection.
 * It creates the database file if it does not exist.
 * It also initializes required tables.
 *
 * FUTURE IMPROVEMENT AREA:
 * - Replace SQLite with PostgreSQL or MySQL
 * - Add migration system
 */

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file location
const DB_PATH = path.join(__dirname, "blog.db");

// Create or connect to database
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to SQLite database.");
  }
});

// Create blog_posts table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
