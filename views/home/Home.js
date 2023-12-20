"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Header = _interopRequireDefault(require("../../components/home/Header.tsx"));
var _Footer = _interopRequireDefault(require("../../components/home/Footer.tsx"));
var _Mainc = _interopRequireDefault(require("../../components/home/Mainc.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Home = function Home() {
  return <div className="layout-demo">
        <_Header.default />
        <_Mainc.default />
        <_Footer.default />
    </div>;
};
var _default = exports["default"] = Home;