"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleStyle4 = void 0;
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TitleStyle4 = exports.TitleStyle4 = function TitleStyle4(props) {
  var value = props.value;
  return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].bg}></div>
      <div className={_indexModule["default"].text}>{value}</div>
    </div>;
};
TitleStyle4.defaultProps = {};