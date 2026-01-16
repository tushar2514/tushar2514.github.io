import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  date?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}