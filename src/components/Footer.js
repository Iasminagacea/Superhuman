// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-cta">
        <h2 className="cta-heading">Ready to launch<br></br> your next website?</h2>
        <img 
          src="/Images/line_footer.png" 
          alt="Decorative line" 
          className="footer-line"
        />
        <div className="cta-button-container">
          <button className="cta-button">
            <img 
              src="/Images/email_icon.png" 
              alt="Email" 
              className="email-icon"
            />
            <span>Get in touch now</span>
          </button>
          
          <p className="cta-subtext">
            Or, take a peek inside our <span className="highlight-text">design studio</span>
          </p>
        </div>
      </div>
    <div className="footer-box">
         <img 
            src="/Images/Rectangle9_footer.png" 
            alt="Footer decoration" 
            className="rectangle9-footer"
        />
         <img 
             src="/Images/Superhuman_logo.png" 
             alt="Superhuman Logo" 
             className="footer-logo"
         />
            <p className="footer-description">
                 Digits is a website template built to<br></br> work seamlesly with the WordPress<br></br> block editor to create beautifully<br></br> designed pages in minutes.
            </p>
            {/* Add Pages column */}
            <div className="footer-pages">
                <h3 className="pages-title">Pages</h3>
                <ul className="pages-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>News</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>

              {/* Demos column */}
    <div className="footer-demos">
        <h3 className="demos-title">Demos</h3>
        <ul className="demos-list">
            <li>Classic</li>
            <li>Boxy</li>
            <li>Gradient</li>
            <li>Minimal</li>
            <li>Night</li>
        </ul>
    </div>

    {/* Resources column */}
    <div className="footer-resources">
        <h3 className="resources-title">Resources</h3>
        <div className="social-icons">
            <img 
                src="/Images/footer_icons/facebook.png" 
                alt="Facebook" 
                className="social-icon"
            />
            <img 
                src="/Images/footer_icons/instagram.png" 
                alt="Instagram" 
                className="social-icon"
            />
            <img 
                src="/Images/footer_icons/twitter.png" 
                alt="Twitter" 
                className="social-icon"
            />
            <img 
                src="/Images/footer_icons/dribble.png" 
                alt="Dribbble" 
                className="social-icon"
            />
            <img 
                src="/Images/footer_icons/icon_stroke.png" 
                alt="Envato" 
                className="social-icon"
            />
        </div>
        <ul className="resources-list">
            <li>Download now</li>
            <li>Documentation</li>
        </ul>
    </div>
    {/* Add copyright text */}
    <p className="footer-copyright">
        Copyright © 2020 tempy.club
    </p>
    {/* Add privacy links */}
    <div className="footer-privacy-links">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>GDPR</span>
    </div>
    </div>
    </>
  );
}

export default Footer;