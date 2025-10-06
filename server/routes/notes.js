const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { protect } = require("../middleware/auth");

// Create note
router.post("/", protect, async (req, res) => {
  try {
    const note = await Note.create({ user: req.user._id, ...req.body });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all notes for user
router.get("/", protect, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
