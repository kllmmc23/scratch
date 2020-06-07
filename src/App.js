import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="profile pic"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sarah
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00PM</span>
          </div>
          <div className="text">It's amazing</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="profile pic"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sarah
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00PM</span>
          </div>
          <div className="text">It's amazing</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="profile pic"
          />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sarah
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00PM</span>
          </div>
          <div className="text">It's amazing</div>
        </div>
      </div>
    </div>
  );
};

export default App;
