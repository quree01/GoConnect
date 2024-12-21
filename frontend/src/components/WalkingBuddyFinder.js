import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import "./WalkingBuddyFinder.css";

function WalkingBuddyFinder() {
  const [preferences, setPreferences] = useState({
    personality: "introvert",
    profession: "college student",
    age: "",
  });

  const [buddies, setBuddies] = useState(null);

  const handleSearch = () => {
    const buddyData = [
      { name: "John Doe", personality: "introvert", profession: "college student", age: 21 },
      { name: "Jane Smith", personality: "extrovert", profession: "working professional", age: 28 },
      { name: "Chris Johnson", personality: "ambivert", profession: "college student", age: 22 },
    ];

    const filteredBuddies = buddyData.filter(
      (buddy) =>
        buddy.personality === preferences.personality &&
        buddy.profession === preferences.profession &&
        (!preferences.age || buddy.age === parseInt(preferences.age))
    );

    setBuddies(filteredBuddies);
  };

  return (
    <div className="buddy-container">
      <ThemeToggle />
      <ProfileDropdown />
      <h1>Walking Buddy Finder</h1>
      <p>Find a walking buddy near you based on your preferences</p>
      <div className="input-group">
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
        <button onClick={handleSearch}>Find Buddy</button>
      </div>
      {buddies && (
        <div className="buddy-list">
          <h3>Available Buddies:</h3>
          <ul>
            {buddies.length > 0 ? (
              buddies.map((buddy, index) => (
                <li key={index}>
                  <strong>{buddy.name}</strong>: {buddy.personality},{" "}
                  {buddy.profession}, Age {buddy.age}
                </li>
              ))
            ) : (
              <li>No matching buddies found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WalkingBuddyFinder;
