import React from 'react';
import '../styles/Services.css';
import servicesData from '../json1_books_travel_products.json';

function Services() {
  return (
    <div className="services">
      <div className="small-headline">
        <img 
          src="/Images/rectangle16.png" 
          alt="Rectangle background" 
          className="rectangle-bg"
        />
        <span className="headline-text">Our Services</span>
      </div>

      <div className="services-heading">
        Together we can make a difference
      </div>
      
      {/* Books Block */}
      <div className="bg-block1">
        <div className="path-container">
          <img 
            src="/Images/path.png" 
            alt="Path decoration" 
            className="path-image"
          />
          <img 
            src={servicesData[0].icon}
            alt={servicesData[0].name} 
            className="megaphone-image"
          />
        </div>
        <div className="block-title">{servicesData[0].name}</div>
        <div className="block-description">
          {servicesData[0].description}
        </div>
      </div>

      {/* Travel Block */}
      <div className="bg-block2">
        <div className="path-container-2">
          <img 
            src="/Images/path_block2.png" 
            alt="Path decoration" 
            className="path-image-2"
          />
          <img 
            src={servicesData[1].icon}
            alt={servicesData[1].name}
            className="vector-block2"
          />
        </div>
        <div className="block2-title">{servicesData[1].name}</div>
        <div className="block2-description">
          {servicesData[1].description}
        </div>
      </div>

      {/* Products Block */}
      <div className="bg-block3">
        <div className="path-container-3">
          <img 
            src="/Images/path_block2.png" 
            alt="Path decoration" 
            className="path-image-3"
          />
          <img 
            src={servicesData[2].icon}
            alt={servicesData[2].name}
            className="trophy-image"
          />
        </div>
        <div className="block3-title">{servicesData[2].name}</div>
        <div className="block3-description">
          {servicesData[2].description}
        </div>
      </div>
    </div>
  );
}

export default Services;