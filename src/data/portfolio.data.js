export const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
    id: 1,
  },
  {
    label: "Experience",
    path: "/experience",
    id: 2,
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
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "DevOps Engineer",
    "AI Researcher",
    "Above Avg Golfer & Tennis Player",
  ],
  paragraphs: [
    "I'm a Software Engineer at Fortinet, building scalable cloud infrastructure with a focus on automation, reliability, and performance. I'm a BCIT Computing Alumni and hold AWS and Google Cloud DevOps-related certifications.",
    "My experience spans cloud platforms (AWS, GCP), DevOps, SRE, machine learning, and full-stack web development. I've also published research on Android malware detection using deep learning.",
    "Outside of work, you'll find me on the golf course or the tennis court. I also enjoy hiking, swimming, and cycling — staying active keeps me sharp and brings the same focus I bring to engineering.",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1679361552/ps_epjm0c.png",
    name: "NBA Predictor",
    description: "Machine learning model which predicts the winner of NBA Games with 65% accuracy.\n\n Utilized a range of ML techniques and algorithms, including Random Forests, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), Bagging, Ensemble Methods, and Stacking, to develop and fine-tune the model.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    apis: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    repoLink: "https://github.com/ArunabSingh/NBAGamePredictor",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1673209744/samples/chess3_evjtne.png",
    name: "CHESS 2D",
    description: "Built a 2D Chess game in Java with Object Oriented design principles and an attractive interface with Swing GUI.",
    techStack: ["Java"],
    apis: ["Java", "Swing GUI", "OOP"],
    repoLink: "https://github.com/ArunabSingh/Chess2D",
  },
  {
    id: 3,
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
    image: "https://res.cloudinary.com/bcityelpcamp/image/upload/v1682354919/nba1_vjdaj0.png",
    name: "NBA Salary Predictor",
    description: "Built Machine Learning Web App for predicting NBA Salaries based on their season stats.\nAlso, created Explore page for displaying Data Visualizations.",
    techStack: ["Python", "Streamlit", "", "Mongodb"],
    apis: ["Python", "Streamlit", "Scikit-Learn", "Matplotlib", "NumPy"],

    repoLink: "https://github.com/ArunabSingh/NBASalaryPrectionWebApp",
    webLink: "https://arunabsingh-nbasalaryprectionwebapp-app-67gear.streamlit.app/",
  },
  {
    id: 5,
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
    id: 7,
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
    id: 9,
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

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Fortinet",
    role: "Software Engineer, Cloud Infrastructure",
    location: "Vancouver, BC",
    startDate: "Aug 2023",
    endDate: "Present",
    bullets: [
      "Designing and building scalable cloud infrastructure with a focus on automation, reliability, and performance.",
      "Shipped developer-facing internal platforms — including observability dashboards, self-service CLI tooling, and automated workflows — reducing operational toil and accelerating delivery velocity across multiple engineering teams.",
    ],
    techStack: [
      { category: "Private Cloud", tools: ["OpenStack", "VMware"] },
      { category: "Public Cloud", tools: ["AWS", "GCP", "OCI"] },
      { category: "Containers & Orchestration", tools: ["Kubernetes", "Docker"] },
      { category: "Infrastructure as Code", tools: ["Terraform", "CloudFormation"] },
      { category: "Configuration Management", tools: ["Ansible", "Salt"] },
      { category: "AI & Agentic Systems", tools: ["Google ADK", "LangChain", "Gemini API", "MCP"] },
      { category: "Languages", tools: ["Python", "PowerShell", "Bash"] },
    ],
  },
  {
    id: 2,
    company: "British Columbia Institute of Technology",
    role: "AI Researcher",
    location: "Vancouver, BC",
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    bullets: [
      "Conducted research and published papers on Malware Detection in Android Apps using Machine Learning.",
      "Achieved 96.4% accuracy in malware detection by building Neural Networks with PyTorch, using static features from reverse-engineered Android APKs.",
      "Wrote multi-threaded Java code for reverse engineering Android APKs to build the vector dataset used in ML models, cutting extraction time by 10x.",
    ],
    publications: [
      {
        title: "Interpretable Android Malware Detection Based on Dynamic Analysis",
        link: "https://ieeexplore.ieee.org/document/10667123",
      },
      {
        title: "Revisiting Temporal Inconsistency and Feature Extraction for Android Malware Detection",
        link: "https://www.scitepress.org/PublicationsDetail.aspx?ID=pKlR6rdZHkY=&t=1",
      },
    ],
    techStack: ["Python", "PyTorch", "Java", "Machine Learning", "Neural Networks"],
  },
  {
    id: 3,
    company: "TRIUMF",
    role: "Software Engineer | BCIT Practicum",
    location: "Vancouver, BC",
    startDate: "Apr 2023",
    endDate: "May 2023",
    bullets: [
      "Optimized MySQL DB query response by 50% through indexing key columns and writing subqueries.",
      "Reduced deployment time by 80% through the implementation of Docker containers in a Linux environment.",
    ],
    techStack: ["MySQL", "Docker", "Linux"],
  },
  {
    id: 4,
    company: "Realtor.com",
    role: "Software Engineer Intern",
    location: "Vancouver, BC",
    startDate: "Jan 2022",
    endDate: "Aug 2022",
    bullets: [
      "Developed automated staging environments for QA by utilizing Jenkins, Docker and Shell Scripts, integrated across 10+ microservices resulting in stable, bug-free production builds.",
      "Built scalable AWS Lambdas for storing and querying data in DynamoDB, used in onboarding of 30,000+ customer registrations.",
      "Created modular Page Object Models in Typescript using Playwright and wrote UI integration tests with over 85% code coverage.",
    ],
    techStack: ["Jenkins", "Docker", "AWS Lambda", "DynamoDB", "TypeScript", "Playwright", "Shell"],
  },
];

export const EDUCATION_DATA = [
  {
    id: 1,
    institution: "British Columbia Institute of Technology",
    degree: "Bachelor's Degree, Applied Computer Science\n(Computer Systems Technology)",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    name: "AWS Certified DevOps Engineer – Professional",
    date: "Mar 2025",
  },
  {
    id: 2,
    name: "Google Associate Cloud Engineer",
    date: "Jun 2024",
  },
];
