import React from 'react';
import footerData from '../../utils/footerLink.json';

const Footer = ({ type }) => {
  const dataToRender = footerData.find(category => category.label === type || category.label1 === type);

  return (
    <div className="footer-content">
      <h4>{dataToRender.label || dataToRender.label1}</h4>
      <ul className="footer-links">
        {(dataToRender.links || dataToRender.service).map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
