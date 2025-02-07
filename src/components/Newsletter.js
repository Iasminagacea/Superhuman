import React from 'react';
import '../styles/Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
      <h2 className="newsletter-title">Subscribe to our newsletter</h2>
      <img 
        src="/Images/Vector_underline.png" 
        alt="Underline" 
        className="newsletter-underline"
      />
      <div className="newsletter-form">
        <div className="newsletter-box">
          <input 
            type="email" 
            placeholder="Your e-mail address" 
            className="newsletter-input"
          />
          <button className="newsletter-button">
            <span className="button-text">Send now</span>
          </button>
        </div>
      </div>
      <p className="newsletter-privacy">
        Your email is safe. We never spam.{' '}
        <span className="privacy-link">Privacy Policy</span>
      </p>
    </div>
  );
}

export default Newsletter;