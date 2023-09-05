import React from 'react';
import './card.scss';

const Card = ({ imageUrl, title, content, width, height, bgColor,alt,className }) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: bgColor,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} alt={alt} className={className} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
