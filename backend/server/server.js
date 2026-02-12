/**
 * server.js
 * --------------------------------------------------
 * Main entry point of the Blog Application.
 * Initializes Express server, middleware, routes,
 * health check endpoint, and logging.
 *
 * FUTURE IMPROVEMENT AREA:
 * - Add authentication middleware
 * - Add rate limiting
 * - Add centralized logging system
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Environment configuration
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`📌 ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api", blogRoutes);

// Health check endpoint (IMPORTANT for monitoring system)
app.get("/health", (req, res) => {
  res.json({ status: "running" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
