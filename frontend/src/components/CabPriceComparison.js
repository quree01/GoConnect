import React, { useState } from "react";
import { fetchCabFares } from "../api";

function CabPriceComparison() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [cabFares, setCabFares] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetchCabFares(pickup, dropoff);
      setCabFares(response.data);
    } catch (error) {
      console.error("Error fetching cab fares:", error);
    }
  };

  return (
    <div>
      <h1>Cab Price Comparison</h1>
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
      <button onClick={handleSearch}>Compare</button>
      {cabFares.length > 0 && (
        <ul>
          {cabFares.map((cab, index) => (
            <li key={index}>
              {cab.platform}: ₹{cab.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CabPriceComparison;
