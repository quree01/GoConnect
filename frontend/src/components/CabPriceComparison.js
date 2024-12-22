import React, { useState } from "react";
import "./CabPriceComparison.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";
import cabData from "../data/cabData"; // Importing the dataset

function CabPriceComparison() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [cabFares, setCabFares] = useState([]);

  const handleSearch = () => {
    // Filter data for each platform based on pickup and dropoff locations
    const filteredResults = {
      ola: cabData.ola.filter(
        (ride) =>
          ride.pickup.toLowerCase() === pickup.toLowerCase() &&
          ride.dropoff.toLowerCase() === dropoff.toLowerCase()
      ),
      nammaYatri: cabData.nammaYatri.filter(
        (ride) =>
          ride.pickup.toLowerCase() === pickup.toLowerCase() &&
          ride.dropoff.toLowerCase() === dropoff.toLowerCase()
      ),
      rapido: cabData.rapido.filter(
        (ride) =>
          ride.pickup.toLowerCase() === pickup.toLowerCase() &&
          ride.dropoff.toLowerCase() === dropoff.toLowerCase()
      ),
      uber: cabData.uber.filter(
        (ride) =>
          ride.pickup.toLowerCase() === pickup.toLowerCase() &&
          ride.dropoff.toLowerCase() === dropoff.toLowerCase()
      ),
    };

    // Combine the results into one array and sort by price
    const combinedResults = [
      ...filteredResults.ola.map((ride) => ({ ...ride, platform: "Ola" })),
      ...filteredResults.nammaYatri.map((ride) => ({
        ...ride,
        platform: "Namma Yatri",
      })),
      ...filteredResults.rapido.map((ride) => ({ ...ride, platform: "Rapido" })),
      ...filteredResults.uber.map((ride) => ({ ...ride, platform: "Uber" })),
    ].sort((a, b) => a.price - b.price);

    setCabFares(combinedResults); // Set the results in state
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
      {cabFares.length > 0 ? (
        <div className="table-container">
          <h3>Available Prices:</h3>
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Distance (km)</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cabFares.map((cab, index) => (
                <tr key={index}>
                  <td>{cab.platform}</td>
                  <td>{cab.distance}</td>
                  <td>₹{cab.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        pickup &&
        dropoff && (
          <p style={{ marginTop: "20px" }}>
            No cabs available for the given locations.
          </p>
        )
      )}
    </div>
  );
}

export default CabPriceComparison;
