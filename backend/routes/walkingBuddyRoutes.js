const express = require("express");
const router = express.Router();
const WalkingBuddy = require("../models/WalkingBuddy");

// Add a walking buddy
router.post("/", async (req, res) => {
  const { name, personality, profession, age, location } = req.body;
  try {
    const buddy = new WalkingBuddy({ name, personality, profession, age, location });
    await buddy.save();
    res.status(201).json(buddy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get walking buddies
router.get("/", async (req, res) => {
  try {
    const buddies = await WalkingBuddy.find();
    res.json(buddies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
