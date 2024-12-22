const mongoose = require("mongoose");

const WalkingBuddySchema = new mongoose.Schema({
  name: { type: String, required: true },
  personality: { type: String, required: true },
  profession: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WalkingBuddy", WalkingBuddySchema);
