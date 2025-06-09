// src/components/button/ReturnButton.jsx
import React from "react";
import { Link } from "react-router";
import "./button.css";

const ReturnButton = () => (
  <Link to="/" className="return-button">
    ← Back
  </Link>
);

export default ReturnButton;
