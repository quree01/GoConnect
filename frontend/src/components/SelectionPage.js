import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectionPage.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function SelectionPage() {
  const navigate = useNavigate(); // Ensure useNavigate is correctly imported and used.

  return (
    <div className="selection-container">
      <ThemeToggle />
      <GoBackButton />
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
