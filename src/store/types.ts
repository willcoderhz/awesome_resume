// types.ts

export interface Link {
  name: string;
  url: string;
  key: string;
}

export interface WorkExperience {
  companyName: string;
  position: string;
  city: string;
  dateRange: string;
  description: string;
  id: string;
}

export interface Skill {
  name: string;
  dateRange: string;
  description: string;
}

export interface Education {
  schoolName: string;
  major: string;
  city: string;
  dateRange: string;
  description: string;
}

export interface PersonalProject {
  projectName: string;
  dateRange: string;
  description: string;
}

export interface ResumeState {
  links: Link[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  personalProjects: PersonalProject[];
  introductions:Introduction[];
  certifications:Certification[];
  languages:Language[];
}

export interface Introduction {
  key: string;
  content: string;
}

export interface Certification {
  key: string;  
  name: string; 
}

export interface Language {
  key: string;  
  name: string; 
}