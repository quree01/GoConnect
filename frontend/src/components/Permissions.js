import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Permissions.css";

function Permissions() {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    location: false,
    notifications: false,
    camera: false,
  });

  const handlePermissionChange = (type) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [type]: !prevPermissions[type],
    }));
  };

  const handleSubmit = () => {
    if (permissions.location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location Allowed:", position);
        },
        (error) => {
          console.error("Location Permission Denied:", error);
        }
      );
    }
    alert("Permissions updated successfully!");
    navigate("/selection");
  };

  return (
    <div className="permissions-container">
      <h1>Permissions Request</h1>
      <p>To enhance your experience, GoConnect needs the following permissions:</p>
      <div className="permissions-list">
        <label>
          <input
            type="checkbox"
            checked={permissions.location}
            onChange={() => handlePermissionChange("location")}
          />
          Allow access to your current location
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.notifications}
            onChange={() => handlePermissionChange("notifications")}
          />
          Allow notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.camera}
            onChange={() => handlePermissionChange("camera")}
          />
          Allow access to the camera
        </label>
      </div>
      <button className="permissions-submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Permissions;
