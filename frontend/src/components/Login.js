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
        background: "inherit", // Changed background color to white
        color: "inherit", // Adjusted text color for better visibility
        textAlign: "center",
      }}
    > <ThemeToggle />
      <div>
        <img src="/logo.jpg" alt="GoConnect Logo" style={{ marginBottom: "20px" }} />
        <h1>GoConnect</h1>
      </div>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
