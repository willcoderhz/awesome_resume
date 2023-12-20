"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _TemplateSwitcher = _interopRequireDefault(require("../../../templates/TemplateSwitcher"));
var _PreviewHeader = _interopRequireDefault(require("./PreviewHeader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ResumePreview = function ResumePreview(_ref) {
  var userInfo = _ref.userInfo;
  return <div className=" right-0  w-50 h-full ">
      <_PreviewHeader.default />
      <_TemplateSwitcher.default userInfo={userInfo} />
    </div>;
};
var _default = exports["default"] = ResumePreview;