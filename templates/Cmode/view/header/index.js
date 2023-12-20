"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _index = require("../../index.tsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Header = exports.Header = function Header() {
  // const { data } = useTemplate<ResumeModel_C>()
  var data = new _index.ResumeModel_C();
  return (0, _mobxReactLite.useObserver)(function () {
    return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].content}>
        <div className={_indexModule["default"].name}>{data.name}</div>
        <div className={_indexModule["default"].des}>
          <span>
            {[data.defaultData.age, data.defaultData.gender, data.defaultData.city, data.defaultData.target, data.defaultData.phoneNumber, data.defaultData.email].filter(Boolean).join(' ∕ ')}
          </span>
          <br />
          <span>{"".concat(data.defaultData.education.graduationTime, " \u5E74\u6BD5\u4E1A\u4E8E ").concat(data.defaultData.education.schoolName, " - ").concat(data.defaultData.education.major)}</span>
        </div>
      </div>
    </div>;
  });
};