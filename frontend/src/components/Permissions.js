import React from "react";
import { useNavigate } from "react-router-dom";
import "./Permissions.css";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function Permissions() {
  const navigate = useNavigate();

  const handlePermissionsSubmit = (event) => {
    event.preventDefault();
    alert("Permissions granted!");
    navigate("/selection");
  };

  return (
    <div className="permissions-container">
      <ThemeToggle /> {/* Add ThemeToggle */}
      <GoBackButton />
      <h1>Permissions</h1>
      <p>Please grant the necessary permissions to continue:</p>
      <form onSubmit={handlePermissionsSubmit}>
        <div className="permissions-list">
          <label>
            <input type="checkbox" required /> Access to Current Location
          </label>
          <label>
            <input type="checkbox" required /> Notifications
          </label>
        </div>
        <button type="submit" className="permissions-submit">
          Grant Permissions
        </button>
      </form>
    </div>
  );
}

export default Permissions;
