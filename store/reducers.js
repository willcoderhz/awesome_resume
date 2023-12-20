"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _actions = require("./actions");
var _redux = require("redux");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // reducers.ts
// 从 actions.ts 导入 action 类型常量
// 从 types.ts 导入类型定义
// 初始状态
var initialState = {
  basicInfo: [],
  links: [],
  workExperiences: [],
  skills: [],
  educations: [],
  personalProjects: []
};
function basicInfoReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('BasicInfo Reducer Action:', action);
  switch (action.type) {
    case _actions.ADD_BASIC_INFO:
      var newStateAdd = _objectSpread(_objectSpread({}, state), action.payload);
      console.log('New State after ADD_BASIC_INFO:', newStateAdd);
      return newStateAdd;
    case _actions.UPDATE_BASIC_INFO:
      var newStateUpdate = _objectSpread(_objectSpread({}, state), action.payload);
      console.log('New State after UPDATE_BASIC_INFO:', newStateUpdate);
      return newStateUpdate;
    default:
      console.log('No action matched in basicInfoReducer, returning current state');
      return state;
  }
}
function linksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.links;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions.ADD_LINK:
      var newStateAdd = [].concat(_toConsumableArray(state), [action.payload]);
      return newStateAdd;
    case _actions.UPDATE_LINK:
      var newStateUpdate = state.map(function (link) {
        return link.key === action.payload.key ? _objectSpread(_objectSpread({}, link), action.payload) : link;
      });
      return newStateUpdate;
    case _actions.DELETE_LINK:
      var newStateDelete = state.filter(function (link) {
        return link.key !== action.payload;
      });
      return newStateDelete;
    case _actions.REORDER_LINKS:
      return action.payload;
    default:
      return state;
  }
}

// Work Experiences reducer
function workExperiencesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.workExperiences;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions.ADD_WORK_EXPERIENCE:
      var newStateAdd = [].concat(_toConsumableArray(state), [action.payload]);
      return newStateAdd;
    case _actions.UPDATE_WORK_EXPERIENCE:
      var newStateUpdate = state.map(function (workExperience) {
        return workExperience.id === action.payload.id ? _objectSpread(_objectSpread({}, workExperience), action.payload) : workExperience;
      });
      return newStateUpdate;
    case _actions.DELETE_WORK_EXPERIENCE:
      var newStateDelete = state.filter(function (workExperience) {
        return workExperience.id !== action.payload;
      });
      return newStateDelete;
    case _actions.REORDER_WORK_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
}

// Skills reducer
function skillsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.skills;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions.ADD_SKILL:
      var newStateAdd = [].concat(_toConsumableArray(state), [action.payload]);
      return newStateAdd;
    case _actions.UPDATE_SKILL:
      var newStateUpdate = state.map(function (skill) {
        return skill.key === action.payload.key ? _objectSpread(_objectSpread({}, skill), action.payload) : skill;
      });
      return newStateUpdate;
    case _actions.DELETE_SKILL:
      var newStateDelete = state.filter(function (skill) {
        return skill.key !== action.payload;
      });
      return newStateDelete;
    case _actions.REORDER_SKILLS:
      return action.payload;
    default:
      return state;
  }
}

// Educations reducer
function educationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.educations;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('Educations Reducer Action:', action);
  switch (action.type) {
    case _actions.ADD_EDUCATION:
      var newStateAdd = [].concat(_toConsumableArray(state), [action.payload]);
      console.log('New State after ADD_EDUCATION:', newStateAdd);
      return newStateAdd;
    case _actions.UPDATE_EDUCATION:
      var newStateUpdate = state.map(function (education) {
        return education.key === action.payload.key ? _objectSpread(_objectSpread({}, education), action.payload) : education;
      });
      console.log('New State after UPDATE_EDUCATION:', newStateUpdate);
      return newStateUpdate;
    case _actions.DELETE_EDUCATION:
      var newStateDelete = state.filter(function (education) {
        return education.key !== action.payload;
      });
      console.log('New State after DELETE_EDUCATION:', newStateDelete);
      return newStateDelete;
    case _actions.REORDER_EDUCATIONS:
      var newStateReorder = _toConsumableArray(action.payload);
      console.log('New State after REORDER_EDUCATIONS:', newStateReorder);
      return newStateReorder;
    default:
      console.log('No action matched, returning current state');
      return state;
  }
}

// Personal Projects reducer
function personalProjectsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.personalProjects;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions.ADD_PERSONAL_PROJECT:
      var newStateAdd = [].concat(_toConsumableArray(state), [action.payload]);
      return newStateAdd;
    case _actions.UPDATE_PERSONAL_PROJECT:
      var newStateUpdate = state.map(function (personalProject) {
        return personalProject.key === action.payload.key ? _objectSpread(_objectSpread({}, personalProject), action.payload) : personalProject;
      });
      return newStateUpdate;
    case _actions.DELETE_PERSONAL_PROJECT:
      var newStateDelete = state.filter(function (personalProject) {
        return personalProject.key !== action.payload;
      });
      return newStateDelete;
    case _actions.REORDER_PERSONAL_PROJECTS:
      var newStateReorder = _toConsumableArray(action.payload);
      return newStateReorder;
    default:
      return state;
  }
}

// 组合 reducers
var rootReducer = (0, _redux.combineReducers)({
  basicInfo: basicInfoReducer,
  links: linksReducer,
  workExperiences: workExperiencesReducer,
  skills: skillsReducer,
  educations: educationsReducer,
  personalProjects: personalProjectsReducer
});
var _default = exports["default"] = rootReducer;