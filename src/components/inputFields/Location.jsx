import React from 'react';
import locationImg from '../../assets/img/location.svg'

const Location = ({ address, className, color }) => (
  <div className={`div-2 ${className}`}>
     <img src={locationImg} alt="location icon" />
    <i className={`icon-instance-node ${className}`} style={{ color: color }} />
    <div className="text-wrapper">{address}</div>
  </div>
);

export default Location;
