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
  var data = new _index.ResumeModel_D();
  return (0, _mobxReactLite.useObserver)(function () {
    return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].content}>
        <div className={_indexModule["default"].name}>{data.name}</div>
        <div className={_indexModule["default"].des}>
          <span>
            {[data.defaultData.data.basicInfo.birth, data.defaultData.data.basicInfo.sex, data.defaultData.data.basicInfo.location, data.name, data.defaultData.data.basicInfo.cellphone, data.defaultData.data.basicInfo.email].filter(Boolean).join(' ∕ ')}
          </span>
          <br />
          {/*<span>{`${data.defaultData.sections.graduationTime} 年毕业于 ${data.defaultData.education.schoolName} - ${data.defaultData.education.major}`}</span>*/}
        </div>
      </div>
    </div>;
  });
};