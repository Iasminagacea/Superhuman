import React from 'react';
import '../styles/AboutUs.css';
import contentData from '../json3_content_video_classes_books.json';


function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-text">
        The best services in the world
      </div>
      <div className="about-us-description">
        We create progress by designing and developing<br></br> custom software, mobile applications and websites.
        <br /><br />
        We're technologists and entrepreneurs, so we<br></br> understand both the technical and business challenges<br></br> of creating digital products.
      </div>

      <div className="about-us-image">
        <img 
          src="/Images/woman_about_us.png" 
          alt="Woman"
          className="woman-image"
        />

        <img 
           src="/Images/signature.png"
           alt="Signature"
          className="signature-image"
        />
        <span className="ceo-text">- Cary Ellis, CEO</span>
      </div>

      <div className="what-we-can-do-button">
        <div className="what-we-can-do-rectangle"></div>
        <span className="what-we-can-do-text">What we can do for you</span>
      </div>

      <div className="bg-boxes-about-us"></div>
      <div className="content-boxes">
        {contentData.map((item, index) => (
          <div key={index} className="content-box">
            <img 
              src="/Images/bg_content.png" 
              alt="Background" 
              className="content-box-bg" 
            />
            <img 
              src={item.image} 
              alt={item.name} 
              className="content-icon"
            />
            <h3 className="content-title">{item.name}</h3>
            <p className="content-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;