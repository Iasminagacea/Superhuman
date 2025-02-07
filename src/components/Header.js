import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img 
          src="/Images/Superhuman_logo.png" 
          alt="Superhuman Logo" 
          className="logo"
        />
        
        <nav className="menu">
          <div className="menu-items">
            <span className="menu-item">Home</span>
            <span className="menu-item">Book</span>
            <span className="menu-item">Travel</span>
            <span className="menu-item">
              Reviews
              <img 
                src="/Images/Vector_navbar.png" 
                alt="dropdown" 
                className="arrow-down"
              />
            </span>
            <span className="menu-item">Videos</span>
          </div>
          
          <button className="member-button">
            Be a member
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;