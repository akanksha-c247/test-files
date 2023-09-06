import React from 'react';
import './card.scss';

const Card = ({ imageUrl, title, content, width, height, bgColor,alt,className,auther }) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: bgColor,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} alt={alt} className={className} />
      <div className="card-content">
        {auther  && <span>{auther}</span>}
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
