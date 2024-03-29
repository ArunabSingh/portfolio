import React from "react";

import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiNodeDotJs,
  SiSass,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiBootstrap,
  SiJquery,
  SiFirebase,
  SiMaterialUi,
  SiGraphql,
  SiGatsby,
  SiJava,
} from "react-icons/si";

import { AiOutlineLink } from "react-icons/ai";

import "./ProjectCard.styles.scss";

const iconsMap = {
  SiReact,
  SiRedux,
  SiJavascript,
  SiNodeDotJs,
  SiSass,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiBootstrap,
  SiJquery,
  SiFirebase,
  SiMaterialUi,
  SiGraphql,
  SiGatsby,
  SiJava,
  AiOutlineLink
};

const ProjectCard = ({
  name,
  description,
  techStack,
  apis,
  repoLink,
  webLink,
  image,
}) => {
  return (
    <div className="project">
      <div
        className="project-image"
        style={{ backgroundImage: "var(--card-gradient), url(" + image + ")" }}
      >
        <div className="project-name">{name}</div>
      </div>
      <div className="project-details">
        <div className="project-description">{description}</div>
        {/* {techStack ? (
          <div className="project-tech">
            <h3 className="category">Tech Stack</h3>
            <ul className="tech-list">
              {techStack.map(tech => {
                const SiIcon = iconsMap["Si" + tech];
                return (
                  <li key={tech} className="tech-logo">
                    <SiIcon key={tech} className="logo" alt="HTML" />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null} */}
        {apis ? (
          <div className="project-apis">
            <h3 className="category">Tech Stack</h3>
            <ul className="apis-list">
              {apis.map((api) => (
                <li key={api} className="api">
                  {api}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="project-links">
          {repoLink ? (
            <a
              target="_blank"
              rel="noreferrer"
              className="project-link git-link"
              href={repoLink}
            >
              <SiGithub className="project-git" />
              Github
            </a>
          ) : null}

          {webLink ? (
            <a
              target="_blank"
              rel="noreferrer"
              className="project-link web-link"
              href={webLink}
            >
              <AiOutlineLink className="project-git" />
              Website
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
