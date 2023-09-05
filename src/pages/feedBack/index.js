import React from "react";
import feedBackImage from "../../assets/img/feedBackImage.png";
import "./feedBack.scss";

export const FeedBackPage = () => {
  return (
    <div className="feedback">
      <div className="col-4">
        <img src={feedBackImage} />
      </div>
      <div className="col-6">
        <h1>
          I love to route garbage trucks, ever since Nashville’s Curby recycling
          program in 2000. I enjoy the people. I get to help them…make it more
          fair and just do a better job. <br/>
          Kevin Callen <br/>
        Consultants LLC.
          <p>Founder Route Optimization</p>  
        </h1>
      </div>
    </div>
  );
};
