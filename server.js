const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const foundItemRoutes = require("./routes/foundItemRoutes");
const claimRoutes = require("./routes/claimRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Test routes
app.get("/", (req, res) => {
  res.send("CampusLost Backend Server is Running");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "CampusLost API is working",
  });
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/found-items", foundItemRoutes);
app.use("/api/claims", claimRoutes);

// Start server
app.listen(PORT, () => {
  console.log(
    `CampusLost server running on http://localhost:${PORT}`
  );
});