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
    "I am a Software Developer",
    "I am a Quality Assurance Engineer",
  ],
  paragraphs: [
    "My name is Arunab Singh. I am currently a CST (Computer Systems Technology) Co-op Student looking for Winter (January - August 2022) Co-op Jobs.",
    "I am a self starter in programming, as I started building web and mobile apps from the knowledge I acquired from online courses. Joining BCIT was the perfect match for me as i always liked putting my theoretical knowledge to work and build something bigger out of it. At BCIT, I learned designing and crafting code for various web functions and then testing the resulting code to meet client needs.",
    "I am motivated to always exceed expections and find and deliver the best possible solution to the problem I am facing.",
    "Experienced in the latest cutting edge development tools and procedures. Excels in independent projects as well as effectively contributes as a part of a productive team.",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 2,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521748/samples/campmonk_l3il7b.jpg",
    name: "Campmonk",
    description: "Yelp for Campgrounds build with MEN Stack, integrated with authentication and authorization using passport.js and multiple image upload features, displaying cluster maps using Mapbox API and much more...",
    techStack: ["Html5", "Bootstrap", "Javascript", "Mongodb"],
    apis: ["Mapbox", "Cloudinary", "JOI Schema"],

    repoLink: "https://github.com/ArunabSingh/CampMonk.git",
    webLink: "https://warm-chamber-29743.herokuapp.com/",
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
    techStack: ["Javascript", "React", "Firebase", "MaterialUi"],
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

];
