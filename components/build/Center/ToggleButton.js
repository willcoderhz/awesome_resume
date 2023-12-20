"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ToggleButton = function ToggleButton(_ref) {
  var addSelfIntroduction = _ref.addSelfIntroduction,
    addCertification = _ref.addCertification,
    addLanguage = _ref.addLanguage,
    addHobby = _ref.addHobby;
  return <>
      <h1 className="text-left text-xl font-bold mb-4 mt-5 pl-3">添加自定义模块</h1>
      <_antd.Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addSelfIntroduction}>
        添加自我介绍
      </_antd.Button>
      <_antd.Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addCertification}>
        添加相关证书
      </_antd.Button>
      <_antd.Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addLanguage}>
        添加语言能力
      </_antd.Button>
      <_antd.Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addHobby}>
        添加个人爱好
      </_antd.Button>
    </>;
};
var _default = exports["default"] = ToggleButton;