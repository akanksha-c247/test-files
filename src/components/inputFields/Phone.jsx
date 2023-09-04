import React from 'react';
import phoneImg from '../../assets/img/phone.png';
const Phone = ({ number, className, color }) => (

  <div className="div-2">
    <img src={phoneImg} alt="phone icon" className='phoneIcon' />
    <i className={`icon-instance-node ${className}`} style={{ color: color }} />
    <div className="text-wrapper">{number}</div>
  </div>
);

export default Phone;
