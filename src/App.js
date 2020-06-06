import React from "react";
import "./App.css";

const App = () => {
  const buttonText = "Click me";
  return (
    <div className="App">
      <label htmlFor="name" className="label">
        enter e-mail
      </label>{" "}
      <input type="text" name="email" id="name" />
      <button type="submit" style={{ backgroundColor: "red", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

export default App;
