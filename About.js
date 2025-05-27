// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h5>SWEET DELIGHTS AWAIT</h5>
          <h2>Discover the essence of indulgence</h2>
          <p>
            At MAAYER MISHTI, we specialize in crafting exquisite sweets that
            tantalize your taste buds and warm your heart...
          </p>
          <a href="#contact" className="link">Get in touch</a>
        </div>
        <div className="about-img">
          <img src="https://i.imgur.com/oqPUEgd.png" alt="donut" />
        </div>
      </div>
    </section>
  );
};

export default About;
