"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OwnerProjects = void 0;
var _mobxReactLite = require("mobx-react-lite");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _index = require("../../index.tsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OwnerProjects = exports.OwnerProjects = function OwnerProjects() {
  // const { data, config } = useTemplate<ResumeModel_C>()
  var data = new _index.ResumeModel_C();
  var config = data.defaultConfig;
  return (0, _mobxReactLite.useObserver)(function () {
    return <div className={_indexModule["default"].index}>
      {data.defaultData.projects.map(function (it, i) {
        return <div key={i} className={_indexModule["default"].item}>
            <div className={_indexModule["default"].header}>
              <div className={_indexModule["default"].name}>{it.title}</div>
              <div className={_indexModule["default"].time}></div>
            </div>
            <div className={_indexModule["default"].des} dangerouslySetInnerHTML={{
            __html: it.content.replace(/\n/g, '<br/>')
          }}></div>
          </div>;
      })}
      {config.githubVisible && <div className={_indexModule["default"].more}>
          ➱ 更多我的个人项目请看 GitHub：
          <span style={{
          textDecoration: 'underline'
        }}>
            {data.defaultData.github}
          </span>
        </div>}
    </div>;
  });
};