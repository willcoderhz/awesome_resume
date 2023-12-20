"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactRedux = require("react-redux");
var _html2canvas = _interopRequireDefault(require("html2canvas"));
var _jspdf = _interopRequireDefault(require("jspdf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Title = _antd.Typography.Title,
  Paragraph = _antd.Typography.Paragraph,
  Text = _antd.Typography.Text;
var ResumeModel_A = function ResumeModel_A(_ref) {
  var userInfo = _ref.userInfo;
  var basicInfo = (0, _reactRedux.useSelector)(function (state) {
    return state.basicInfo;
  });
  var workExperiences = (0, _reactRedux.useSelector)(function (state) {
    return state.workExperiences;
  });
  var links = (0, _reactRedux.useSelector)(function (state) {
    return state.links;
  });
  var skills = (0, _reactRedux.useSelector)(function (state) {
    return state.skills;
  });
  var personalProjects = (0, _reactRedux.useSelector)(function (state) {
    return state.personalProjects;
  });
  var educations = (0, _reactRedux.useSelector)(function (state) {
    return state.educations;
  });
  var exportPDF = function exportPDF() {
    var resumeElement = document.getElementById('resume');

    // 增加画布的缩放比例以提高清晰度
    var scale = 1.1; // 你可以调整这个值来提高清晰度

    // 获取元素的尺寸并计算缩放后的尺寸
    var width = resumeElement.offsetWidth;
    var height = resumeElement.offsetHeight;
    var scaledWidth = width * scale;
    var scaledHeight = height * scale;

    // 设置html2canvas的配置
    var canvasOptions = {
      scale: scale,
      width: scaledWidth,
      height: scaledHeight,
      useCORS: true // 如果有跨域图片的问题，可以尝试打开这个选项
    };
    (0, _html2canvas["default"])(resumeElement, canvasOptions).then(function (canvas) {
      var imgData = canvas.toDataURL('image/png');
      var pdf = new _jspdf["default"]({
        orientation: 'portrait',
        unit: 'px',
        format: [scaledWidth, scaledHeight]
      });
      pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
      pdf.save("resume.pdf");
    });
  };
  (0, _react.useEffect)(function () {
    // 设置一个定时器，60秒后执行
    var timer = setTimeout(function () {
      // 聚合所有状态并打印
      var allState = {
        basicInfo: basicInfo,
        workExperiences: workExperiences,
        links: links,
        skills: skills,
        personalProjects: personalProjects,
        educations: educations
      };
      console.log('All State after 60 seconds:', allState);
    }, 10000); // 60000 毫秒 = 60 秒

    // 清除定时器的清理函数
    return function () {
      return clearTimeout(timer);
    };
  }, [basicInfo, workExperiences, links, skills, personalProjects, educations]);
  return <div>
          <div id="resume">
            

            <div className="bg-white p-5 relative"> {/* Removed flex classes here */}
  {/* Centered section for personal info in three rows */}
  <div className="flex flex-col justify-center items-center space-y-2 h-full">
    {/* First row */}
    <div className="flex items-center space-x-2">
    <div className=" text-black font-bold text-4xl rounded-lg py-4 flex items-center">
        {basicInfo.name}
      </div>
      <div className=" text-black  text-xl rounded-lg p-1 flex items-center">
     {basicInfo.position}
      </div>
      
    </div>
    {/* Second row */}
    <div className="flex items-center space-x-2">
    <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <_icons.PhoneOutlined className="mr-2" />{basicInfo.phone}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <_icons.CalendarOutlined className="mr-2" />{basicInfo.age}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <_icons.EnvironmentOutlined className="mr-2" />{basicInfo.city}
      </div>
    </div>
    {/* Third row */}
    <div className="flex items-center space-x-2">
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <_icons.MailOutlined className="mr-2" />{basicInfo.email}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <_icons.WechatOutlined className="mr-2" />{basicInfo.wechat}
      </div>
    </div>
  </div>

  {/* Absolute positioned right bottom section for the profile image */}
  {basicInfo.photo && <div className="absolute right-10 bottom-5">
      <img src={basicInfo.photo} alt="Profile" className=" h-40 object-cover  rounded-lg  border-gray-300" />
    </div>}
      </div>



       

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">教育背景</Title>
            {educations && educations.map(function (education, index) {
        return <div key={index} className="mb-8">
                  <div className="flex justify-between items-center px-5">
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {education.school} &nbsp;| &nbsp;{education.major} &nbsp;| &nbsp;{education.degree}
                    </Text>
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {education.dateRange && education.dateRange.length >= 2 ? "".concat(education.dateRange[0].format('YYYY-MM-DD'), " \u81F3 ").concat(education.dateRange[1].format('YYYY-MM-DD')) : ""}
                    </Text>
                  </div>

                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{
            __html: education.description
          }} />


                </div>;
      })}

            <_antd.Divider className="my-5" />

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">工作经历</Title>
            {workExperiences && workExperiences.map(function (work, index) {
        return <div key={index} className="mb-8">
          <div className="flex justify-between items-center px-5">
            <Text className="text-lg mb-2 font-semibold text-gray-800">
              {work.companyName} &nbsp;| &nbsp;{work.jobTitle} &nbsp;| &nbsp;{work.city}
            </Text>
            <Text className="text-lg mb-2 font-semibold text-gray-800">
              {work.dateRange && work.dateRange.length >= 2 ? "".concat(work.dateRange[0].format('YYYY-MM-DD'), " \u81F3 ").concat(work.dateRange[1].format('YYYY-MM-DD')) : ""}
            </Text>
          </div>

          <div className="text-base text-gray-700" dangerouslySetInnerHTML={{
            __html: work.description
          }} />

        </div>;
      })}

            <_antd.Divider className="my-5" />

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">项目经验</Title>
            {personalProjects && personalProjects.map(function (project, index) {
        return <div key={index} className="mb-8">
                  <div className="flex justify-between px-5 items-center">
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {project.projectName}
                    </Text>
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {project.dateRange && project.dateRange.length >= 2 ? "".concat(project.dateRange[0].format('YYYY-MM-DD'), " \u81F3 ").concat(project.dateRange[1].format('YYYY-MM-DD')) : ""}
                    </Text>
                  </div>
 
                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{
            __html: project.description
          }} />
                </div>;
      })}

            <_antd.Divider className="my-5" />

            

            

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">专业技能</Title>
            {skills && skills.map(function (skill, index) {
        return <div key={index} className="mb-8">
                  <div className="flex justify-between px-5">
                  <Text className="text-lg mb-2 font-semibold text-gray-800">
                    {skill.skillName}
                  </Text>
                  <Text className="text-lg mb-2 font-semibold text-gray-800">
                    {skill.dateRange && skill.dateRange.length >= 2 ? "".concat(skill.dateRange[0].format('YYYY-MM-DD'), " \u81F3 ").concat(skill.dateRange[1].format('YYYY-MM-DD')) : ""}
                  </Text>
                </div>
                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{
            __html: skill.description
          }} />
                </div>;
      })}

            <_antd.Divider className="my-5" />
            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">相关链接</Title>
            {links && links.map(function (link, index) {
        return <div key={index} className="mb-8 px-5">
                  <Text className="text-lg block mb-0 font-semibold text-gray-800">{link.name} &nbsp;| &nbsp;{link.url} &nbsp; </Text> 
                 
                </div>;
      })}
              </div>
              <button onClick={exportPDF} style={{
      margin: '20px',
      padding: '10px'
    }}>
                导出为PDF
            </button>
        </div>;
};
var _default = exports["default"] = ResumeModel_A;