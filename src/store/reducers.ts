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
  REORDER_PERSONAL_PROJECTS
} from './actions'; // 从 actions.ts 导入 action 类型常量

import {
  Link,
  WorkExperience,
  Skill,
  Education,
  PersonalProject,
  ResumeState
} from './types'; // 从 types.ts 导入类型定义



import { combineReducers } from 'redux';

// 初始状态
const initialState: ResumeState = {
  basicInfo: [],
  links: [],
  workExperiences: [],
  skills: [],
  educations: [],
  personalProjects: []
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


// 组合 reducers
const rootReducer = combineReducers({
  basicInfo: basicInfoReducer,
  links: linksReducer,
  workExperiences: workExperiencesReducer,
  skills: skillsReducer,
  educations: educationsReducer,
  personalProjects: personalProjectsReducer
});

export default rootReducer;
