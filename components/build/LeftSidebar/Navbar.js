"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactRouterDom = require("react-router-dom");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditClicked = _useState2[0],
    setIsEditClicked = _useState2[1];
  var navigate = (0, _reactRouterDom.useNavigate)();
  var navigateToSection = function navigateToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    console.log(element);
  };
  return <_antd.Menu mode="vertical" theme="light" className="h-screen w-8  left-0 border-r">
      <_antd.Menu.Item key="edit" icon={<_icons.EditOutlined />} className="hover:bg-blue-600 hover:text-white" onClick={function () {
      return setIsEditClicked(!isEditClicked);
    }}>
        编辑
      </_antd.Menu.Item>
      
      {isEditClicked && <_react.default.Fragment>
          <_antd.Menu.Item key="basicInfo" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('basicInfo');
      }}>基本信息</_antd.Menu.Item>
          <_antd.Menu.Item key="selfIntroduction" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('selfIntroduction');
      }}>自我介绍</_antd.Menu.Item>
          <_antd.Menu.Item key="educationInfo" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('educationInfo');
      }}>教育经历</_antd.Menu.Item>
          <_antd.Menu.Item key="workingExperienceInfo" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('workingExperienceInfo');
      }}>工作经历</_antd.Menu.Item>
          <_antd.Menu.Item key="projectsInfo" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('projectsInfo');
      }}>项目经历</_antd.Menu.Item>
          <_antd.Menu.Item key="linksInfo" style={{
        paddingLeft: '24px'
      }} onClick={function () {
        return navigateToSection('linksInfo');
      }}>相关链接</_antd.Menu.Item>
        </_react.default.Fragment>}

      <_antd.Menu.Item key="template" icon={<_icons.AppstoreAddOutlined />} className="hover:bg-blue-600 hover:text-white">
        模板
      </_antd.Menu.Item>
      
      <_antd.Menu.Item key="export" icon={<_icons.ExportOutlined />} className="hover:bg-blue-600 hover:text-white">
        导出
      </_antd.Menu.Item>

      <_antd.Menu.Item key="home" icon={<_icons.HomeOutlined />} className="hover:bg-blue-600 hover:text-white" onClick={function () {
      return navigate('/');
    }}>
        首页
      </_antd.Menu.Item>
    </_antd.Menu>;
};
var _default = exports["default"] = Navbar;