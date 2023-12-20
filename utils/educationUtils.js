"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEducationState = exports.handleEducationInputChange = exports.handleEducationDrop = exports.handleDragStart = exports.handleDragOver = exports.handleDeleteEducation = exports.addEducation = void 0;
var _react = require("react");
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
// State
var useEducationState = exports.useEducationState = function useEducationState() {
  var _useState = (0, _react.useState)([{
      school: '',
      major: '',
      degree: '',
      graduationDate: ''
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    educations = _useState2[0],
    setEducations = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    draggedItem = _useState4[0],
    setDraggedItem = _useState4[1];
  return {
    educations: educations,
    setEducations: setEducations,
    draggedItem: draggedItem,
    setDraggedItem: setDraggedItem
  };
};

// Input handling
var handleEducationInputChange = exports.handleEducationInputChange = function handleEducationInputChange(educations, setEducations, onInfoChange) {
  return function (e, index) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var newEducations = _toConsumableArray(educations);
    newEducations[index][name] = value;
    setEducations(newEducations);
    onInfoChange(function (prevInfo) {
      return _objectSpread(_objectSpread({}, prevInfo), {}, {
        educations: newEducations
      });
    });
  };
};

// Add & Delete
var addEducation = exports.addEducation = function addEducation(educations, setEducations) {
  return function () {
    setEducations([].concat(_toConsumableArray(educations), [{
      school: '',
      major: '',
      degree: '',
      graduationDate: ''
    }]));
  };
};
var handleDeleteEducation = exports.handleDeleteEducation = function handleDeleteEducation(educations, setEducations, onInfoChange) {
  return function (indexToDelete) {
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
};

// Drag & Drop functionality
var handleDragStart = exports.handleDragStart = function handleDragStart(setDraggedItem) {
  return function (e, index) {
    setDraggedItem(index);
  };
};
var handleEducationDrop = exports.handleEducationDrop = function handleEducationDrop(educations, setEducations, onInfoChange, draggedItem, setDraggedItem) {
  return function (e, index) {
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
};
var handleDragOver = exports.handleDragOver = function handleDragOver(e) {
  e.preventDefault();
};