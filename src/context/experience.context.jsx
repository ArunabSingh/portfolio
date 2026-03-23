import { createContext } from "react";

import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from "./../data/portfolio.data";

const ExperienceContext = createContext({ EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA });

export default ExperienceContext;
