import React from "react";
import "./App.css";
import img1 from "./img/img1.jpg";
import SingleComment from "./SingleComment";

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment name="Alex" date="Today at 5:00PM" text="It is amazing" />
      <SingleComment name="Jack" date="Today at 6:00PM" text="great job" />
      <SingleComment name="Sarah" date="Today at 7:00PM" text="Thanks" />
    </div>
  );
};

export default App;
