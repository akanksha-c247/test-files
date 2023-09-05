import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReusableCarousel = ({ slides }) => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index}>
          {slide.content && <div>{slide.content}</div>}
        </div>
      ))}
    </Carousel>
  );
};

export default ReusableCarousel;
