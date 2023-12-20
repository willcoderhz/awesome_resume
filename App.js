"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ResumeEditorDisplay = _interopRequireDefault(require("./views/ResumeEditor/ResumeEditorDisplay.tsx"));
var _ResumeTemplate = _interopRequireDefault(require("./views/template/ResumeTemplate.tsx"));
var _reactRouterDom = require("react-router-dom");
var _index = _interopRequireDefault(require("../src/templates/Cmode/view/index.tsx"));
var _index2 = _interopRequireDefault(require("../src/templates/Dmode/view/index.tsx"));
var _Home = _interopRequireDefault(require("./views/home/Home.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return <_reactRouterDom.Routes>
          <_reactRouterDom.Route path="/" element={<_Home.default />} />
          <_reactRouterDom.Route path="/resume" element={<_ResumeEditorDisplay.default />} />
          <_reactRouterDom.Route path="/resumeTemplates" element={<_ResumeTemplate.default />} />
          <_reactRouterDom.Route path="/resumeTemplatesUrlC" element={<_index.default />} />
          <_reactRouterDom.Route path="/resumeTemplatesUrlD" element={<_index2.default />} />
      </_reactRouterDom.Routes>;
}
var _default = exports["default"] = App;