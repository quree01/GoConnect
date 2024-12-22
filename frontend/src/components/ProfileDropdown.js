import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./ProfileDropdown.css";

function ProfileDropdown() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null; // Hide the dropdown if user is not logged in

  return (
    <div className="profile-dropdown">
      <div className="profile-info" onClick={() => setIsOpen(!isOpen)}>
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">{user.name}</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
