// reducers.ts

import {
  ADD_BASIC_INFO,
  UPDATE_BASIC_INFO,
  ADD_LINK,
  UPDATE_LINK,
  DELETE_LINK,
  REORDER_LINKS,
  ADD_WORK_EXPERIENCE,
  UPDATE_WORK_EXPERIENCE,
  DELETE_WORK_EXPERIENCE,
  REORDER_WORK_EXPERIENCE,
  ADD_SKILL,
  UPDATE_SKILL,
  DELETE_SKILL,
  REORDER_SKILLS,
  ADD_EDUCATION,
  UPDATE_EDUCATION,
  DELETE_EDUCATION,
  REORDER_EDUCATIONS,
  ADD_PERSONAL_PROJECT,
  UPDATE_PERSONAL_PROJECT,
  DELETE_PERSONAL_PROJECT,
  REORDER_PERSONAL_PROJECTS,
  ADD_INTRODUCTION,
  UPDATE_INTRODUCTION,
  DELETE_INTRODUCTION,
  ADD_CERTIFICATION,
  UPDATE_CERTIFICATION,
  DELETE_CERTIFICATION,
  ADD_LANGUAGE_SKILL,
  UPDATE_LANGUAGE_SKILL,
  DELETE_LANGUAGE_SKILL,
} from './actions'; // 从 actions.ts 导入 action 类型常量

import {
  Link,
  WorkExperience,
  Skill,
  Education,
  PersonalProject,
  ResumeState,
  Introduction,
  Certification,
  Language,
} from './types'; // 从 types.ts 导入类型定义



import { combineReducers } from 'redux';

// 初始状态
const initialState: ResumeState = {
  basicInfo: [],
  links: [],
  workExperiences: [],
  skills: [],
  educations: [],
  personalProjects: [],
  introductions:[],
  certifications:[],
  languages:[],
};

function basicInfoReducer(state = {}, action) {
  console.log('BasicInfo Reducer Action:', action);

  switch (action.type) {
    case ADD_BASIC_INFO:
      const newStateAdd = { ...state, ...action.payload };
      console.log('New State after ADD_BASIC_INFO:', newStateAdd);
      return newStateAdd;

    case UPDATE_BASIC_INFO:
      const newStateUpdate = { ...state, ...action.payload };
      console.log('New State after UPDATE_BASIC_INFO:', newStateUpdate);
      return newStateUpdate;

    default:
      console.log('No action matched in basicInfoReducer, returning current state');
      return state;
  }
}


function linksReducer(state = initialState.links, action): Link[] {
  

  switch (action.type) {
    case ADD_LINK:
      const newStateAdd = [...state, action.payload];
      
      return newStateAdd;

    case UPDATE_LINK:
      const newStateUpdate = state.map(link => {
      

        return link.key === action.payload.key
          ? { ...link, ...action.payload }
          : link;
      });
 
      return newStateUpdate;

    case DELETE_LINK:
      const newStateDelete = state.filter(link => link.key !== action.payload);
     
      return newStateDelete;

    case REORDER_LINKS:
     
      return action.payload;

    default:
      return state;
  }
}

// Work Experiences reducer
function workExperiencesReducer(state = initialState.workExperiences, action): WorkExperience[] {
 

  switch (action.type) {
    case ADD_WORK_EXPERIENCE:
      const newStateAdd = [...state, action.payload];
      
      return newStateAdd;
      case UPDATE_WORK_EXPERIENCE:
        const newStateUpdate = state.map(workExperience => {
         
  
          return workExperience.id === action.payload.id 
            ? { ...workExperience, ...action.payload } 
            : workExperience;
        });
       
        return newStateUpdate;
    case DELETE_WORK_EXPERIENCE:
      const newStateDelete = state.filter(workExperience => workExperience.id !== action.payload);
      
      return newStateDelete;
    case REORDER_WORK_EXPERIENCE:
     
      return action.payload;
    default:
      return state;
  }
}

// Skills reducer
function skillsReducer(state = initialState.skills, action): Skill[] {
 

  switch (action.type) {
    case ADD_SKILL:
      const newStateAdd = [...state, action.payload];
      
      return newStateAdd;

    case UPDATE_SKILL:
      const newStateUpdate = state.map(skill => {
       

        return skill.key === action.payload.key
          ? { ...skill, ...action.payload }
          : skill;
      });
      
      return newStateUpdate;

    case DELETE_SKILL:
      const newStateDelete = state.filter(skill => skill.key !== action.payload);
      
      return newStateDelete;

    case REORDER_SKILLS:
   
      return action.payload;

    default:
      
      return state;
  }
}


// Educations reducer
function educationsReducer(state = initialState.educations, action): Education[] {
  console.log('Educations Reducer Action:', action);

  switch (action.type) {
    case ADD_EDUCATION:
      const newStateAdd = [...state, action.payload];
      console.log('New State after ADD_EDUCATION:', newStateAdd);
      return newStateAdd;

    case UPDATE_EDUCATION:
      const newStateUpdate = state.map(education => 
        education.key === action.payload.key ? { ...education, ...action.payload } : education
      );
      console.log('New State after UPDATE_EDUCATION:', newStateUpdate);
      return newStateUpdate;

    case DELETE_EDUCATION:
      const newStateDelete = state.filter(education => education.key !== action.payload);
      console.log('New State after DELETE_EDUCATION:', newStateDelete);
      return newStateDelete;

    case REORDER_EDUCATIONS:
      const newStateReorder = [...action.payload];
      console.log('New State after REORDER_EDUCATIONS:', newStateReorder);
      return newStateReorder;

    default:
      console.log('No action matched, returning current state');
      return state;
  }
}


// Personal Projects reducer
function personalProjectsReducer(state = initialState.personalProjects, action): PersonalProject[] {
 

  switch (action.type) {
    case ADD_PERSONAL_PROJECT:
      const newStateAdd = [...state, action.payload];
      
      return newStateAdd;

    case UPDATE_PERSONAL_PROJECT:
      const newStateUpdate = state.map(personalProject => {
       

        return personalProject.key === action.payload.key
          ? { ...personalProject, ...action.payload }
          : personalProject;
      });
      
      return newStateUpdate;

    case DELETE_PERSONAL_PROJECT:
      const newStateDelete = state.filter(personalProject => personalProject.key !== action.payload);
      
      return newStateDelete;

    case REORDER_PERSONAL_PROJECTS:
      const newStateReorder = [...action.payload];
      
      return newStateReorder;

    default:
      
      return state;
  }
}

function introductionsReducer(state = initialState.introductions, action): Introduction[] {
  console.log('Introduction Reducer Action:', action);

  switch (action.type) {
    case ADD_INTRODUCTION:
      const newStateAdd = [...state, action.payload];
      console.log('New State after ADD_INTRODUCTION:', newStateAdd);
      return newStateAdd;

    case UPDATE_INTRODUCTION:
      const newStateUpdate = state.map(introduction =>
        introduction.key === action.payload.key ? { ...introduction, ...action.payload } : introduction
      );
      console.log('New State after UPDATE_INTRODUCTION:', newStateUpdate);
      return newStateUpdate;

    case DELETE_INTRODUCTION:
      const newStateDelete = state.filter(introduction => introduction.key !== action.payload);
      console.log('New State after DELETE_INTRODUCTION:', newStateDelete);
      return newStateDelete;

    default:
      console.log('No action matched in introductionsReducer, returning current state');
      return state;
  }
}

function certificationsReducer(state = initialState.certifications, action): Certification[] {
  console.log('Certifications Reducer Action:', action); // 打印动作信息

  switch (action.type) {
    case ADD_CERTIFICATION:
      const newStateAdd = [...state, action.payload];
      console.log('New State after ADD_CERTIFICATION:', newStateAdd); // 打印添加后的新状态
      return newStateAdd;

    case UPDATE_CERTIFICATION:
      const newStateUpdate = state.map(certification =>
        certification.key === action.payload.key ? { ...certification, ...action.payload } : certification
      );
      console.log('New State after UPDATE_CERTIFICATION:', newStateUpdate); // 打印更新后的新状态
      return newStateUpdate;

    case DELETE_CERTIFICATION:
      const newStateDelete = state.filter(certification => certification.key !== action.payload);
      console.log('New State after DELETE_CERTIFICATION:', newStateDelete); // 打印删除后的新状态
      return newStateDelete;

    default:
      console.log('No action matched in certificationsReducer, returning current state');
      return state;
  }
}

function languagesReducer(state = initialState.languages, action): Language[] {
  console.log('Languages Reducer Action:', action); // 打印动作信息

  switch (action.type) {
    case ADD_LANGUAGE_SKILL:
      const newStateAdd = [...state, action.payload];
      console.log('New State after ADD_LANGUAGE_SKILL:', newStateAdd); // 打印添加后的新状态
      return newStateAdd;

    case UPDATE_LANGUAGE_SKILL:
      const newStateUpdate = state.map(language =>
        language.key === action.payload.key ? { ...language, ...action.payload } : language
      );
      console.log('New State after UPDATE_LANGUAGE_SKILL:', newStateUpdate); // 打印更新后的新状态
      return newStateUpdate;

    case DELETE_LANGUAGE_SKILL:
      const newStateDelete = state.filter(language => language.key !== action.payload);
      console.log('New State after DELETE_LANGUAGE_SKILL:', newStateDelete); // 打印删除后的新状态
      return newStateDelete;

    default:
      console.log('No action matched in languagesReducer, returning current state');
      return state;
  }
}



// 组合 reducers
const rootReducer = combineReducers({
  basicInfo: basicInfoReducer,
  links: linksReducer,
  workExperiences: workExperiencesReducer,
  skills: skillsReducer,
  educations: educationsReducer,
  personalProjects: personalProjectsReducer,
  introductions: introductionsReducer,
  certifications: certificationsReducer,
  languages: languagesReducer,
});

export default rootReducer;
