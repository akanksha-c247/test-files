import React from "react";
import rocFooterImage from "../../assets/img/rocFooterimage.png";
import anniverseryImage from "../../assets/img/10years.png";
import twitterImage from "../../assets/img/twitter.svg";
import lindinImage from "../../assets/img/linkdin.svg";
import "./footer.scss";
import InputField from "../../components/inputFields/inputFields";
import { Button } from "../../components/inputFields/button";
import Footer from "../../components/footer";

export const FooterPage = () => {
  return (
    <div className="footer-container">
      <div className="col-3">
        <img src={rocFooterImage} alt="Footer Logo" />
        <div>1751 Pinnacle Dr #600dMclean, VA 22102</div>
        <div>(571) 316-0676</div>
        <div>info@routeoptimizationconsultants.com</div>
        <img src={anniverseryImage} alt="anniversary image " />
      </div>
      <div className="col-3">
      <Footer type="Main Links" />
      </div>
      <div className="col-3">
      <Footer type="Services" />
      </div>
      <div className="col-3">
        <h4>Subscribe to weekly newsletter</h4>
        <div>
          <InputField
            type="email"
            placeholder="Enter your email"
            // label="Email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            // error={errors.email}
          />
          <div>
            <Button
              label="Submit For Review"
              backgroundColor="#8CC63F"
              className="formButton"
              type="submit"
            />
          </div>
          <div>Keep In Touch With Us</div>
          <div className="social-block">
            <ul>
                <li><img src={lindinImage} alt="linkedinImage"/></li>
                <li><img src={twitterImage} alt="twitterImage"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
