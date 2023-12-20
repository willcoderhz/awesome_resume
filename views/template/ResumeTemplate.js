"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Header = _interopRequireDefault(require("../../components/home/Header.tsx"));
var _Footer = _interopRequireDefault(require("../../components/home/Footer.tsx"));
var _index = require("./index.tsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ResumeTemplate = function ResumeTemplate() {
  return <div className="layout-demo">
        <_Header.default />
            <_index.IndexPage />
        <_Footer.default />
    </div>;
};
var _default = exports["default"] = ResumeTemplate;