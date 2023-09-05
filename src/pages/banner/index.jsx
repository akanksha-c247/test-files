import React from "react";
import ellipseImg from "../../assets/img/ellipse.png";
import bannerImg from "../../assets/img/vector.png";
import image4 from "../../assets/img/bannerGraph.png";
import about from "../../assets/img/about.svg";
import ellipse from "../../assets/img/ellipse.png";
import { AboutUs } from "../about";
import { Button } from "../../components/inputFields/button";
import { Customer } from "../customerCare";
import ReusableCarousel from "../../components/slider";
import "./banner.scss";

export const Banner = () => {
  const slides = [
    {
      content: [
        <div className="box">
        <img src={bannerImg} className="vector" alt="banner" />
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
              <Button label="READ MORE" arrowColor="white" textColor="white" backgroundColor="#8CC63F" borderColor="#379ACD" height='30px' width='200px' className='buttonTextAbout'/>
            </div>
            <div className="roc">
             <img src={image4} alt="image" className="eimageFour" />            
            </div>
          </div>
        <img src={ellipseImg} alt="image" className="ellipseImg" style={{width:'590px'}} />
      </div>
      ]
    },
    {
      content: [
        <div className="box">
        <img src={bannerImg} className="vector" alt="banner" />
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
        <img src={ellipseImg} alt="image" className="ellipseImg" style={{width:'590px'}} />
      </div>
      ]
    },
  ];

  return (
    <>
      <ReusableCarousel slides={slides} />
      <AboutUs/>
      <Customer/>
    </>
  );
};
