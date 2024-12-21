import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import "./CabPriceComparison.css";

function CabPriceComparison() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [prices, setPrices] = useState(null);

  const handleSearch = () => {
    const priceData = [
      { platform: "Uber", price: 150 },
      { platform: "Ola", price: 130 },
      { platform: "Rapido", price: 100 },
    ];
    setPrices(priceData);
  };

  return (
    <div className="comparison-container">
      <ThemeToggle />
      <ProfileDropdown />
      <h1>Cab Price Comparison</h1>
      <p>Compare prices across popular cab booking platforms</p>
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
      {prices && (
        <div className="price-list">
          <h3>Available Prices:</h3>
          <ul>
            {prices.map((cab, index) => (
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
