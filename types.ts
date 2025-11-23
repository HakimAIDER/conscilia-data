import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface JobOffer {
  title: string;
  description: string;
  location: string;
  contract: string;
  technologies: string[];
}

export interface TrainingCourse {
  title: string;
  description: string;
  image: string;
}

export interface UseCaseItem {
  title: string;
  sector: string;
  problem: string;
  solution: string;
  result: string;
  resultValue: string;
}