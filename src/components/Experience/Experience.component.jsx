import React, { useContext } from "react";
import ExperienceContext from "../../context/experience.context";
import "./Experience.styles.scss";

const Experience = () => {
  const { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } = useContext(ExperienceContext);

  return (
    <div className="experience">
      <div className="experience-heading-box">
        <h2 className="heading">Experience</h2>
      </div>

      <div className="experience-section">
        <h3 className="section-title">Education & Certifications</h3>
        <div className="edu-grid">
          {EDUCATION_DATA.map(({ id, institution, degree, endDate }) => (
            <div key={id} className="edu-card">
              <div className="edu-card__institution">{institution}</div>
              <div className="edu-card__degree">{degree}</div>
              {endDate && <div className="edu-card__date">Grad. {endDate}</div>}
            </div>
          ))}
          {CERTIFICATIONS_DATA.map(({ id, name, date }) => (
            <div key={id} className="cert-card">
              <div className="cert-card__name">{name}</div>
              <div className="cert-card__date">{date}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <h3 className="section-title">Work Experience</h3>
        <div className="experience-list">
          {EXPERIENCE_DATA.map(({ id, company, role, location, startDate, endDate, bullets, techStack, publications }) => (
            <div key={id} className="exp-card">
              <div className="exp-card__header">
                <div className="exp-card__left">
                  <div className="exp-card__company">{company}</div>
                  <div className="exp-card__role">{role}</div>
                </div>
                <div className="exp-card__right">
                  <div className="exp-card__dates">{startDate} – {endDate}</div>
                  <div className="exp-card__location">{location}</div>
                </div>
              </div>

              <ul className="exp-card__bullets">
                {bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {publications && (
                <div className="exp-card__publications">
                  <span className="publications-label">Publications</span>
                  <ul>
                    {publications.map((pub, i) => (
                      <li key={i}>
                        <a href={pub.link} target="_blank" rel="noreferrer">{pub.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {techStack && (
                typeof techStack[0] === "string" ? (
                  <div className="exp-card__tags">
                    {techStack.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                ) : (
                  <div className="exp-card__tech-categories">
                    {techStack.map(({ category, tools }, i) => (
                      <div key={i} className="tech-category">
                        <span className="tech-category__label">{category}</span>
                        <div className="tech-category__tags">
                          {tools.map((tool, j) => (
                            <span key={j} className="tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
