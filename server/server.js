const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();


app.use(
  cors({
    origin: [
      "http://localhost:5173",           // React dev server
      "https://lifedotreact.onrender.com" // Deployed React frontend
    ],
    credentials: true // allow cookies/auth headers if needed
  })
);

// Parse JSON requests
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
