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
    "BCIT Co-op Student",
    "Full-Stack Web Developer",
    "Research Assistant",
    "Android Developer",
    "Above Avg Golfer & Tennis Player" 
  ],
  paragraphs: [
    "My name is Arunab Singh. I am a CST (Computer Systems Technology) student in my last term at BCIT. I will graduate in May 2023 and am currently looking for 2023 Jr/New Graduate SWE positions.",
    "I started to learn programming by myself when I was in 10th grade. Shortly after learning web development, I started studying OOP with Java which piqued my interest. I became passionate about pursuing a career in tech when coding resembled understanding word problems and applying formulas/patterns to solve for answers. I have always loved problem-solving, and coding allowed me to use this skill to build software that solves our everyday problems.",
    "I have good hands-on experience with web development using the latest technologies and have worked extensively on back-end systems. I have often demonstrated to be a quick learner and an excellent communicator. Solving problems with data structures and algorithms have enhanced my problem-solving ability. Having also worked as a Research Assistant building Machine Learning models, I can bring many skills to the table besides coding."
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
  {
    id: 5,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1673209744/samples/chess3_evjtne.png",
    name: "CHESS 2D",
    description: "Built a 2D Chess game using object oriented principles with Java.",
    techStack: ["Java"],
    apis: ["Swing GUI"],
    repoLink: "https://github.com/ArunabSingh/Chess2D",
  },

  {
    id: 6,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1673210642/samples/sv_nijaf2.png",
    name: "Sorting Visualizer",
    description: "Built a Sorting Visualizer for popular sorting algorithms.",
    techStack: ["React", "Javascript"],
    repoLink: "https://github.com/ArunabSingh/SortingVisualizer",
    webLink: "https://sortingvisualizer-arunab.netlify.app/",
  },
  
];
