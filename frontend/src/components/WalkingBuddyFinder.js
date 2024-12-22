import React, { useState } from "react";
import "./WalkingBuddyFinder.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function WalkingBuddyFinder() {
  const [preferences, setPreferences] = useState({
    personality: "introvert",
    profession: "college student",
    age: "",
  });

  const [buddies, setBuddies] = useState([
    {
      name: "Alice",
      personality: "introvert",
      profession: "college student",
      age: 20,
      location: "Location A",
    },
  ]);

  const handleSearch = () => {
    alert("Matching buddies found!");
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
        </select>
        <input
          type="number"
          placeholder="Age (Optional)"
          value={preferences.age}
          onChange={(e) => setPreferences({ ...preferences, age: e.target.value })}
        />
        <button onClick={handleSearch}>Search Buddies</button>
      </form>
      <div className="buddy-list">
        <h3>Available Buddies:</h3>
        <ul>
          {buddies.map((buddy, index) => (
            <li key={index}>
              <strong>{buddy.name}</strong>: {buddy.personality},{" "}
              {buddy.profession}, Age {buddy.age}, Location {buddy.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WalkingBuddyFinder;
