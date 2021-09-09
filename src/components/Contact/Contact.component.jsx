import React from "react";
import "./Contact.styles.scss";
import CVArunabSingh from "./../../img/CVArunabSingh.pdf";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-box">
        <div className="heading">contact details</div>
        <div className="contact-detail">
          <div className="value name">Arunab Singh</div>
        </div>
        <div className="contact-detail">
          <a href="mailto:>asingh585@my.bcit.ca" className="value">
            asingh585@my.bcit.ca
          </a>
        </div>
        <div className="contact-detail">
          <a href="tel:+17789175748" className="value">
            +1 (778) 917-5748
          </a>
        </div>
        <div className="contact-detail">
          <a href="https://github.com/ArunabSingh" className="github">
            <SiGithub className="icon" /> Github
          </a>
        </div>
        <div className="contact-detail">
          <a
            href="https://www.linkedin.com/in/arunab-singh-1a0603205/"
            className="github"
          >
            <SiLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
      <a className="cv-box" href={CVArunabSingh} download>
        <div className="heading">Download cv</div>
        <img
          className="cv-img"
          src="https://res.cloudinary.com/bcityelpcamp/image/upload/v1630550789/samples/resume-image_qjsw07.jpg"
          alt="CV ARUNAB SINGH"
        />
      </a>
    </div>
  );
};

export default Contact;
