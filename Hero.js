// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <h2>Sweet indulgence</h2>
        <p>Experience the finest sweets online!</p>
        <a href="#products" className="btn">VIEW PRODUCTS</a>
      </div>
    </section>
  );
};

export default Hero;
