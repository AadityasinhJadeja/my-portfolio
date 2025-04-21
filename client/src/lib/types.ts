export interface Experience {
  id: number;
  title: string;
  company: string;
  domain?: string; // Optional domain field
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  imageUrl: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'technical' | 'tool' | 'core';
}

export interface Interest {
  id: number;
  name: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  email: string;
  location: string;
  availability: string;
  about: string[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}
