import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import "./SelectionPage.css";

function SelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="selection-container">
      <ThemeToggle />
      <ProfileDropdown />
      <h1>Welcome to GoConnect</h1>
      <p>Select an option to get started:</p>
      <div className="button-group">
        <button onClick={() => navigate("/compare")}>Compare Cab Prices</button>
        <button onClick={() => navigate("/buddy-finder")}>
          Find a Walking Buddy
        </button>
        <button onClick={() => navigate("/rentals")}>Rent a Car/Bike</button>
        <button onClick={() => navigate("/share-trips")}>Share Trips</button>
      </div>
    </div>
  );
}

export default SelectionPage;
