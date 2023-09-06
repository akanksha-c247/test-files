import React from "react";
import "./button.scss";

export const Button = ({label,arrowColor,textColor,backgroundColor,width,height,className,type}) => {
  return (
    <button type={type} className={className} style={{ backgroundColor }}>
    {label}
  </button>
  );
};
