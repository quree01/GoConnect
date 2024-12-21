import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import ThemeToggle from "./ThemeToggle";
import "./ShareTrips.css";

function ShareTrips() {
  const [tripDetails, setTripDetails] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const [notifications, setNotifications] = useState([
    { from: "Location A", to: "Location B", date: "2024-12-25", time: "10:00 AM", user: "John Doe" },
    { from: "Location C", to: "Location D", date: "2024-12-26", time: "2:00 PM", user: "Jane Smith" },
  ]);

  const handlePostTrip = (e) => {
    e.preventDefault();
    alert(`Trip Shared:\nFrom: ${tripDetails.from}\nTo: ${tripDetails.to}\nDate: ${tripDetails.date}\nTime: ${tripDetails.time}`);
    setNotifications([
      ...notifications,
      {
        from: tripDetails.from,
        to: tripDetails.to,
        date: tripDetails.date,
        time: tripDetails.time,
        user: "You",
      },
    ]);
    setTripDetails({ from: "", to: "", date: "", time: "" });
  };

  return (
    <div className="share-trips-container">
      <ThemeToggle />
      <ProfileDropdown />
      <h1>Share Trips</h1>
      <p>Notify others about your trip and find people to join you.</p>
      <form onSubmit={handlePostTrip} className="trip-form">
        <div className="form-group">
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={tripDetails.from}
            onChange={(e) => setTripDetails({ ...tripDetails, from: e.target.value })}
            placeholder="Enter starting location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={tripDetails.to}
            onChange={(e) => setTripDetails({ ...tripDetails, to: e.target.value })}
            placeholder="Enter destination"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={tripDetails.date}
            onChange={(e) => setTripDetails({ ...tripDetails, date: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={tripDetails.time}
            onChange={(e) => setTripDetails({ ...tripDetails, time: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="trip-submit">Share Trip</button>
      </form>
      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p><strong>{notification.user}</strong> is traveling from <strong>{notification.from}</strong> to <strong>{notification.to}</strong> on <strong>{notification.date}</strong> at <strong>{notification.time}</strong>.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareTrips;
