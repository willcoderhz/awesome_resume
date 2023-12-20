"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BasicInfo = _interopRequireDefault(require("./inputparts/BasicInfo"));
var _SelfIntroductionInfo = _interopRequireDefault(require("./inputparts/customized/SelfIntroductionInfo"));
var _EducationInfo = _interopRequireDefault(require("./inputparts/EducationInfo"));
var _WorkingExperienceInfo = _interopRequireDefault(require("./inputparts/WorkingExperienceInfo"));
var _ProjectsInfo = _interopRequireDefault(require("./inputparts/ProjectsInfo"));
var _LinksInfo = _interopRequireDefault(require("./inputparts/LinksInfo"));
var _SkillsInfo = _interopRequireDefault(require("./inputparts/SkillsInfo"));
var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));
var _Certification = _interopRequireDefault(require("./inputparts/customized/Certification"));
var _Language = _interopRequireDefault(require("./inputparts/customized/Language"));
var _Hobby = _interopRequireDefault(require("./inputparts/customized/Hobby"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var nextId = 0;
var UserInfoFormView = function UserInfoFormView(_ref) {
  var handleInputChange = _ref.handleInputChange,
    handleDeleteEducation = _ref.handleDeleteEducation,
    addEducation = _ref.addEducation,
    educations = _ref.educations,
    handleDragStart = _ref.handleDragStart,
    handleEducationDrop = _ref.handleEducationDrop,
    handleDragOver = _ref.handleDragOver,
    handleDeleteWorkExperience = _ref.handleDeleteWorkExperience,
    workExperiences = _ref.workExperiences,
    handleWorkDrop = _ref.handleWorkDrop,
    addWorkExperience = _ref.addWorkExperience,
    handleDeleteProject = _ref.handleDeleteProject,
    projects = _ref.projects,
    handleProjectDrop = _ref.handleProjectDrop,
    addProject = _ref.addProject,
    handleDeleteLink = _ref.handleDeleteLink,
    links = _ref.links,
    handleLinkDrop = _ref.handleLinkDrop,
    addLink = _ref.addLink;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    components = _useState2[0],
    setComponents = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    certifications = _useState4[0],
    setCertifications = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    languages = _useState6[0],
    setLanguages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hobbies = _useState8[0],
    setHobbies = _useState8[1];
  (0, _react.useEffect)(function () {
    return function () {
      nextId = 0; // reset the id counter when the component unmounts
    };
  }, []);
  var addSelfIntroduction = function addSelfIntroduction() {
    var key = nextId++;
    var newComponent = <_SelfIntroductionInfo.default id={key} key={key} handleInputChange={handleInputChange} handleDelete={function () {
      return deleteComponent(key);
    }} />;
    setComponents(function (prevComponents) {
      return [].concat(_toConsumableArray(prevComponents), [newComponent]);
    });
  };
  var addCertification = function addCertification() {
    var key = nextId++;
    var newComponent = <_Certification.default id={key} key={key} handleInputChange={handleCertificationChange} handleDelete={function () {
      return deleteComponent(key);
    }} />;
    setComponents(function (prevComponents) {
      return [].concat(_toConsumableArray(prevComponents), [newComponent]);
    });
  };
  var addLanguage = function addLanguage() {
    var key = nextId++;
    var newComponent = <_Language.default id={key} key={key} handleInputChange={handleLanguageChange} handleDelete={function () {
      return deleteComponent(key);
    }} />;
    setComponents(function (prevComponents) {
      return [].concat(_toConsumableArray(prevComponents), [newComponent]);
    });
  };
  var addHobby = function addHobby() {
    var key = nextId++;
    var newComponent = <_Hobby.default id={key} key={key} handleInputChange={handleHobbyChange} handleDelete={function () {
      return deleteComponent(key);
    }} />;
    setComponents(function (prevComponents) {
      return [].concat(_toConsumableArray(prevComponents), [newComponent]);
    });
  };
  var deleteComponent = function deleteComponent(id) {
    setComponents(function (prevComponents) {
      return prevComponents.filter(function (component) {
        return component.props.id !== id;
      });
    });
  };
  var handleCertificationChange = function handleCertificationChange(newCertifications) {
    setCertifications(newCertifications);
  };
  var handleLanguageChange = function handleLanguageChange(newLanguages) {
    setLanguages(newLanguages);
  };
  var handleHobbyChange = function handleHobbyChange(newHobbies) {
    setHobbies(newHobbies);
  };
  return <div className="ml-2 z-10 w-42 mr-4">
      <div className="userInfoInput">

      <_BasicInfo.default handleInputChange={handleInputChange} />

      <_LinksInfo.default links={links} handleDragStart={handleDragStart} handleLinkDrop={handleLinkDrop} handleDragOver={handleDragOver} handleInputChange={handleInputChange} handleDeleteLink={handleDeleteLink} addLink={addLink} />
      

      <_WorkingExperienceInfo.default workExperiences={workExperiences} handleDragStart={handleDragStart} handleWorkDrop={handleWorkDrop} handleDragOver={handleDragOver} handleInputChange={handleInputChange} handleDeleteWorkExperience={handleDeleteWorkExperience} addWorkExperience={addWorkExperience} />

      <_SkillsInfo.default links={links} handleDragStart={handleDragStart} handleLinkDrop={handleLinkDrop} handleDragOver={handleDragOver} handleInputChange={handleInputChange} handleDeleteLink={handleDeleteLink} addLink={addLink} />

      <_EducationInfo.default educations={educations} handleDragStart={handleDragStart} handleEducationDrop={handleEducationDrop} handleDragOver={handleDragOver} handleInputChange={handleInputChange} handleDeleteEducation={handleDeleteEducation} addEducation={addEducation} />
      
      <_ProjectsInfo.default projects={projects} handleDragStart={handleDragStart} handleProjectDrop={handleProjectDrop} handleDragOver={handleDragOver} handleInputChange={handleInputChange} handleDeleteProject={handleDeleteProject} addProject={addProject} />

      <br />

      {components}

      <_ToggleButton.default addSelfIntroduction={addSelfIntroduction} addCertification={addCertification} addLanguage={addLanguage} addHobby={addHobby} />
      
        
      </div>
    </div>;
};
var _default = exports["default"] = UserInfoFormView;