import React, { useState, useEffect } from "react";
import { fetchWalkingBuddies, postWalkingBuddy } from "../api";

function WalkingBuddyFinder() {
  const [buddies, setBuddies] = useState([]);
  const [newBuddy, setNewBuddy] = useState({
    name: "",
    personality: "introvert",
    profession: "college student",
    age: "",
    location: "",
  });

  useEffect(() => {
    const loadBuddies = async () => {
      try {
        const response = await fetchWalkingBuddies();
        setBuddies(response.data);
      } catch (error) {
        console.error("Error fetching walking buddies:", error);
      }
    };
    loadBuddies();
  }, []);

  const handleAddBuddy = async () => {
    try {
      await postWalkingBuddy(newBuddy);
      alert("Buddy added successfully!");
      setNewBuddy({
        name: "",
        personality: "introvert",
        profession: "college student",
        age: "",
        location: "",
      });
    } catch (error) {
      console.error("Error adding buddy:", error);
    }
  };

  return (
    <div>
      <h1>Walking Buddy Finder</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddBuddy();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={newBuddy.name}
          onChange={(e) =>
            setNewBuddy({ ...newBuddy, name: e.target.value })
          }
          required
        />
        <select
          value={newBuddy.personality}
          onChange={(e) =>
            setNewBuddy({ ...newBuddy, personality: e.target.value })
          }
        >
          <option value="introvert">Introvert</option>
          <option value="extrovert">Extrovert</option>
          <option value="ambivert">Ambivert</option>
        </select>
        <select
          value={newBuddy.profession}
          onChange={(e) =>
            setNewBuddy({ ...newBuddy, profession: e.target.value })
          }
        >
          <option value="college student">College Student</option>
          <option value="working professional">Working Professional</option>
        </select>
        <input
          type="number"
          placeholder="Age"
          value={newBuddy.age}
          onChange={(e) => setNewBuddy({ ...newBuddy, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={newBuddy.location}
          onChange={(e) =>
            setNewBuddy({ ...newBuddy, location: e.target.value })
          }
          required
        />
        <button type="submit">Add Buddy</button>
      </form>
      <ul>
        {buddies.map((buddy, index) => (
          <li key={index}>
            {buddy.name}: {buddy.personality}, {buddy.profession}, {buddy.age}, {buddy.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WalkingBuddyFinder;
