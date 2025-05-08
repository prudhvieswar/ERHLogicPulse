import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src='./src/assets/ERHIcon.png' alt="ERH LogicPulse Logo" />
        <span>ERH LogicPulse</span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#work">Our Work</a>
        <a href="#about">About Us</a>
      </nav>
    </header>
  );
}

export default Header;
