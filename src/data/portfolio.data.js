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
    "Greetings, I am Arunab Singh, a final term Computer Systems Technology (CST) student at BCIT. I am set to graduate in May 2023 and am actively seeking Junior/New Graduate Software Engineer opportunities.",
    "My journey in programming began during my 10th grade, where I discovered a love for web development. This curiosity quickly led me to explore Java and delve deeper into Object-Oriented Programming principles. I discovered that coding was like solving puzzles, a task that I have always enjoyed. This experience solidified my passion for technology and the potential it has to solve real-world problems.",
    "With hands-on experience in web development and quality assurance, I am proficient in utilizing the latest technologies to deliver high-quality work. My background as a Research Assistant in Machine Learning has honed my problem-solving skills and allowed me to bring a unique perspective to my projects. I have a proven track record of being a quick learner and effective communicator, making me a valuable asset to any team.",
    "I am an avid sports enthusiast with a passion for both playing and watching sports. When I am not on the court or the green, I love to engage in outdoor physical activities such as hiking, swimming, and cycling. My love for sports and staying active allows me to bring energy, determination, and teamwork to everything I do, both on and off the field."
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
