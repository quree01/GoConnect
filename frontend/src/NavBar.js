import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">GoConnect</div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/compare">Cab Comparison</a></li>
        <li><a href="/rentals">Rentals</a></li>
        <li><a href="/buddy-finder">Buddy Finder</a></li>
        <li><a href="/share-trips">Share Trips</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
