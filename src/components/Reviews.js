// src/components/Reviews.js
import React, { useState } from 'react';
import '../styles/Reviews.css';
import peopleData from '../json4_people.json';

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? peopleData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === peopleData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;
    
    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, index) => (
          <img 
            key={`star-${index}`}
            src="/Images/people_reviews/star.png"
            alt="Full star"
            className="star-icon"
          />
        ))}
        {hasHalfStar && (
          <img 
            src="/Images/people_reviews/star_half.png"
            alt="Half star"
            className="star-icon"
          />
        )}
      </div>
    );
  };

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">What people say about us</h2>
      <div className="reviews-carousel">
        <button className="carousel-arrow left" onClick={handlePrev}>
          <img src="/Images/arrow_carousel_left.png" alt="Previous" />
        </button>

        <div className="review-card">
          <div className="review-image-container">
            <img 
              src={peopleData[currentIndex].image} 
              alt={`${peopleData[currentIndex].name.first} ${peopleData[currentIndex].name.last}`} 
              className="review-image"
            />
          </div>
          <h3 className="reviewer-name">
            {peopleData[currentIndex].name.first} {peopleData[currentIndex].name.last}
          </h3>
          <div className="reviewer-company">
            <img 
              src="/Images/people_reviews/briefcase-solid.png" 
              alt="Company" 
              className="company-icon"
            />
            <span>{peopleData[currentIndex].company}</span>
          </div>
          <div className="reviewer-location">
            <img 
              src="/Images/people_reviews/location-dot-solid.png" 
              alt="Location" 
              className="location-icon"
            />
            <span>{peopleData[currentIndex].location}</span>
          </div>
          {renderStars(peopleData[currentIndex].rate)}
          <p className="review-text">{peopleData[currentIndex].review}</p>
        </div>

        <button className="carousel-arrow right" onClick={handleNext}>
          <img src="/Images/arrow_carousel_right.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default Reviews;