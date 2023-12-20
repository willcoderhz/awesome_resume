"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _resumeModel_A = _interopRequireDefault(require("./Amode/resumeModel_A"));
var _resumeModel_B = _interopRequireDefault(require("./Bmode/resumeModel_B"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TemplateSwitcher = function TemplateSwitcher(_ref) {
  var userInfo = _ref.userInfo;
  var _useState = (0, _react.useState)('C'),
    _useState2 = _slicedToArray(_useState, 2),
    currentTemplate = _useState2[0],
    setCurrentTemplate = _useState2[1];
  var ResumeComponent;
  switch (currentTemplate) {
    case 'A':
      ResumeComponent = _resumeModel_A["default"];
      break;
    case 'B':
      ResumeComponent = _resumeModel_B["default"];
      break;
    default:
      ResumeComponent = _resumeModel_A["default"];
      break;
  }
  return <div>
      {/* 这里可以添加切换模板的按钮或其他逻辑
       <div className="flex justify-start space-x-6 pl-6">
       <button
       className="ml-24 py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
       onClick={() => setCurrentTemplate('A')}
       >
       选择模板A
       </button>
       <button
       className="py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
       onClick={() => setCurrentTemplate('B')}
       >
       选择模板B
       </button>
       <button
       className="py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
       onClick={() => setCurrentTemplate('C')}
       >
       选择模板C
       </button>
       </div>*/}


      <ResumeComponent userInfo={userInfo} />
    </div>;
};
var _default = exports["default"] = TemplateSwitcher;