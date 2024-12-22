import React, { useState } from "react";
import "./Rentals.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";
import rentalData from "../data/rentalData"; // Importing the dataset

function Rentals() {
  const [rentalType, setRentalType] = useState("car");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [filteredRentals, setFilteredRentals] = useState([]);

  // Log rentalData to debug its structure
  console.log("Rental Data:", rentalData);

  const handleRentalSubmit = (e) => {
    e.preventDefault();
    const rental = filteredRentals[0]; // Select the first matching rental for confirmation
    if (rental) {
      alert(
        `Rental confirmed for a ${rental.type} at ${rental.location} on ${time} for ₹${rental.price}.`
      );
    } else {
      alert("No rentals available for the selected criteria.");
    }
  };

  const handleSearch = () => {
    if (!Array.isArray(rentalData)) {
      alert("Rental data is not available or not in the correct format.");
      return;
    }

    // Filter rentals based on type and location (case-insensitive)
    const matches = rentalData.filter(
      (rental) =>
        rental.type.toLowerCase() === rentalType.toLowerCase() &&
        rental.location.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredRentals(matches);
  };

  return (
    <div className="rentals-container">
      <ThemeToggle />
      <GoBackButton />
      <h1>Rent a Car or Bike</h1>
      <form className="rental-form" onSubmit={handleRentalSubmit}>
        <div className="form-group">
          <label>Rental Type:</label>
          <select
            value={rentalType}
            onChange={(e) => setRentalType(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="button" className="rental-submit" onClick={handleSearch}>
          Search Rentals
        </button>
        <button type="submit" className="rental-submit">
          Confirm Rental
        </button>
      </form>
      {filteredRentals.length > 0 && (
        <div className="rental-list scrollable">
          <h3>Available Rentals:</h3>
          <ul>
            {filteredRentals.map((rental, index) => (
              <li key={index}>
                <strong>{rental.type.toUpperCase()}</strong> at{" "}
                <strong>{rental.location}</strong> - ₹{rental.price} (
                {rental.availability})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Rentals;
