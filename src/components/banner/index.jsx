import React from "react";
import Slider from "react-slick";
import ellipseImg from "../../assets/img/ellipse.png";
import bannerImg from "../../assets/img/vector.png";
import image4 from "../../assets/img/bannerGraph.png";
import "./banner.css";
import { AboutUs } from "../about";
import { Button } from "../inputFields/button";
import { Customer } from "../customerCare";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      &lt;
    </div>
  );
};

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="box">
        <img src={bannerImg} className="vector" alt="banner" />
        <Slider {...settings}>
          <div className="bannerGraph">
            <div className="performance">
              <h1 className="textPerformance">
                Key Performance Indicators
                <br /> in Waste Collection Route
                <br /> Optimization
              </h1>
              <p>
                ROC shares metrics, best practices and standards based on <br/> decades
                of garbage truck routing experience.
              </p>
              <Button label="READ MORE" arrowColor="white" textColor="white" backgroundColor="green" borderColor="#379ACD" />
            </div>
            <div className="roc">
              <img src={image4} alt="image" className="eimageFour" />
            </div>
          </div>
        </Slider>
        <img src={ellipseImg} alt="image" className="ellipseImg" />
      </div>
      <AboutUs/>
      <Customer/>
    </>
  );
};
