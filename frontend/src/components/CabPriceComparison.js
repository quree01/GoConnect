import React, { useState } from "react";
import "./CabPriceComparison.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function CabPriceComparison() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [cabFares, setCabFares] = useState([]);

  const handleSearch = () => {
    const sampleData = [
      { platform: "Uber", price: 150 },
      { platform: "Ola", price: 130 },
      { platform: "Rapido", price: 100 },
    ];
    setCabFares(sampleData);
  };

  return (
    <div className="comparison-container">
       <ThemeToggle />
       <GoBackButton />
      <h1>Cab Price Comparison</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dropoff Location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
        />
        <button onClick={handleSearch}>Compare Prices</button>
      </div>
      {cabFares.length > 0 && (
        <div className="price-list">
          <h3>Available Prices:</h3>
          <ul>
            {cabFares.map((cab, index) => (
              <li key={index}>
                <strong>{cab.platform}</strong>: ₹{cab.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CabPriceComparison;
