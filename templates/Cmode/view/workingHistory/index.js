"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkingHistory = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _index = require("../../index.tsx");
var _working = require("../working");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var WorkingHistory = exports.WorkingHistory = function WorkingHistory() {
  var data = new _index.ResumeModel_C();
  return (0, _mobxReactLite.useObserver)(function () {
    return <div className={_indexModule["default"].index}>
      {data.defaultData.workingHistory.map(function (it, i1) {
        return <div className={_indexModule["default"].item} key={i1}>
            <_working.Working name={it.title} time={[it.startTime, it.endTime]} content={it.content} />
          </div>;
      })}
    </div>;
  });
};