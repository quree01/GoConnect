import React, { useState } from "react";
import "./ShareTrips.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function ShareTrips() {
  const [tripDetails, setTripDetails] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const [notifications, setNotifications] = useState([
    {
      user: "John Doe",
      from: "Location A",
      to: "Location B",
      date: "2024-12-25",
      time: "10:00 AM",
    },
  ]);

  const handlePostTrip = (e) => {
    e.preventDefault();
    const newTrip = { ...tripDetails, user: "You" };
    setNotifications([...notifications, newTrip]);
    setTripDetails({ from: "", to: "", date: "", time: "" });
    alert("Trip Shared!");
  };

  return (
    <div className="share-trips-container">
      <ThemeToggle />
      <GoBackButton />
      <h1>Share Trips</h1>
      <form className="trip-form" onSubmit={handlePostTrip}>
        <div className="form-group">
          <label>From:</label>
          <input
            type="text"
            value={tripDetails.from}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, from: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>To:</label>
          <input
            type="text"
            value={tripDetails.to}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, to: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={tripDetails.date}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, date: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={tripDetails.time}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, time: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="trip-submit">
          Share Trip
        </button>
      </form>
      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>
              <strong>{notification.user}</strong> is traveling from{" "}
              <strong>{notification.from}</strong> to{" "}
              <strong>{notification.to}</strong> on{" "}
              <strong>{notification.date}</strong> at{" "}
              <strong>{notification.time}</strong>.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareTrips;
