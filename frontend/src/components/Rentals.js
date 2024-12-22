import React, { useState } from "react";
import "./Rentals.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function Rentals() {
  const [rentalType, setRentalType] = useState("car");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleRentalSubmit = (e) => {
    e.preventDefault();
    alert(`Rental confirmed for a ${rentalType} at ${location} on ${time}`);
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
        <button type="submit" className="rental-submit">
          Confirm Rental
        </button>
      </form>
    </div>
  );
}

export default Rentals;
