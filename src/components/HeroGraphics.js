import React from 'react';
import '../styles/HeroGraphics.css';

function HeroGraphics() {
  return (
    <div className="hero-graphics">
      <img 
        src="/Images/Ellipse.png" 
        alt="Decorative circle" 
        className="ellipse"
      />
      <img 
        src="/Images/rectangle_hero.png" 
        alt="Decorative rectangle" 
        className="rectangle"
      />
      <div className="photos-container">
        <img 
          src="/Images/Graphycs2.png" 
          alt="Hero graphic 2" 
          className="photo-2"
        />
        <img 
          src="/Images/Graphycs1.png" 
          alt="Hero graphic 1" 
          className="photo-1"
        />
      </div>
      <img 
        src="/Images/Pattern.png" 
        alt="Pattern" 
        className="pattern"
      />
    </div>
  );
}

export default HeroGraphics;