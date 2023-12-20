"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _UesrInfoFormStructure = _interopRequireDefault(require("./UesrInfoFormStructure"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserInfoForm = function UserInfoForm(_ref) {
  var onInfoChange = _ref.onInfoChange;
  var _useState = (0, _react.useState)([{
      school: '',
      major: '',
      degree: '',
      graduationDate: ''
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    educations = _useState2[0],
    setEducations = _useState2[1];
  var _useState3 = (0, _react.useState)([{
      companyName: '',
      title: '',
      workTime: '',
      workExperience: ''
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    workExperiences = _useState4[0],
    setWorkExperiences = _useState4[1];
  var _useState5 = (0, _react.useState)([{
      projectName: '',
      projectTime: '',
      projectDescription: ''
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    projects = _useState6[0],
    setProjects = _useState6[1];
  var _useState7 = (0, _react.useState)([{
      url: ''
    }]),
    _useState8 = _slicedToArray(_useState7, 2),
    links = _useState8[0],
    setLinks = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    draggedItem = _useState10[0],
    setDraggedItem = _useState10[1];
  var handleInputChange = function handleInputChange(e) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;

    // 处理教育经历
    if (['school', 'major', 'degree', 'graduationDate'].includes(name)) {
      var newEducations = _toConsumableArray(educations);
      newEducations[index][name] = value;
      setEducations(newEducations);
      onInfoChange(function (prevInfo) {
        return _objectSpread(_objectSpread({}, prevInfo), {}, {
          educations: newEducations
        });
      });
    }
    // 处理工作经历
    else if (['companyName', 'title', 'workTime', 'workExperience'].includes(name)) {
      var newWorkExperiences = _toConsumableArray(workExperiences);
      newWorkExperiences[index][name] = value;
      setWorkExperiences(newWorkExperiences);
      onInfoChange(function (prevInfo) {
        return _objectSpread(_objectSpread({}, prevInfo), {}, {
          workExperiences: newWorkExperiences
        });
      });
    } else if (['projectName', 'projectTime', 'projectDescription'].includes(name)) {
      var newProjects = _toConsumableArray(projects);
      newProjects[index][name] = value;
      setProjects(newProjects);
      onInfoChange(function (prevInfo) {
        return _objectSpread(_objectSpread({}, prevInfo), {}, {
          projects: newProjects
        });
      });
    }
    //处理链接
    else if (name === 'url') {
      var newLinks = _toConsumableArray(links);
      newLinks[index][name] = value;
      setLinks(newLinks);
      onInfoChange(function (prevInfo) {
        return _objectSpread(_objectSpread({}, prevInfo), {}, {
          links: newLinks
        });
      });
    }

    // 处理其他输入字段
    else {
      onInfoChange(function (prevInfo) {
        return _objectSpread(_objectSpread({}, prevInfo), {}, _defineProperty({}, name, value));
      });
    }
  };
  var handleDeleteEducation = function handleDeleteEducation(indexToDelete) {
    var newEducations = educations.filter(function (_, index) {
      return index !== indexToDelete;
    });
    setEducations(newEducations);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        educations: newEducations
      });
    });
  };
  var addEducation = function addEducation() {
    setEducations([].concat(_toConsumableArray(educations), [{
      school: '',
      major: '',
      degree: '',
      graduationDate: ''
    }]));
  };
  var handleDeleteWorkExperience = function handleDeleteWorkExperience(indexToDelete) {
    var newWorkExperiences = workExperiences.filter(function (_, index) {
      return index !== indexToDelete;
    });
    setWorkExperiences(newWorkExperiences);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        workExperiences: newWorkExperiences
      });
    });
  };
  var addWorkExperience = function addWorkExperience() {
    setWorkExperiences([].concat(_toConsumableArray(workExperiences), [{
      companyName: '',
      title: '',
      workTime: '',
      workExperience: ''
    }]));
  };
  var addProject = function addProject() {
    setProjects([].concat(_toConsumableArray(projects), [{
      projectName: '',
      projectTime: '',
      projectDescription: ''
    }]));
  };
  var handleDeleteProject = function handleDeleteProject(indexToDelete) {
    var newProjects = projects.filter(function (_, index) {
      return index !== indexToDelete;
    });
    setProjects(newProjects);
  };
  var handleDeleteLink = function handleDeleteLink(indexToDelete) {
    var newLinks = links.filter(function (_, index) {
      return index !== indexToDelete;
    });
    setLinks(newLinks);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        links: newLinks
      });
    });
  };
  var addLink = function addLink() {
    setLinks([].concat(_toConsumableArray(links), [{
      url: ''
    }]));
  };
  var handleDragStart = function handleDragStart(e, index) {
    setDraggedItem(index);
  };
  var handleEducationDrop = function handleEducationDrop(e, index) {
    e.preventDefault();
    var list = _toConsumableArray(educations);
    var draggedEducation = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedEducation);
    setEducations(list);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        educations: list
      });
    });
    setDraggedItem(null);
  };
  var handleWorkDrop = function handleWorkDrop(e, index) {
    e.preventDefault();
    var list = _toConsumableArray(workExperiences);
    var draggedWork = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedWork);
    setWorkExperiences(list);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        workExperiences: list
      });
    });
    setDraggedItem(null);
  };
  var handleProjectDrop = function handleProjectDrop(e, index) {
    e.preventDefault();
    var list = _toConsumableArray(projects);
    var draggedProject = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedProject);
    setProjects(list);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        projects: list
      });
    });
    setDraggedItem(null);
  };
  var handleLinkDrop = function handleLinkDrop(e, index) {
    e.preventDefault();
    var list = _toConsumableArray(links);
    var draggedLink = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedLink);
    setLinks(list);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        links: list
      });
    });
    setDraggedItem(null);
  };
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
  };
  return <_UesrInfoFormStructure.default educations={educations} handleInputChange={handleInputChange} handleDeleteEducation={handleDeleteEducation} addEducation={addEducation} workExperiences={workExperiences} handleDeleteWorkExperience={handleDeleteWorkExperience} addWorkExperience={addWorkExperience} projects={projects} handleDeleteProject={handleDeleteProject} addProject={addProject} links={links} handleDeleteLink={handleDeleteLink} addLink={addLink} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleEducationDrop={handleEducationDrop} handleWorkDrop={handleWorkDrop} handleProjectDrop={handleProjectDrop} handleLinkDrop={handleLinkDrop} />;
};
var _default = exports["default"] = UserInfoForm;