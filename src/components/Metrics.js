import React from 'react';
import '../styles/Metrics.css';
import metricsData from '../json2_metrics.json';

function Metrics() {
  return (
    <div className="metrics-section">
      {metricsData.map((item, index) => (
        <div key={index} className="metrics-item">
          <img 
            src={item.icon}
            alt="Achievement icon"
            className="metrics-icon"
          />
          <div className="metrics-number">
            {item.number}
            <span className="plus-sign">+</span>
          </div>
          <div className="metrics-description">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Metrics;