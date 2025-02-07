import React from 'react';
import '../styles/Hero.css';
import HeroGraphics from './HeroGraphics';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="line">You can always</div>
          <div className="line">be a 21st Century</div>
          <div className="line">Superhuman</div>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper fringilla sed amet dolor lacus proin consectetur. Magna in.
          </p>
          <button className="hero-button">
            Be a member
          </button>
        </div>
        <HeroGraphics />
      </div>
    </div>
  );
}

export default Hero;