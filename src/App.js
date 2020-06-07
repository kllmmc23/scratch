import React from "react";
import "./App.css";
import img1 from "./img/img1.jpg";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default App;
