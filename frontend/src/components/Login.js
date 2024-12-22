import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User logged in");
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
        background: "inherit", // Theme-based background
        color: "inherit", // Theme-based text color
        textAlign: "center",
        padding: "20px",
      }}
    >
      <ThemeToggle />
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/logo.jpg"
          alt="GoConnect Logo"
          style={{
            maxWidth: "150px",
            marginBottom: "20px",
          }}
        />
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>GoConnect</h1>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#1c1c1c", // Dark background for form
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          color: "white", // Text color
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #444", // Subtle dark border
              borderRadius: "5px",
              background: "#2c2c2c", // Darker input background
              color: "white", // Input text color
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #444",
              borderRadius: "5px",
              background: "#2c2c2c",
              color: "white",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#ffda45",
              color: "black",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#ffda45" }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
