const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["task", "dairy", "memory", "reminder"], required: true },
  title: { type: String }, 
  content: { type: String }, 
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Note", noteSchema);
