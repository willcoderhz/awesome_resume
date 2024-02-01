// actions.ts

import { Link, WorkExperience, Skill, Education, PersonalProject, Introduction, Certification, Language} from './types';

// Action 类型常量
export const ADD_BASIC_INFO = 'ADD_BASIC_INFO';
export const UPDATE_BASIC_INFO = 'UPDATE_BASIC_INFO';
export const ADD_LINK = 'ADD_LINK';
export const UPDATE_LINK = 'UPDATE_LINK';
export const DELETE_LINK = 'DELETE_LINK';
export const REORDER_LINKS = 'REORDER_LINKS';
export const ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
export const UPDATE_WORK_EXPERIENCE = 'UPDATE_WORK_EXPERIENCE';
export const DELETE_WORK_EXPERIENCE = 'DELETE_WORK_EXPERIENCE';
export const REORDER_WORK_EXPERIENCE = 'REORDER_WORK_EXPERIENCE';
export const ADD_SKILL = 'ADD_SKILL';
export const UPDATE_SKILL = 'UPDATE_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const REORDER_SKILLS = 'REORDER_SKILLS'; 
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';
export const REORDER_EDUCATIONS = 'REORDER_EDUCATIONS';
export const ADD_PERSONAL_PROJECT = 'ADD_PERSONAL_PROJECT';
export const UPDATE_PERSONAL_PROJECT = 'UPDATE_PERSONAL_PROJECT';
export const DELETE_PERSONAL_PROJECT = 'DELETE_PERSONAL_PROJECT';
export const REORDER_PERSONAL_PROJECTS = 'REORDER_PERSONAL_PROJECTS';
export const ADD_INTRODUCTION = 'ADD_INTRODUCTION';
export const UPDATE_INTRODUCTION = 'UPDATE_INTRODUCTION';
export const DELETE_INTRODUCTION = 'DELETE_INTRODUCTION';
export const ADD_CERTIFICATION = 'ADD_CERTIFICATION';
export const UPDATE_CERTIFICATION = 'UPDATE_CERTIFICATION';
export const DELETE_CERTIFICATION = 'DELETE_CERTIFICATION';
export const ADD_LANGUAGE_SKILL = 'ADD_LANGUAGE_SKILL';
export const UPDATE_LANGUAGE_SKILL = 'UPDATE_LANGUAGE_SKILL';
export const DELETE_LANGUAGE_SKILL = 'DELETE_LANGUAGE_SKILL';

// Basic Info
export const addBasicInfo = (basicInfo) => ({type: ADD_BASIC_INFO,payload: basicInfo,});
export const updateBasicInfo = (basicInfo) => ({type: UPDATE_BASIC_INFO,payload: basicInfo,});

// Links
export const addLink = (link: Link) => ({ type: ADD_LINK, payload: link });
export const updateLink = (key: string, updatedLink: Omit<Link, 'key'>) => ({ type: UPDATE_LINK,payload: { key, ...updatedLink }});
export const deleteLink = (key: string) => ({ type: DELETE_LINK, payload: key });
export const reorderLinks = (links: Link[]) => ({type: REORDER_LINKS,payload: links});

// Work Experiences
export const addWorkExperience = (workExperience: WorkExperience) => ({ type: ADD_WORK_EXPERIENCE, payload: workExperience });
export const updateWorkExperience = (workExperience: WorkExperience) => ({ type: UPDATE_WORK_EXPERIENCE, payload: workExperience });
export const deleteWorkExperience = (workExperienceId: string) => ({ type: DELETE_WORK_EXPERIENCE, payload: workExperienceId });
export const reorderWorkExperience = (workExperiences: WorkExperience[]) => ({type: REORDER_WORK_EXPERIENCE,payload: workExperiences,});

// Skills
export const addSkill = (skill: Skill) => ({ type: ADD_SKILL, payload: skill });
export const updateSkill = (skill: Skill) => ({ type: UPDATE_SKILL, payload: skill });
export const deleteSkill = (skillId: string) => ({ type: DELETE_SKILL, payload: skillId });
export const reorderSkills = (skills: Skill[]) => ({ type: REORDER_SKILLS, payload: skills });

// Educations
export const addEducation = (education: Education) => ({ type: ADD_EDUCATION, payload: education });
export const updateEducation = (education: Education) => ({ type: UPDATE_EDUCATION, payload: education });
export const deleteEducation = (educationId: string) => ({ type: DELETE_EDUCATION, payload: educationId });
export const reorderEducations = (educations: Education[]) => ({ type: REORDER_EDUCATIONS, payload: educations });

// Personal Projects
export const addPersonalProject = (personalProject: PersonalProject) => ({ type: ADD_PERSONAL_PROJECT, payload: personalProject });
export const updatePersonalProject = (personalProject: PersonalProject) => ({ type: UPDATE_PERSONAL_PROJECT, payload: personalProject });
export const deletePersonalProject = (projectId: string) => ({ type: DELETE_PERSONAL_PROJECT, payload: projectId });
export const reorderPersonalProjects = (personalProjects: PersonalProject[]) => ({ type: REORDER_PERSONAL_PROJECTS, payload: personalProjects });

//Self Introduction
export const addIntroduction = (introduction: Introduction) => ({ type: ADD_INTRODUCTION, payload: introduction });
export const updateIntroduction = (key: string, updatedContent: string) => ({ type: UPDATE_INTRODUCTION, payload: { key, content: updatedContent }});
export const deleteIntroduction = (key: string) => ({ type: DELETE_INTRODUCTION, payload: key });

//Certification
export const addCertifications = (certification: Certification) => ({ type: ADD_CERTIFICATION, payload: certification });
export const updateCertification = (key: string, updatedCertification: Omit<Certification, 'key'>) => ({ type: UPDATE_CERTIFICATION, payload: { key, ...updatedCertification }});
export const deleteCertification = (key: string) => ({ type: DELETE_CERTIFICATION, payload: key });

//Language
export const addLanguageSkill = (languageSkill: LanguageSkill) => ({type: ADD_LANGUAGE_SKILL,payload: languageSkill});
export const updateLanguageSkill = (key: string, updatedLanguageSkill: Omit<LanguageSkill, 'key'>) => ({type: UPDATE_LANGUAGE_SKILL,payload: { key, ...updatedLanguageSkill }});
export const deleteLanguageSkill = (key: string) => ({type: DELETE_LANGUAGE_SKILL,payload: key});

