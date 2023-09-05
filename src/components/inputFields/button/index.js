import React from "react";
import "./button.scss";

export const Button = ({
  label = "READ MORE",
  arrowColor = "white",
  textColor = "white",
  backgroundColor = "blue",
  width = "140px",  
  height = "30px"  ,
  className
}) => {
  return (
    <div className={className} style={{ width, height, backgroundColor }}>
      <div className="rounded-button" style={{ color: textColor }}>
        {label}
      </div>
      <div className="arrow-instance" style={{ color: arrowColor }}>
        -{">"}
      </div>
    </div>
  );
};
