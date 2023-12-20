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
  // const { data } = useTemplate<ResumeModel_C>()
  return (0, _mobxReactLite.useObserver)(function () {
    return <MyComponent />;
  });
};
var MyComponent = function MyComponent() {
  var data = new _index.ResumeModel_D();
  var sectionsArray = data.defaultData.data.sections;
  var linksArray = data.defaultData.data.links;
  return <div>
        {sectionsArray.map(function (item, index) {
      return <div key={index}>
              {/*<div className={styles.name} style={{*/}
              {/*  color: '#333', fontSize: '34px',*/}
              {/*  fontWeight: 'bold',*/}
              {/*  marginBottom: '20px',*/}
              {/*  marginTop: '20px',*/}


              {/*}}>*/}
              {/*  <p>{item.name}</p>*/}
              {/*</div>*/}
              //后面要修改，自动生成
              <div className={_indexModule["default"].index}>
                <div className={_indexModule["default"].text}>{item.name}</div>
              </div>

              {item.type === 'custom' && <div>
                    {item.data.map(function (item) {
            return <div key={item.title}>
                          <h3>{item.title}</h3>
                          <p dangerouslySetInnerHTML={{
                __html: item.description
              }} />
                        </div>;
          })}
                  </div>}


              {item.type === 'skills' && <div>
                    {item.data.map(function (skill) {
            return <div key={skill.title}>
                          <h3>{skill.title}</h3>
                          <p dangerouslySetInnerHTML={{
                __html: skill.description
              }} />
                        </div>;
          })}
                  </div>}



              {item.type === 'empolyment' && <div>
                    {item.data.map(function (job) {
            return <div key={job.title}>
                          <h3>{job.title}</h3>
                          <p>{job.subTitle}</p>
                          <p>{job.city}</p>
                          <p dangerouslySetInnerHTML={{
                __html: job.description
              }} />
                          <p>{job.startDate} - {job.endDate}</p>
                        </div>;
          })}
                  </div>}

              {item.type === 'education' && <div>
                    {item.data.map(function (job) {
            return <div key={job.title}>
                          <h3>{job.title}</h3>
                          <p>{job.subTitle}</p>
                          <p>{job.city}</p>
                          <p dangerouslySetInnerHTML={{
                __html: job.description
              }} />
                          <p>{job.startDate} - {job.endDate}</p>
                        </div>;
          })}
                  </div>}
            </div>;
    })}

        {/* 链接 */}

        {linksArray.map(function (link, index) {
      return <li key={index}>
              <a href={link.src} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>;
    })}

      </div>;
};