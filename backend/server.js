const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// Import routes
const cabRoutes = require("./routes/cabRoutes");
const rentalRoutes = require("./routes/rentalRoutes");
const walkingBuddyRoutes = require("./routes/walkingBuddyRoutes");
const tripRoutes = require("./routes/tripRoutes");

// Use routes
app.use("/api/cabs", cabRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/walkingbuddies", walkingBuddyRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req, res) => {
    res.send("API is running...");
  });

// Use user routes

