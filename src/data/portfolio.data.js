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
    "Hi, I am Arunab Singh, a final term Computer Systems Technology (CST) student at BCIT. I am set to graduate in May 2023 and am actively seeking Intern/New Graduate Software Engineer opportunities.",
    "My journey in programming began during my 8th grade, where I discovered a keen interest for web development. This curiosity quickly led me to explore Java and delve deeper into Object-Oriented Programming principles. I discovered that coding was like solving puzzles, a task that I have always enjoyed. This experience solidified my passion for technology and the potential it has to solve real-world problems.",
    "With hands-on experience in web development and quality assurance, I am proficient in utilizing the latest technologies to deliver high-quality work. My background as a Research Assistant in Machine Learning has honed my problem-solving skills and allowed me to bring a unique perspective to my projects. I have a proven track record of being a quick learner and effective communicator, making me a valuable asset to any team.",
    "I am an avid sports enthusiast with a passion for both playing and watching sports. When I am not on the court or the green, I love to engage in outdoor physical activities such as hiking, swimming, and cycling. My love for sports and staying active allows me to bring energy, determination, and teamwork to everything I do, both on and off the field."
  ],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521748/samples/campmonk_l3il7b.jpg",
    name: "NBA Predictor",
    description: "Machine learning model which predicts the winner of NBA Games with 65% accuracy.\n\n Utilized a range of ML techniques and algorithms, including Random Forests, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), Bagging, Ensemble Methods, and Stacking, to develop and fine-tune the model.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    apis: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    repoLink: "https://github.com/ArunabSingh/NBAGamePredictor",
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1673209744/samples/chess3_evjtne.png",
    name: "CHESS 2D",
    description: "Built a 2D Chess game in Java with Object Oriented design principles and an attractive interface with Swing GUI.",
    techStack: ["Java"],
    apis: ["Java", "Swing GUI", "OOP"],
    repoLink: "https://github.com/ArunabSingh/Chess2D",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521748/samples/campmonk_l3il7b.jpg",
    name: "Campmonk",
    description: "Yelp for Campgrounds built with MEN Stack and a robust REST API.\n  Integrated authentication and authorization using passport.js.\n Added image upload and cluster maps features.",
    techStack: ["Html5", "Javascript", "NodeDotJs", "Mongodb"],
    apis: ["JavaScript", "MongoDB", "Express", "NodeJS", "Passport.js", "Mapbox", "Cloudinary", "JOI Schema", "ejs"],

    repoLink: "https://github.com/ArunabSingh/CampMonk.git",
    webLink: "https://campmonk101.herokuapp.com/",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521750/samples/skillmeet_rzuqjk.jpg",
    name: "SkillMeet",
    description:
      "Created a social networking application that facilitates connection between individuals based on shared skills and interests.\n Features include profile building, search functionality, friend requests, messaging, and more. ",
    techStack: ["React", "Javascript", "Firebase", "MaterialUi"],
    apis: ["React", "JavaScript", "Firebase", "NoSQL", "Material UI", "Selenium"],
    repoLink: "https://github.com/longvulam/COMP-2800-Team-BBY-21-SkillMeet.git",
    webLink: "https://skillmeet-4c737.web.app/",
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1672277359/samples/EXPLORE_BG_ucerkl.png",
    name: "EXPLOREX",
    description: "Developed an intuitive and visually appealing UI application that leverages fast animations and GraphQL queries for optimal performance.",
    techStack: ["Gatsby", "React", "Graphql"],
    apis: ["GraphQL", "Gatsby", "React", "Styed-components"],

    repoLink: "https://github.com/ArunabSingh/EXPLORE_GraphQL",
    webLink: "https://zippy-paletas-968d39.netlify.app/",
  },

  {
    id: 5,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521685/samples/port_geuvkn.jpg",
    name: "Portfolio",
    description:
      "Built a personal portfolio website using React and Context API for efficient global state management. \nThe website features a clean and minimalist single-page design for easy navigation.",
    techStack: ["React", "Sass", "Html5"],
    apis: ["React", "Context API", "React Hooks", "JavaScript"],
    repoLink: "https://github.com/ArunabSingh/portfolio.git",
  },
  {
    id: 8,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1673210642/samples/sv_nijaf2.png",
    name: "Sorting Visualizer",
    description: "Built a Sorting Visualizer for popular sorting algorithms including:\n Bubble Sort, Quick Sort, Mege Sort, Heap Sort, Insertion Sort.",
    apis: ["Sorting algorithms", "Javascript", "React"],
    repoLink: "https://github.com/ArunabSingh/SortingVisualizer",
    webLink: "https://sortingvisualizer-arunab.netlify.app/",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1630521749/samples/bestride_lmztlz.jpg",
    name: "Bestride",
    description:
      "A web application that compares and calculate the pricing of different ride-sharing companies, such as Uber, Lyft, Modo, Evo, etc., for a given ride details.\n The app takes ride details as input and uses distance and duration metrics to generate accurate pricing information.",
    techStack: ["Html5", "Bootstrap", "Jquery", "Firebase"],
    apis: ["HTML/CSS", "Jquery", "Firebase", "Google Maps API"],
    repoLink: "https://github.com/ArunabSingh/Team13_app.git",
    webLink: "https://bestride-c8357.web.app/",
  },
  
];
