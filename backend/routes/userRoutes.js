const express = require("express");
const User = require("../models/User"); // Import the User model

const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body); // Create a new user document
    await user.save(); // Save to the database
    res.status(201).json(user); // Respond with the created user
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all user documents
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
