// src/Button.js
import React from "react";
import "./Button.css"; // Import CSS for styling

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      className={`button button-${variant} button-${size} ${
        loading ? "button-loading" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className="button-spinner"></span> : text}
    </button>
  );
};

export default Button;
