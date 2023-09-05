import React from "react";
import Logo from "../../assets/img/circleImage.png";
import cricleDash from "../../assets/img/CircleImage/cricleDash.png";
import "./routePlanning.scss";
import { Button } from "../../components/inputFields/button";

export const RoutePlanning = () => {
  return (
    <div className="container-box">
      <div className="content-row">
        <div className="col-6">
          <div className="aboutUs">
            <h1 className="wrap-text">
              Solid Waste System Decisions Rely
              <br />
              on Accurate Route Planning
            </h1>
            <p className="solid-waste-system">
              Solid waste system changes are tough.
              <br /> Municipal solid waste managers traverse critique and
              criticism in driving
              <br /> through big changes, like automated collection or a new
              material stream for
              <br />
              collection. Collection system changes have far reaching
              expenditures for
              <br /> trucks, carts, facilities, etc. The purchasing decisions
              can’t get it wrong. You
              <br /> must know how many trucks you will need.
              <br /> ROC can help. See why large cities like Atlanta and
              Sacramento down to small
              <br /> townships work with ROC. Realize your vision for building
              the best collection
              <br /> system your city has ever had.
            </p>
            <Button className='buttonSize' label="GET STARTED" arrowColor="white" textColor="white" backgroundColor="#8CC63F" borderColor="#379ACD"/>
          </div>
        </div>
        <div className="col-6">
          <div className="content">
            <img src={Logo} alt="logo-big" className="circle-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
