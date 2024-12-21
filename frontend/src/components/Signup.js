import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User signed up");
    navigate("/permissions");
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src="/logo.png" alt="GoConnect Logo" />
        <h1>GoConnect</h1>
      </div>

export default Signup;
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Alr

export default Signup;eady have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
