import { ProfileData, SkillCategory, Project, EducationItem, LearningItem } from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION - AHAMAD KALANDAR SHAHAD
 * ============================================================================
 * Welcome! All personal details, projects, skills, education, and social links
 * are managed in this single configuration file.
 * 
 * To add real links (like your GitHub or LinkedIn) or project details:
 * Simply edit the values below.
 * ============================================================================
 */

export const profileData: ProfileData = {
  name: "Ahamad Kalandar Shahad",
  shortName: "Shahad",
  roleTitle: "COMPUTER SCIENCE ENGINEERING STUDENT",
  headline: "Hi, I'm Ahamad Kalandar Shahad.",
  supportingHeadline: "Building my future in software development, one project at a time.",
  shortDescription:
    "I'm a Computer Science Engineering student passionate about programming, problem-solving, and creating useful digital experiences. I'm continuously learning and developing my skills to prepare for opportunities in the software industry.",
  degree: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
  college: "A.J. Institute of Engineering and Technology",
  graduationYear: "2028",
  location: {
    city: "Kasargod",
    state: "Kerala",
    country: "India",
    full: "Kasargod, Kerala, India",
  },
  contact: {
    email: "shahadh22831@gmail.com",
    phone: "+91 8848667873",
    displayPhone: "+91 88486 67873",
  },
  socialLinks: {
    github: {
      url: "https://github.com/shaah111223-design",
      isConfigured: true,
      placeholderLabel: "GitHub Profile",
    },
    linkedin: {
      url: "", // Insert your LinkedIn profile URL e.g. "https://linkedin.com/in/yourusername"
      isConfigured: false,
      placeholderLabel: "LinkedIn Profile (Add in portfolioData.ts)",
    },
  },
  experienceStatus: "Fresher • Open to Entry-Level & Internship Opportunities",
  careerGoal: "Entry-level software development and IT opportunities",
  profileImage: {
    // To use a photo, drop your image file (e.g. photo.jpg) into the public/ folder
    // and set customPhotoUrl to "/photo.jpg". If null, a stylized developer avatar is displayed.
    customPhotoUrl: null,
    fallbackInitials: "AS",
  },
};

/**
 * Technical Skills
 * Real skills provided: Python, C Programming, Microsoft Excel
 * (No artificial percentage ratings or fabricated experience)
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core programming fundamentals for problem solving and software logic.",
    skills: [
      {
        name: "Python",
        category: "programming",
        description: "Versatile programming language used for logic building, scripting, and foundational problem solving.",
        tags: ["Core Python", "Scripting", "Logic Building", "Problem Solving"],
        iconName: "Python",
      },
      {
        name: "C Programming",
        category: "programming",
        description: "Foundational procedural programming emphasizing memory understanding, algorithmic logic, and computing basics.",
        tags: ["Procedural Logic", "Data Structures Basics", "Algorithms", "Core Computing"],
        iconName: "Code2",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Productivity",
    description: "Software and productivity tools for data organization and analysis.",
    skills: [
      {
        name: "Microsoft Excel",
        category: "tools",
        description: "Structured data handling, formula modeling, spreadsheet organization, and analytical reporting.",
        tags: ["Formulas & Functions", "Data Organization", "Tabular Analysis", "Spreadsheets"],
        iconName: "FileSpreadsheet",
      },
    ],
  },
];

/**
 * Projects
 * ScholarMatch (Academic Project)
 * Missing information is strictly flagged as editable placeholders without fabricated details.
 */
export const projectsData: Project[] = [
  {
    id: "scholar-match",
    title: "ScholarMatch",
    category: "Academic Project",
    status: "In Development / Academic Project",
    shortDescription:
      "An academic project focused on scholarship discovery and student matching. Developed as part of computer science coursework.",
    fullDescriptionPlaceholder:
      "[Placeholder] ScholarMatch is an academic project designed to help students discover and match with relevant academic scholarship opportunities based on eligibility criteria. (Full technical architecture, user workflow, and documentation can be added here once finalized).",
    technologies: [
      "[Placeholder] Python",
      "[Placeholder] Logic & Matching Engine",
      "[Placeholder] Data Organization",
    ],
    isPlaceholderTech: true,
    liveDemoUrl: null, // Set your live demo URL when ready
    sourceCodeUrl: null, // Set your GitHub repository URL when ready
    isRealDemoConfigured: false,
    isRealRepoConfigured: false,
    notesForOwner:
      "To add your real project details, open src/data/portfolioData.ts and update description, technologies, demo URL, and GitHub repository.",
  },
];

/**
 * Education
 * B.E. in Computer Science Engineering, AJIET (Graduation: 2028)
 */
export const educationData: EducationItem = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  institution: "A.J. Institute of Engineering and Technology",
  location: "Mangalore / Kasargod Region, India",
  duration: "2024 - 2028",
  expectedGraduation: "Expected Graduation: 2028",
  cgpaPlaceholder: "[Placeholder: Will be updated upon semester results]",
  courseworkPlaceholders: [
    "Problem Solving with C (Foundational)",
    "Object-Oriented Programming (Python)",
    "Data Structures & Algorithm Concepts (In Progress)",
    "Discrete Mathematics & Computational Thinking",
    "Computer Hardware & System Fundamentals",
  ],
  highlightsPlaceholders: [
    "Building foundational problem-solving through academic programming laboratories",
    "Actively working on academic project: ScholarMatch",
    "Engaging in peer learning and technical explorations in software engineering",
  ],
  isPlaceholderGrade: true,
};

/**
 * Currently Learning Section
 * Generic placeholder items clearly marked as editable.
 */
export const currentlyLearningData: LearningItem[] = [
  {
    id: "learn-dsa",
    topic: "Data Structures & Algorithms",
    category: "Computer Science Core",
    description: "Deepening understanding of linear and non-linear data structures, time complexity analysis, and problem-solving patterns.",
    status: "Active Focus",
    isPlaceholder: true,
  },
  {
    id: "learn-web",
    topic: "Modern Web Development",
    category: "Frontend & Full-Stack",
    description: "Exploring web standards, interactive user interfaces, and how client-server architectures power modern digital applications.",
    status: "Exploring",
    isPlaceholder: true,
  },
  {
    id: "learn-git",
    topic: "Git & Version Control",
    category: "Developer Tooling",
    description: "Practicing repository workflows, branch management, and collaborative development best practices on GitHub.",
    status: "In Progress",
    isPlaceholder: true,
  },
  {
    id: "learn-db",
    topic: "Database Management & SQL",
    category: "Data Systems",
    description: "Learning relational database principles, schema design, and query writing for data-driven software solutions.",
    status: "Upcoming Focus",
    isPlaceholder: true,
  },
];

export const quickStats = [
  { label: "Degree Program", value: "B.E. Computer Science" },
  { label: "Graduation Class", value: "2028" },
  { label: "Primary Focus", value: "Software Development" },
  { label: "Location", value: "Kasargod, Kerala" },
];
