import React from "react"
import "./Navigation.css";





const Navigation = () => {

  return (
    <div >
      <div id="navbar" className="content">
        <div id="navbar-right">
          <a href="#default" id="logo">Products</a>
          <a href="#home">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">Tutorials</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;