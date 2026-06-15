export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Skills", href: "/#skills" },
  { title: "Contact", href: "/#contact" },
];

export type Skill = {
  name: string;
  level: number;
  category: "AI" | "Database" | "Frontend" | "Backend" | "Other";
};

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 92, category: "Frontend" },
  { name: "React Native", level: 82, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "TailwindCSS", level: 85, category: "Frontend" },
  { name: "Redux Toolkit", level: 80, category: "Frontend" },

  // Backend
  { name: "C#", level: 85, category: "Backend" },
  { name: ".NET 8.0", level: 85, category: "Backend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 83, category: "Backend" },
  { name: "FastAPI", level: 80, category: "Backend" },
  { name: "Entity Framework Core", level: 80, category: "Backend" },

  // Database
  { name: "SQL Server", level: 85, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Stored Procedures", level: 75, category: "Database" },

  // AI & ML
  { name: "Python", level: 90, category: "AI" },
  { name: "OpenAI API", level: 85, category: "AI" },
  { name: "LangChain", level: 80, category: "AI" },
  { name: "TensorFlow", level: 80, category: "AI" },
  { name: "Huggingface", level: 75, category: "AI" },
  { name: "Vector Databases", level: 78, category: "AI" },

  // Cloud, DevOps & Tools
  { name: "Microsoft Azure", level: 85, category: "Other" },
  { name: "Azure DevOps", level: 82, category: "Other" },
  { name: "Git", level: 90, category: "Other" },
  { name: "Docker", level: 75, category: "Other" },
  { name: "Jenkins CI/CD", level: 78, category: "Other" },
  { name: "Power BI", level: 80, category: "Other" },
  { name: "Tableau", level: 80, category: "Other" },
  { name: "Jira", level: 85, category: "Other" },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "SparkLink – Academic Collaboration Platform",
    description:
      "Built a live academic collaboration platform with role-based access, team formation, and resume uploads using React.js, Node.js, Express.js, and MySQL. Integrated Python microservices and secure authentication with Passport.js and Sequelize; actively used by the University of Windsor.",
    image: "images/Sparklink.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Python Microservices",
      "Passport.js",
      "Sequelize",
    ],
    link: "https://github.com/VekariaVinit/SparkLink",
  },
  {
    title: "RockLearn – Employee Learning Portal",
    description:
      "Created a GitHub-integrated learning portal for employees using React.js, Node.js, and TailwindCSS with real-time backend/frontend synchronization; deployed at University of Windsor.",
    image: "/images/rocklearn.png",
    tags: ["React.js", "Node.js", "TailwindCSS", "GitHub Integration"],
    link: "https://github.com/VekariaVinit/RockLearn",
  },
  {
    title: "CyberSentinel – Cybersecurity Enhancement Platform",
    description:
      "Built an AI dashboard delivering real-time risk analysis with custom-trained LLMs using Python, Streamlit, MySQL, and Alteryx workflows for University of Windsor.",
    image: "images/cybersentinel.png",
    tags: ["Python", "Streamlit", "Llama3", "MySQL", "Alteryx"],
    link:
      "https://github.com/VekariaVinit/Cyber-Attack-Analysis-Dashboard-with-Llama3-integration",
  },
  {
    title: "AI vs AI – GAN-based Image Authenticity Detection",
    description:
      "Trained adversarial GAN models with TensorFlow and Huggingface to detect synthetic media, tuning hyperparameters for optimized classification accuracy.",
    image: "images/GANvsai.png",
    tags: ["TensorFlow", "Huggingface", "GANs", "Python"],
    link: "https://github.com/VekariaVinit/GAN-based-Detection",
  },
  {
    title: "Autonomous AI Chat Agent for Customer Support",
    description:
      "Developed a GPT-based chatbot using OpenAI API, LangChain, FastAPI, and n8n, with Streamlit analytics for real-time interactive customer support.",
    image: "images/AIchatagent.png",
    tags: ["OpenAI API", "LangChain", "FastAPI", "n8n", "Streamlit"],
    link: "#",
  },
];

export const aboutMe = {
  intro:
    "Full-Stack Software Developer with 1.5+ years of professional experience building enterprise-grade web, mobile, and cloud-native applications.",
  description:
    "Proven expertise in React, Next.js, React Native, and TypeScript for frontend, and C#, .NET, Azure Functions for backend systems. Proficient in Python for AI/ML development and GenAI integrations, with a strong track record delivering scalable, maintainable, user-centric solutions.",
  experience: [
    {
      position: "Software Developer",
      company: "SunsetGrown – Mastronardi",
      period: "May 2025 – Present",
      achievements: [
        "Developed enterprise Warehouse Management System (WMS) using React, Next.js, and TypeScript, supporting multi-location distribution centers with real-time inventory tracking and order fulfilment dashboards.",
        "Built cross-platform React Native mobile app for warehouse floor operations; integrated Zebra industrial barcode scanners, reducing operation time by 60%.",
        "Architected multi-tenant REST API using Azure Functions (.NET 8.0) with schema-based data isolation, OAuth 2.0/JWT authentication, and JWKS-based signature verification.",
        "Built 13+ Azure Function endpoints with Entity Framework Core 8.0, fault-tolerant scheduler with exponential backoff, and a three-tier health monitoring system.",
        "Deployed via Azure DevOps CI/CD across Dev, QA, and Production; optimized API response times by 50% through caching and query optimization.",
        "Created real-time analytics dashboard with KPI widgets tracking count accuracy, average velocity metrics, and historical trend analysis.",
      ],
    },
    {
      position: "AI Agent Developer (Freelance)",
      company: "Self-Employed",
      period: "June 2024 – Present",
      achievements: [
        "Built and deployed AI agents using OpenAI APIs and LangChain for automation and customer support with FastAPI backend; leveraged ChromaDB for semantic search and RAG pipelines.",
        "Integrated n8n workflow automation for real-time data processing and modular backend workflows.",
        "Designed fallback logic, performance monitoring dashboards, and scalable deployment pipelines for production-ready AI systems.",
      ],
    },
  ],
};
