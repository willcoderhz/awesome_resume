"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateWorkExperience = exports.updateSkill = exports.updatePersonalProject = exports.updateLink = exports.updateEducation = exports.updateBasicInfo = exports.reorderWorkExperience = exports.reorderSkills = exports.reorderPersonalProjects = exports.reorderLinks = exports.reorderEducations = exports.deleteWorkExperience = exports.deleteSkill = exports.deletePersonalProject = exports.deleteLink = exports.deleteEducation = exports.addWorkExperience = exports.addSkill = exports.addPersonalProject = exports.addLink = exports.addEducation = exports.addBasicInfo = exports.UPDATE_WORK_EXPERIENCE = exports.UPDATE_SKILL = exports.UPDATE_PERSONAL_PROJECT = exports.UPDATE_LINK = exports.UPDATE_EDUCATION = exports.UPDATE_BASIC_INFO = exports.REORDER_WORK_EXPERIENCE = exports.REORDER_SKILLS = exports.REORDER_PERSONAL_PROJECTS = exports.REORDER_LINKS = exports.REORDER_EDUCATIONS = exports.DELETE_WORK_EXPERIENCE = exports.DELETE_SKILL = exports.DELETE_PERSONAL_PROJECT = exports.DELETE_LINK = exports.DELETE_EDUCATION = exports.ADD_WORK_EXPERIENCE = exports.ADD_SKILL = exports.ADD_PERSONAL_PROJECT = exports.ADD_LINK = exports.ADD_EDUCATION = exports.ADD_BASIC_INFO = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// actions.ts

// Action 类型常量
var ADD_BASIC_INFO = exports.ADD_BASIC_INFO = 'ADD_BASIC_INFO';
var UPDATE_BASIC_INFO = exports.UPDATE_BASIC_INFO = 'UPDATE_BASIC_INFO';
var ADD_LINK = exports.ADD_LINK = 'ADD_LINK';
var UPDATE_LINK = exports.UPDATE_LINK = 'UPDATE_LINK';
var DELETE_LINK = exports.DELETE_LINK = 'DELETE_LINK';
var REORDER_LINKS = exports.REORDER_LINKS = 'REORDER_LINKS';
var ADD_WORK_EXPERIENCE = exports.ADD_WORK_EXPERIENCE = 'ADD_WORK_EXPERIENCE';
var UPDATE_WORK_EXPERIENCE = exports.UPDATE_WORK_EXPERIENCE = 'UPDATE_WORK_EXPERIENCE';
var DELETE_WORK_EXPERIENCE = exports.DELETE_WORK_EXPERIENCE = 'DELETE_WORK_EXPERIENCE';
var REORDER_WORK_EXPERIENCE = exports.REORDER_WORK_EXPERIENCE = 'REORDER_WORK_EXPERIENCE';
var ADD_SKILL = exports.ADD_SKILL = 'ADD_SKILL';
var UPDATE_SKILL = exports.UPDATE_SKILL = 'UPDATE_SKILL';
var DELETE_SKILL = exports.DELETE_SKILL = 'DELETE_SKILL';
var REORDER_SKILLS = exports.REORDER_SKILLS = 'REORDER_SKILLS';
var ADD_EDUCATION = exports.ADD_EDUCATION = 'ADD_EDUCATION';
var UPDATE_EDUCATION = exports.UPDATE_EDUCATION = 'UPDATE_EDUCATION';
var DELETE_EDUCATION = exports.DELETE_EDUCATION = 'DELETE_EDUCATION';
var REORDER_EDUCATIONS = exports.REORDER_EDUCATIONS = 'REORDER_EDUCATIONS';
var ADD_PERSONAL_PROJECT = exports.ADD_PERSONAL_PROJECT = 'ADD_PERSONAL_PROJECT';
var UPDATE_PERSONAL_PROJECT = exports.UPDATE_PERSONAL_PROJECT = 'UPDATE_PERSONAL_PROJECT';
var DELETE_PERSONAL_PROJECT = exports.DELETE_PERSONAL_PROJECT = 'DELETE_PERSONAL_PROJECT';
var REORDER_PERSONAL_PROJECTS = exports.REORDER_PERSONAL_PROJECTS = 'REORDER_PERSONAL_PROJECTS';

// Basic Info
var addBasicInfo = exports.addBasicInfo = function addBasicInfo(basicInfo) {
  return {
    type: ADD_BASIC_INFO,
    payload: basicInfo
  };
};
var updateBasicInfo = exports.updateBasicInfo = function updateBasicInfo(basicInfo) {
  return {
    type: UPDATE_BASIC_INFO,
    payload: basicInfo
  };
};

// Links
var addLink = exports.addLink = function addLink(link) {
  return {
    type: ADD_LINK,
    payload: link
  };
};
var updateLink = exports.updateLink = function updateLink(key, updatedLink) {
  return {
    type: UPDATE_LINK,
    payload: _objectSpread({
      key: key
    }, updatedLink)
  };
};
var deleteLink = exports.deleteLink = function deleteLink(key) {
  return {
    type: DELETE_LINK,
    payload: key
  };
};
var reorderLinks = exports.reorderLinks = function reorderLinks(links) {
  return {
    type: REORDER_LINKS,
    payload: links
  };
};

// Work Experiences
var addWorkExperience = exports.addWorkExperience = function addWorkExperience(workExperience) {
  return {
    type: ADD_WORK_EXPERIENCE,
    payload: workExperience
  };
};
var updateWorkExperience = exports.updateWorkExperience = function updateWorkExperience(workExperience) {
  return {
    type: UPDATE_WORK_EXPERIENCE,
    payload: workExperience
  };
};
var deleteWorkExperience = exports.deleteWorkExperience = function deleteWorkExperience(workExperienceId) {
  return {
    type: DELETE_WORK_EXPERIENCE,
    payload: workExperienceId
  };
};
var reorderWorkExperience = exports.reorderWorkExperience = function reorderWorkExperience(workExperiences) {
  return {
    type: REORDER_WORK_EXPERIENCE,
    payload: workExperiences
  };
};

// Skills
var addSkill = exports.addSkill = function addSkill(skill) {
  return {
    type: ADD_SKILL,
    payload: skill
  };
};
var updateSkill = exports.updateSkill = function updateSkill(skill) {
  return {
    type: UPDATE_SKILL,
    payload: skill
  };
};
var deleteSkill = exports.deleteSkill = function deleteSkill(skillId) {
  return {
    type: DELETE_SKILL,
    payload: skillId
  };
};
var reorderSkills = exports.reorderSkills = function reorderSkills(skills) {
  return {
    type: REORDER_SKILLS,
    payload: skills
  };
};

// Educations
var addEducation = exports.addEducation = function addEducation(education) {
  return {
    type: ADD_EDUCATION,
    payload: education
  };
};
var updateEducation = exports.updateEducation = function updateEducation(education) {
  return {
    type: UPDATE_EDUCATION,
    payload: education
  };
};
var deleteEducation = exports.deleteEducation = function deleteEducation(educationId) {
  return {
    type: DELETE_EDUCATION,
    payload: educationId
  };
};
var reorderEducations = exports.reorderEducations = function reorderEducations(educations) {
  return {
    type: REORDER_EDUCATIONS,
    payload: educations
  };
};

// Personal Projects
var addPersonalProject = exports.addPersonalProject = function addPersonalProject(personalProject) {
  return {
    type: ADD_PERSONAL_PROJECT,
    payload: personalProject
  };
};
var updatePersonalProject = exports.updatePersonalProject = function updatePersonalProject(personalProject) {
  return {
    type: UPDATE_PERSONAL_PROJECT,
    payload: personalProject
  };
};
var deletePersonalProject = exports.deletePersonalProject = function deletePersonalProject(projectId) {
  return {
    type: DELETE_PERSONAL_PROJECT,
    payload: projectId
  };
};
var reorderPersonalProjects = exports.reorderPersonalProjects = function reorderPersonalProjects(personalProjects) {
  return {
    type: REORDER_PERSONAL_PROJECTS,
    payload: personalProjects
  };
};