import React from 'react';
import { HiArrowLeft } from "react-icons/hi";
import './VehicleDetailsLeft.css';

const VehicleDetailsLeft = () => {
  return (
    <div className="left-section">
      <div className="back-button">
        <div className="back-arrow-icon">
          <HiArrowLeft />
        </div>
        <span>Goods Carrying Vehicle Insurance</span>
      </div>
      <div className="info-container">
        <div className="info-circle"></div>
        <div className="info-text">
          <h3>Lorem Ipsum Is Simply Dummy Text</h3>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsLeft;
