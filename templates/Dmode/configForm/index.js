"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConfigForm = function ConfigForm() {
  return (0, _mobxReactLite.useObserver)(function () {
    return <div className={_indexModule["default"].index}>
      <h3>模块</h3>


    </div>;
  });
};
var _default = exports["default"] = ConfigForm;