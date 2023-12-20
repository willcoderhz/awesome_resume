"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _react = _interopRequireWildcard(require("react"));
var _header = require("./header");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _ = require("..");
var _EditorHeader = _interopRequireDefault(require("../../../components/build/Top/EditorHeader.tsx"));
var _Navbar = _interopRequireDefault(require("../../../components/build/LeftSidebar/Navbar.tsx"));
var _UserInfoForm = _interopRequireDefault(require("../../../components/build/Center/UserInfoForm.tsx"));
var _index = require("../view/ownerProjects/index.tsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var View = function View() {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    userInfo = _useState2[0],
    setUserInfo = _useState2[1];
  var rm = new _.ResumeModel_D();
  var config = rm.defaultConfig;
  return (0, _mobxReactLite.useObserver)(function () {
    return (
      //todo  这个地方的写法多少感觉有些问题，模版里应该只写模板的问题，但我把外层导航和编辑部分也加进来了，感觉有点乱，后面要在修改下

      <div>
        <_EditorHeader.default />
        <div className="flex">
            <_Navbar.default />
            <_UserInfoForm.default onInfoChange={setUserInfo} />
            <div className={_indexModule["default"].index} style={{
            '--color-primary': config.primaryColor
          }}>
                <div className={_indexModule["default"].header}>
                    <_header.Header />
                </div>
                <_index.OwnerProjects />
            </div>
        </div>
    </div>
    );
  });
};
var _default = exports["default"] = View;