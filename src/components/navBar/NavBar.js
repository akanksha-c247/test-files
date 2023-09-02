import React from "react";
import Logo from "../../assets/img/logo-big.svg";
import "./navBar.css";

export const NavBar = () => {
  return (
    <div className="navBar">
        <img src={Logo} alt="logo-big" className="logo-big-instance" />
      
      <ul className="div-container">
        <li className="div-2-container">
          <span className="text-wrapper-class">Routing Software and Services</span>
        </li>
        <li className="text-wrapper-class2">Snow Plow Routing</li>
        <li className="div-2-container">
          <span className="text-wrapper-class">Waste Collection Routing Software</span>
        </li>
        <li className="text-wrapper-class4">Blog</li>
        <li className="text-wrapper-class5">Contact</li>
      </ul>
    </div>
  );
};
