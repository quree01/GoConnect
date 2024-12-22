import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import GoBackButton from "../components/GoBackButton";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User signed up");
    navigate("/permissions");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "white", // Changed background color to white
        color: "black", // Adjusted text color for better visibility
        textAlign: "center",
      }}
    >
       <ThemeToggle />
       <GoBackButton />
      <div>
        <img src="/logo.png" alt="GoConnect Logo" style={{ marginBottom: "20px" }} />
        <h1>GoConnect</h1>
      </div>
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#ffda45",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
