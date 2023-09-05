import React from "react";
import Logo from "../../assets/img/logo-big.svg";
import "./navBar.css";
import Dropdown from "../../components/inputFields/dropDown";

export const NavBar = () => {
  const options = ["Routing Software and Services", "Waste Collection Routing Software", "Option 3"];

  const handleSelect = (selected) => {
    console.log(`Selected: ${selected}`);
  };

  return (
    <div className="navBar">
      <img src={Logo} alt="logo-big" className="logo-big-instance" />

      <ul className="div-container">
        <li className="div-2-container">
          <Dropdown
            options={options}
            label="Select an option"
            className="text-wrapper-class"
            onSelect={handleSelect}
          />
        </li>
        <li className="text-wrapper-class">
          <a href="#">Snow Plow Routing</a>
        </li>
        <li className="div-2-container">
        <Dropdown
            options={options}
            label="Select an option"
            className="text-wrapper-class"
            onSelect={handleSelect}
          />
        </li>
        <li className="text-wrapper-class">
          <a href="#">Blog</a>
        </li>
        <li className="text-wrapper-class">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
