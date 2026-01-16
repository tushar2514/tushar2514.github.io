import { 
  Cloud, 
  Terminal, 
  Container, 
  GitBranch, 
  Code2, 
  Database, 
  Activity, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail,
  Server,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SkillCategory, ExperienceItem, ProjectItem, CertificationItem, SocialLink } from './types';

export const PROFILE = {
  name: "Tushar Rathore",
  title: "DevOps Engineer & Cloud Architect",
  location: "Noida, Uttar Pradesh, India",
  summary: "AWS-certified Cloud Engineer with 2+ years of experience in infrastructure automation, cloud architecture, and DevOps practices. Expertise in Terraform, Kubernetes, and AWS services with a proven track record of optimizing TCO through strategic infrastructure deployment. Skilled in Agile methodologies, CI/CD pipelines, and blue/green deployment strategies for zero-downtime releases.",
  email: "tusharrathore1410@gmail.com",
  picture: "https://github.com/tushar2514.png"
};

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/tushar2514",
    icon: Github,
    label: "github.com/tushar2514"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/tusharrathore",
    icon: Linkedin,
    label: "linkedin.com/in/tusharrathore"
  },
  {
    platform: "Email",
    url: "mailto:tusharrathore1410@gmail.com",
    icon: Mail,
    label: "tusharrathore1410@gmail.com"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, VPC, Lambda)", "RDS & DynamoDB", "CloudFormation", "IAM Security"],
    icon: Cloud
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "AWS CloudFormation", "Ansible"],
    icon: Server
  },
  {
    title: "Containerization",
    skills: ["Kubernetes (K8s)", "Docker", "Amazon ECS", "EKS"],
    icon: Container
  },
  {
    title: "DevOps & CI/CD",
    skills: ["Jenkins", "GitHub Actions", "Blue/Green Deployment", "Canary Releases"],
    icon: GitBranch
  },
  {
    title: "Programming",
    skills: ["Python", "Bash/Shell Scripting", "C", "C++"],
    icon: Code2
  },
  {
    title: "Monitoring & Databases",
    skills: ["CloudWatch", "Prometheus", "Grafana", "MongoDB", "PostgreSQL", "MySQL"],
    icon: Activity
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Cloud Engineer",
    company: "CSK Information Technology Pvt Ltd",
    location: "Noida, India",
    period: "April 2024 – Present",
    description: [
      "Architected and deployed scalable AWS infrastructure using Terraform, reducing Total Cost of Ownership (TCO) by 30% through resource optimization.",
      "Implemented Kubernetes clusters for container orchestration, enabling auto-scaling capabilities that improved application performance by 40%.",
      "Executed blue/green deployment strategies across production environments, achieving 99.9% uptime for critical services.",
      "Automated infrastructure provisioning workflows using Terraform modules, reducing deployment time from hours to minutes.",
      "Designed CI/CD pipelines, accelerating release cycles and enabling 3x more frequent deployments.",
      "Implemented monitoring solutions using CloudWatch and custom scripts, reducing Mean Time To Detection (MTTD) by 50%."
    ]
  },
  {
    id: "exp-2",
    role: "AWS re/Start Program Graduate",
    company: "Amazon Web Services (AWS)",
    location: "India",
    period: "October 2023 – March 2024",
    description: [
      "Completed intensive 12-week AWS training covering cloud fundamentals, architecture best practices, and hands-on labs.",
      "Developed proficiency in core AWS services including EC2, S3, VPC, RDS, Lambda, and IAM through real-world projects.",
      "Built and deployed full-stack applications on AWS infrastructure, demonstrating end-to-end cloud solution design capabilities.",
      "Earned AWS Cloud Practitioner certification, validating foundational cloud knowledge."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Electrical, Electronics & Communications",
    institution: "Government Engineering College, Ajmer",
    period: "2019 – 2023"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Multi-Region AWS Infrastructure",
    description: "Designed and deployed fault-tolerant, multi-region infrastructure using Terraform. Implemented disaster recovery strategies with automated failover capabilities to ensure high availability.",
    techStack: ["Terraform", "AWS", "Route53", "S3 Replication"]
  },
  {
    id: "proj-2",
    title: "Kubernetes Migration Initiative",
    description: "Led the containerization initiative migrating legacy applications to Kubernetes. Achieved a 45% improvement in resource utilization and significantly reduced infrastructure costs.",
    techStack: ["Kubernetes", "Docker", "AWS EKS", "Helm"]
  },
  {
    id: "proj-3",
    title: "MongoDB RAG Application",
    description: "Built a Retrieval-Augmented Generation (RAG) application utilizing MongoDB vector search capabilities for intelligent document querying and efficient information retrieval.",
    techStack: ["MongoDB", "Python", "Vector Search", "LLM Integration"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "Data Streaming Engineer" },
  { name: "Building RAG Apps Using MongoDB" },
  { name: "Programming with C and C++" },
  { name: "Interfacing with Arduino" }
];