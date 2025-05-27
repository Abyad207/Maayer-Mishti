// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <h1>MAAYER MISHTI</h1>
        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact" className="btn-outline">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
