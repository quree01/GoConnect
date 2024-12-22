import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        padding: "10px",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} size="2x" color="#fcd34d" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="2x" color="#374151" />
      )}
    </button>
  );
}

export default ThemeToggle;
