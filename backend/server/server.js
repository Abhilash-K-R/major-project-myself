/**
 * server.js
 * --------------------------------------------------
 * Entry point of Blog Application.
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

/* --------------------- MIDDLEWARE --------------------- */

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
  console.log(`📌 ${req.method} ${req.originalUrl}`);
  next();
});

/* --------------------- ROUTES --------------------- */

app.use("/api", blogRoutes);

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

/* --------------------- GLOBAL ERROR HANDLER --------------------- */

app.use((err, req, res, next) => {
  console.error("🔥 Unhandled Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* --------------------- START SERVER --------------------- */

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
