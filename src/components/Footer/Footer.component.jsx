import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ArunabSingh"
      >
        <SiGithub className=" social-icon social-icon__footer" />
      </a>
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/arunab-singh-1a0603205/"
      >
        <SiLinkedin className="social-icon social-icon__footer" />
      </a>
    </div>
  );
};

export default Footer;
