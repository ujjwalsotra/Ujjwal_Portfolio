import React from "react";
import "./stylesheet/Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const routeToThisPage = (passedUrl) => {
    //window.location.href = passedUrl;
    window.open(passedUrl,'_blank').focus();
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Jammu, Jammu and Kashmir, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-9018888168
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              ujjwalsotra1121@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            I have a youtube channel named U__code where i make coding related
            videos as my hobby.
          </p>
          <div className="social"  target="_blank">
            <FaGithub
             
              onClick={() => routeToThisPage("https://github.com/ujjwalsotra")}
              size={30}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
            />
            <FaYoutube
              onClick={() =>
                routeToThisPage(
                  "https://www.youtube.com/channel/UCdlS-DqBoLaLliEGUw-qpxA"
                )
              }
              size={30}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
              target="_blank"
            />
            <FaLinkedin
              onClick={() =>
                routeToThisPage("https://leetcode.com/u/BeniHimeUjjwal/")
              }
              size={30}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
