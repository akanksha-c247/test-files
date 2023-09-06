import React from 'react';
import checkmarkUnfilled from '../../assets/img/checkmark-unfilled.svg'; 
import './content.scss';

const ImageWithContent = ({ imageUrl, content,title,layout  }) => {
    const lines = content.split('\n');
  return (
    <div className={`image-with-content ${layout}`}>
      <img src={imageUrl} alt="Content Image" className="content-image" />
      <div className={`text-content ${layout}`}>
        <div className={`overlay-title ${layout}`}>{title}</div>
        <div className="content-row">
          {lines.map((line, index) => (
            <div key={index} className="line-with-icon">
              <span>{line}</span>
              {layout !== 'left-image' && <img src={checkmarkUnfilled} alt="Checkmark" className="checkmark-icon" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageWithContent;
