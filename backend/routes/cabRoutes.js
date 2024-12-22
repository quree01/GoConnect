const express = require("express");
const router = express.Router();
const cabData = require("../fakeData/cabData");

// Get cab fares from fake dataset
router.get("/", (req, res) => {
  const { pickup, dropoff } = req.query;
  const filteredCabs = cabData.filter(
    (cab) => cab.pickup === pickup && cab.dropoff === dropoff
  );
  res.json(filteredCabs.length > 0 ? filteredCabs : cabData); // Return all if no filters
});

module.exports = router;
