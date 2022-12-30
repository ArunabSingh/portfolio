export const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    id: 1,
  },

  {
    label: "Projects",
    path: "/projects",
    id: 3,
  },
  {
    label: "cv / contact",
    path: "/cv",
    id: 4,
  },
];

export const HOME_DATA = {
  hi: "Hi! I'm",
  name: "Arunab",
  role: "I am a Full-Stack Web Developer",
  roles: [
    "I am a BCIT Co-op Student",
    "I am a Full-Stack Web Developer",
    "I am an Android Developer"
  ],
  paragraphs: [
    "My name is Arunab Singh. I am a CST (Computer Systems Technology) Student currently in my last term at BCIT. I will be graduating in May 2023 and am currently looking for Jr/New Graduate SWE positions.",
    "I started programming when I was in 11th grade. Soon, coding piqued my interests when I started attempting problems revolving around data structures and algorithms. I decided then to pursue a career in tech. \n I am passionate about learning new technologies and building software that solves our everyday problems.",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 2,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521748/samples/campmonk_l3il7b.jpg",
    name: "Campmonk",
    description: "Yelp for Campgrounds build with MEN Stack, integrated with authentication and authorization using passport.js and multiple image upload features, displaying cluster maps using Mapbox API and much more...",
    techStack: ["Html5", "Javascript", "NodeDotJs", "Mongodb"],
    apis: ["Mapbox", "Cloudinary", "JOI Schema"],

    repoLink: "https://github.com/ArunabSingh/CampMonk.git",
    webLink: "https://campmonk101.herokuapp.com/",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521749/samples/bestride_lmztlz.jpg",
    name: "Bestride",
    description:
      "Application for comparing prices of different car riding companies(Uber, lyft, modo, evo etc..) for the same car ride. Input ride details using google maps API, and the app calculates the price based on distance and duration of the car ride.",
    techStack: ["Html5", "Bootstrap", "Jquery", "Firebase"],
    apis: ["Google Maps"],
    repoLink: "https://github.com/ArunabSingh/Team13_app.git",
    webLink: "https://bestride-c8357.web.app/",
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521750/samples/skillmeet_rzuqjk.jpg",
    name: "SkillMeet",
    description:
      "An app that connects people based on the skills they have or are interested in, includes features like sending and accepting friend request, chatting, searching profiles, building profiles etc... ",
    techStack: ["React", "Javascript", "Firebase", "MaterialUi"],
    apis: ["react-facebook", "react-twitter", ],
    repoLink: "https://github.com/longvulam/COMP-2800-Team-BBY-21-SkillMeet.git",
    webLink: "https://skillmeet-4c737.web.app/",
  },

  {
    id: 0,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521685/samples/port_geuvkn.jpg",
    name: "Portfolio",
    description:
      "Personal portfolio you are currently visiting. Simple and clean SPA, built with React and Context API for global state management.",
    techStack: ["React", "Sass", "Html5"],
    apis: ["Context API"],
    repoLink: "https://github.com/ArunabSingh/portfolio.git",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1672277359/samples/EXPLORE_BG_ucerkl.png",
    name: "EXPLOREX",
    description: "A simple responsive UI application with fast animations and graphql queries.",
    techStack: ["Gatsby", "React", "Graphql"],
    apis: ["react-animations"],

    repoLink: "https://github.com/ArunabSingh/EXPLORE_GraphQL",
    webLink: "https://zippy-paletas-968d39.netlify.app/",
  },
  
];
