import React from 'react';
import './circle.scss';

const CircleComponent = ({ size, backgroundColor, text, textColor}) => {
  const circleStyle = {
    width: size,
    height: size,
    backgroundColor,
    color: textColor,
    lineHeight: size,
    fontSize: `calc(${size} / 3)`, 
  };

  return (
    <div className="circle" style={circleStyle}>
      {text}
    </div>
  );
};

export default CircleComponent;
