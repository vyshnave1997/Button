// src/App.js
import React from "react";
import Button from "./Button";
import "./Button.css"; // Import CSS for button styling

const App = () => {
  const handleClick = (e) => {
    alert("Button clicked!");
  };

  return (
    <div
      className="App"
      style={{ padding: "20px", backgroundColor: "#121212", color: "#fff" }}
    >
      <h1>Button Component Examples with Animations</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Button text="Primary" variant="primary" onClick={handleClick} />
        <Button text="Secondary" variant="secondary" onClick={handleClick} />
        <Button text="Success" variant="success" onClick={handleClick} />
        <Button text="Danger" variant="danger" onClick={handleClick} />
        <Button
          text="Small"
          size="small"
          variant="primary"
          onClick={handleClick}
        />
        <Button
          text="Medium"
          size="medium"
          variant="primary"
          onClick={handleClick}
        />
        <Button
          text="Large"
          size="large"
          variant="primary"
          onClick={handleClick}
        />
        <Button text="Loading" variant="primary" loading />
        <Button text="Disabled" variant="primary" disabled />
        <Button
          text="Hover Animation"
          variant="primary"
          className="button-hover"
        />
        <Button text="Scale Up" variant="success" className="button-scale-up" />
        <Button text="Bounce" variant="danger" className="button-bounce" />
      </div>
    </div>
  );
};

export default App;
