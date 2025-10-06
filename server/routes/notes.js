const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { protect } = require("../middleware/auth");

router.post("/", protect, async (req, res) => {
  try {
    const { type, title, content ,date} = req.body;

    if (!type) return res.status(400).json({ message: "Type is required" });

    const note = await Note.create({
      user: req.user._id,
      type,
      title,
      content,
      date: date ? new Date(date) : Date.now(),
    });

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all notes for user
router.get("/", protect, async (req, res) => {
  try {
    const { type } = req.query; // optional filter by type
    const query = { user: req.user._id };
    if (type) query.type = type;

    const notes = await Note.find(query).sort({ date: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
