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
      <ThemeToggle />
      <GoBackButton />
      <h1>Permissions</h1>
      <p>Please grant the necessary permissions to continue:</p>
      <form onSubmit={handlePermissionsSubmit} className="permissions-form">
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
      <style>
        {`
          @media (max-width: 768px) {
            .permissions-container {
              padding: 10px;
              text-align: center;
            }
            h1 {
              font-size: 1.8rem;
            }
            p {
              font-size: 1rem;
              margin-bottom: 10px;
            }
            .permissions-list label {
              font-size: 0.9rem;
            }
            .permissions-submit {
              font-size: 1rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1200px) {
            .permissions-container {
              padding: 20px;
            }
            h1 {
              font-size: 2.2rem;
            }
            p {
              font-size: 1.2rem;
            }
            .permissions-list label {
              font-size: 1rem;
            }
          }

          @media (min-width: 1200px) {
            h1 {
              font-size: 2.5rem;
            }
            p {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Permissions;
