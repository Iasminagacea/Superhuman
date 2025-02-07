import React from 'react';
import '../styles/Carousel.css';
import carouselData from '../json5_images_carousel.json';

function Carousel() {
  return (
    <div className="video-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={item.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
              <div className="carousel-overlay"></div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="play-button">
          <div className="play-circle"></div>
          <div className="play-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;