import React from "react";
import ellipseImg from "../../assets/img/Ellipse.png";
import bannerImg from "../../assets/img/Vector.png";
import image4 from "../../assets/img/image4.png";

import "./banner.css";
export const Banner = () => {
  return (
    <>
      <div className="box">
        <img src={bannerImg} className="banner" alt="banner" />
        <div className="inner">
          <div className="performance">
            <h1>
              Key Performance Indicators
              <br /> in Waste Collection Route
              <br /> Optimization
            </h1>
            <p>
              ROC shares metrics, best practices and standards based on decades
              of garbage truck routing experience.
            </p>
            <div className="roc">
            <img src={image4} alt="image" className="eimageFour" />
          </div>
          </div>
        </div>
        <img src={ellipseImg} alt="image" className="ellipseImg" />
      </div>
    </>
  );
};
