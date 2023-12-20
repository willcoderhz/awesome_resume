"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleStyle6 = void 0;
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TitleStyle6 = exports.TitleStyle6 = function TitleStyle6(props) {
  var value = props.value;
  return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].bg}></div>
      <div className={_indexModule["default"].text}>{value}</div>
    </div>;
};
TitleStyle6.defaultProps = {};