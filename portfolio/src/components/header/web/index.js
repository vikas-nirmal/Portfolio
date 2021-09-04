import React from "react";
import "./web.css";
function web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <i className="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default web;
