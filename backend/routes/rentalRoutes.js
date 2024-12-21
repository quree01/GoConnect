const express = require("express");
const router = express.Router();
const rentalData = require("../fakeData/rentalData");

// Get rentals from fake dataset
router.get("/", (req, res) => {
  const { location } = req.query;
  const filteredRentals = rentalData.filter((rental) => rental.location === location);
  res.json(filteredRentals.length > 0 ? filteredRentals : rentalData); // Return all if no filters
});

module.exports = router;
