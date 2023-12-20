"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleStyle2 = void 0;
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TitleStyle2 = exports.TitleStyle2 = function TitleStyle2(props) {
  var value = props.value;
  return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].text}>{value}</div>
    </div>;
};
TitleStyle2.defaultProps = {};