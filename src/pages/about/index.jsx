import React from "react";
import aboutUsImage from "../../assets/img/about.svg";
import anniversaryImage from "../../assets/img/10yearImage.png";
import "./about.scss";
import { Button } from "../../components/inputFields/button";
export const AboutUs = () => {
  return (
    <div className="content-container">
      <div className="content-row">
        <div className="content-col-6">
          <div className="content content-bg">
          <img src={aboutUsImage} alt="image" className="aboutUsImage" />
          <img src={anniversaryImage} alt="anniversaryImage" className="anniversaryImage" />
          </div>
        </div>
        <div className="content-col-6">
          <div className="content">
          <h1 className="wrap-text">
              Waste Route Optimization Software
              <br /> Consultants
            </h1>
            <p className="route-optimization">
              <span className="">
                Route Optimization Consultants evaluates municipal solid waste
                collection
                <br /> systems, proposes scenarios to maximize efficiency, and
                implements with new
                <br /> routes and crew buy-in.
                <br />
                <br />
                Our experience covers all types of routing: high density routing
                (waste
                <br /> collection, postal deliveries, snow plow routing,
                newspaper deliveries, meter
                <br /> reading), point-to-point routing (collections, deliveries
                and sales forces with
                <br /> less than 200 stops per route per day), and paired
                routing (para-transit,
                <br /> armored car and similar).
                <br />
                <br />
                We take pride in our innovations in waste collections and
                routing. We recently
                <br /> pioneered the development of key performance indicators
                for waste collection
                <br /> operations. See our new training presentation,
              </span>
              <a
                href="https://routeoptimizationconsultants.com/wp-content/uploads/2021/11/Route-Optimization-Consultants-SWANA-VA-Collections-Training-Collections-Key-Performance-Indicators-06232021.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="routingWarper"
              >
                <span>
                  Key Performance Indicators in
                  <br /> Waste Collections Routing
                </span>
              </a>
              <span className="">
                , conducted for the Solid Waste Association of North
                <br /> America, June 23, 2021.
              </span>
            </p>
            <Button className='buttonTextAbout' label="READ MORE" arrowColor="white" textColor="#007bff" backgroundColor="white" borderColor="#379ACD"/>
          </div>
        </div>
      </div>
    </div>
  );
};
