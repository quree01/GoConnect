import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import "./Rentals.css";

function Rentals() {
  const [rentalType, setRentalType] = useState("car");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleRentalSubmit = (e) => {
    e.preventDefault();
    alert(
      `Rental Confirmed:\nType: ${rentalType}\nLocation: ${location}\nTime: ${time}`
    );
  };

  return (
    <div className="rentals-container">
      <ThemeToggle />
      <ProfileDropdown />
      <h1>Rent a Car or Bike</h1>
      <p>Choose your rental type, location, and time:</p>
      <form onSubmit={handleRentalSubmit} className="rental-form">
        <div className="form-group">
          <label htmlFor="rentalType">Rental Type:</label>
          <select
            id="rentalType"
            value={rentalType}
            onChange={(e) => setRentalType(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter rental location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="datetime-local"
            id="time"
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
