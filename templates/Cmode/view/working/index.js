"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Working = void 0;
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Working = exports.Working = function Working(props) {
  var name = props.name,
    time = props.time,
    content = props.content;
  return <div className={_indexModule["default"].index}>
      <div className={_indexModule["default"].header}>
        <div className={_indexModule["default"].name}>{name}</div>
        <div className={_indexModule["default"].time}>
          {time[0]} - {time[1]}
        </div>
      </div>
      <div className={_indexModule["default"].content}>
        <div dangerouslySetInnerHTML={{
        __html: content.replace(/\n/g, '<br/>')
      }}></div>
      </div>
    </div>;
};