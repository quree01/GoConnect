import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Go back to the previous page
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        padding: "10px",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} size="2x" color="#374151" />
    </button>
  );
}

export default GoBackButton;
