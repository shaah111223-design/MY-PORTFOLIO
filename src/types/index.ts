export interface Skill {
  name: string;
  category: 'programming' | 'tools';
  description: string;
  tags: string[];
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  fullDescriptionPlaceholder: string;
  technologies: string[];
  isPlaceholderTech: boolean;
  liveDemoUrl?: string | null;
  sourceCodeUrl?: string | null;
  isRealDemoConfigured: boolean;
  isRealRepoConfigured: boolean;
  notesForOwner?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  expectedGraduation: string;
  cgpaPlaceholder: string;
  courseworkPlaceholders: string[];
  highlightsPlaceholders: string[];
  isPlaceholderGrade: boolean;
}

export interface LearningItem {
  id: string;
  topic: string;
  category: string;
  description: string;
  status: string;
  isPlaceholder: boolean;
}

export interface ProfileData {
  name: string;
  shortName: string;
  roleTitle: string;
  headline: string;
  supportingHeadline: string;
  shortDescription: string;
  degree: string;
  college: string;
  graduationYear: string;
  location: {
    city: string;
    state: string;
    country: string;
    full: string;
  };
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
  };
  socialLinks: {
    github: {
      url: string;
      isConfigured: boolean;
      placeholderLabel: string;
    };
    linkedin: {
      url: string;
      isConfigured: boolean;
      placeholderLabel: string;
    };
  };
  experienceStatus: string;
  careerGoal: string;
  profileImage: {
    customPhotoUrl: string | null; // Set to image path e.g. "/profile.jpg" when user adds photo
    fallbackInitials: string;
  };
}
