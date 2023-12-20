// actions.ts
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
// Basic Info
export const addBasicInfo = (basicInfo) => ({ type: ADD_BASIC_INFO, payload: basicInfo, });
export const updateBasicInfo = (basicInfo) => ({ type: UPDATE_BASIC_INFO, payload: basicInfo, });
// Links
export const addLink = (link) => ({ type: ADD_LINK, payload: link });
export const updateLink = (key, updatedLink) => ({ type: UPDATE_LINK, payload: { key, ...updatedLink } });
export const deleteLink = (key) => ({ type: DELETE_LINK, payload: key });
export const reorderLinks = (links) => ({ type: REORDER_LINKS, payload: links });
// Work Experiences
export const addWorkExperience = (workExperience) => ({ type: ADD_WORK_EXPERIENCE, payload: workExperience });
export const updateWorkExperience = (workExperience) => ({ type: UPDATE_WORK_EXPERIENCE, payload: workExperience });
export const deleteWorkExperience = (workExperienceId) => ({ type: DELETE_WORK_EXPERIENCE, payload: workExperienceId });
export const reorderWorkExperience = (workExperiences) => ({ type: REORDER_WORK_EXPERIENCE, payload: workExperiences, });
// Skills
export const addSkill = (skill) => ({ type: ADD_SKILL, payload: skill });
export const updateSkill = (skill) => ({ type: UPDATE_SKILL, payload: skill });
export const deleteSkill = (skillId) => ({ type: DELETE_SKILL, payload: skillId });
export const reorderSkills = (skills) => ({ type: REORDER_SKILLS, payload: skills });
// Educations
export const addEducation = (education) => ({ type: ADD_EDUCATION, payload: education });
export const updateEducation = (education) => ({ type: UPDATE_EDUCATION, payload: education });
export const deleteEducation = (educationId) => ({ type: DELETE_EDUCATION, payload: educationId });
export const reorderEducations = (educations) => ({ type: REORDER_EDUCATIONS, payload: educations });
// Personal Projects
export const addPersonalProject = (personalProject) => ({ type: ADD_PERSONAL_PROJECT, payload: personalProject });
export const updatePersonalProject = (personalProject) => ({ type: UPDATE_PERSONAL_PROJECT, payload: personalProject });
export const deletePersonalProject = (projectId) => ({ type: DELETE_PERSONAL_PROJECT, payload: projectId });
export const reorderPersonalProjects = (personalProjects) => ({ type: REORDER_PERSONAL_PROJECTS, payload: personalProjects });
