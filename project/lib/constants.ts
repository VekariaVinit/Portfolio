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
  category: "AI" | "Data Engineering" | "Frontend" | "Backend" | "Other";
};

export const skills: Skill[] = [
  // AI & ML
  { name: "Python", level: 95, category: "AI" },
  { name: "TensorFlow", level: 85, category: "AI" },
  { name: "OpenAI API", level: 85, category: "AI" },
  { name: "LangChain", level: 80, category: "AI" },
  { name: "Huggingface", level: 80, category: "AI" },
  { name: "GANs", level: 80, category: "AI" },

  // Data Engineering
  { name: "SQL", level: 90, category: "Data Engineering" },
  { name: "MySQL", level: 85, category: "Data Engineering" },
  { name: "Pandas", level: 90, category: "Data Engineering" },
  { name: "NumPy", level: 85, category: "Data Engineering" },

  // Frontend
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TailwindCSS", level: 80, category: "Frontend" },

  // Backend & Cloud
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "FastAPI", level: 85, category: "Backend" },
  { name: "AWS", level: 85, category: "Backend" },

  // Other Tools & DevOps
  { name: "Git", level: 90, category: "Other" },
  { name: "GitHub Actions", level: 85, category: "Other" },
  { name: "CI/CD", level: 80, category: "Other" },
  { name: "JIRA", level: 85, category: "Other" },
  { name: "Confluence", level: 85, category: "Other" },
  { name: "Streamlit", level: 85, category: "Other" },
  { name: "Selenium", level: 80, category: "Other" },
  { name: "Pytest", level: 80, category: "Other" },
  { name: "n8n", level: 80, category: "Other" },
  { name: "Power BI", level: 85, category: "Other" },
  { name: "Tableau", level: 85, category: "Other" },
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
    "Inventive and results-driven AI/ML Engineer with experience building production-ready AI agents, full-stack platforms, and visualization tools to solve real-world problems.",
  description:
    "Proficient in Python, LangChain, React, FastAPI, and cloud-native architectures, with a focus on scalable LLM-based systems and customer-facing solutions.",
  experience: [
    {
      position: "Software Developer ",
      company: "Mastronardi Produce ",
      period: "Mau 2025 - Present",
      achievements: [
        "Built dashboards & new views in Warehouse Management App to improve operational visibility.",
        "Integrated APIs with React/Next.js for real-time synchronization.",
        "Conducted regression & performance testing using Swagger & Postman.",
        "Hands-on experience with Microsoft Azure"
      ],
    },
    {
      position: "AI Agent Developer (Freelance)",
      company: "Self-Employed",
      period: "June 2024 - Present",
      achievements: [
        "Built scalable AI agents using OpenAI APIs and LangChain for customer support and automation.",
        "Integrated real-time data workflows with FastAPI and n8n on cloud-native architecture.",
        "Delivered performance monitoring, fallback logic, and modular deployment-ready systems.",
      ],
    },
  ],
};
