import React from "react"
import "./Navigation.css";
import {Link } from 'react-router-dom';





const Navigation = () => {

  return (
    <div >
      <div id="navbar">
        <div id="navbar-right">
          <Link to="/" id="logo">Leave</Link>
          <Link to="/products" id="logo">Products</Link>
          <Link to="/about">About</Link>
          <a href="#contact">Contact</a>
          <a href="#about">Tutorials</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;