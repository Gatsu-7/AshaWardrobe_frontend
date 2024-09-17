import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/blog");
  };

  return (
    <button className="back-button" onClick={handleGoBack}>
      ←
    </button>
  );
};

export default BackButton;
