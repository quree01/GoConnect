const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// Add a trip
router.post("/", async (req, res) => {
  const { user, from, to, date, time } = req.body;
  try {
    const trip = new Trip({ user, from, to, date, time });
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
