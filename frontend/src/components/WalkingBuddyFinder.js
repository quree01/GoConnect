import React, { useState } from "react";
import "./WalkingBuddyFinder.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";
import GoogleMapComponent from "../components/GoogleMapComponent";

function WalkingBuddyFinder() {
  const [preferences, setPreferences] = useState({
    personality: "introvert",
    profession: "college student",
    age: "",
    locality: "",
  });

  const [buddies, setBuddies] = useState([
    {
      name: "Alice",
      personality: "introvert",
      profession: "college student",
      age: 20,
      location: "",
    },
    {
      name: "Bob",
      personality: "extrovert",
      profession: "working professional",
      age: 25,
      location: "",
    },
    {
      name: "Charlie",
      personality: "ambivert",
      profession: "college student",
      age: 22,
      location: "",
    },
  ]);

  const localitySuggestions = [
    "MG Road",
    "Koramangala",
    "Indiranagar",
    "Whitefield",
    "HSR Layout",
    "Jayanagar",
  ];

  const handleSearch = () => {
    // Update buddy locations to match user input locality
    const updatedBuddies = buddies.map((buddy) => ({
      ...buddy,
      location: preferences.locality,
    }));
    setBuddies(updatedBuddies);

    if (preferences.locality) {
      alert(`Available buddies updated for locality: ${preferences.locality}`);
    } else {
      alert("Please select a locality.");
    }
  };

  const handleLocalityChange = (e) => {
    setPreferences({ ...preferences, locality: e.target.value });
  };

  return (
    <div className="buddy-container">
      <ThemeToggle />
      <GoBackButton />
      <h1>Find a Walking Buddy</h1>
      <form className="input-group" onSubmit={(e) => e.preventDefault()}>
        <select
          value={preferences.personality}
          onChange={(e) =>
            setPreferences({ ...preferences, personality: e.target.value })
          }
        >
          <option value="introvert">Introvert</option>
          <option value="extrovert">Extrovert</option>
          <option value="ambivert">Ambivert</option>
        </select>
        <select
          value={preferences.profession}
          onChange={(e) =>
            setPreferences({ ...preferences, profession: e.target.value })
          }
        >
          <option value="college student">College Student</option>
          <option value="working professional">Working Professional</option>
          <option value="elderly">Elderly People</option>
        </select>
        <input
          type="number"
          placeholder="Age (Optional)"
          value={preferences.age}
          onChange={(e) => setPreferences({ ...preferences, age: e.target.value })}
        />
        <input
          type="text"
          list="locality-suggestions"
          placeholder="Enter Locality"
          value={preferences.locality}
          onChange={handleLocalityChange}
        />
        <datalist id="locality-suggestions">
          {localitySuggestions.map((locality, index) => (
            <option key={index} value={locality} />
          ))}
        </datalist>
        <button onClick={handleSearch}>Search Buddies</button>
      </form>
      <div className="buddy-list">
        <h2>Buddy Locations</h2>
        <GoogleMapComponent markers={[]} />
        <h3>Available Buddies:</h3>
        <ul>
          {buddies.map((buddy, index) => (
            <li key={index}>
              <strong>{buddy.name}</strong>: {buddy.personality},{" "}
              {buddy.profession}, Age {buddy.age}, Location {buddy.location || "No location set"}
            </li>
          ))}
        </ul>
        <h3>Your Selected Locality:</h3>
        <p>{preferences.locality || "No locality selected yet."}</p>
      </div>
    </div>
  );
}

export default WalkingBuddyFinder;
