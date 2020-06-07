import React from "react";
import img1 from "./img/img1.jpg";

const SingleComment = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={img1} alt="profile pic" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <div className="metadata">
                      <span className="date">{props.date}</span>
          </div>
                  <div className="text">{props.text}}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
