"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ResumeModel_B = function ResumeModel_B(_ref) {
  var userInfo = _ref.userInfo;
  return <div className="fixed top-0 right-0 h-full w-45 bg-blue-50 p-8 overflow-y-auto shadow-md border-l-2 border-blue-200">
            <h1 className="text-4xl font-semibold mb-4 text-blue-800 underline">{userInfo.name}</h1>

            <div className="mb-8 flex flex-wrap space-x-2 text-blue-600">
                <p><i className="fas fa-phone-alt"></i> {userInfo.phone}</p>
                <p><i className="fas fa-envelope"></i> {userInfo.email}</p>
                <p><i className="fas fa-user"></i> {userInfo.sex}</p>
                <p><i className="fas fa-map-marker-alt"></i> {userInfo.city}</p>
                <p><i className="fas fa-birthday-cake"></i> {userInfo.age}</p>
            </div>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-b border-blue-300">自我介绍</h2>
                <p className="text-blue-600">{userInfo.introduction}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-b border-blue-300">教育背景</h2>
                {userInfo.educations && userInfo.educations.map(function (education, index) {
        return <p key={index} className="text-blue-600 mb-2">
                        {education.school}&nbsp;•&nbsp;
                        {education.major}&nbsp;•&nbsp;
                        {education.degree}&nbsp;•&nbsp;
                        {education.graduationDate}
                    </p>;
      })}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-b border-blue-300">工作经历</h2>
                {userInfo.workExperiences && userInfo.workExperiences.map(function (work, index) {
        return <div key={index} className="mb-4">
                        <p className="font-medium text-blue-800 mb-1">{work.companyName}&nbsp;•&nbsp;{work.title}&nbsp;•&nbsp;{work.workTime}</p>
                        <p className="text-blue-600">{work.workExperience}</p>
                    </div>;
      })}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-b border-blue-300">项目经验</h2>
                {userInfo.projects && userInfo.projects.map(function (project, index) {
        return <div key={index} className="mb-4">
                        <p className="font-medium text-blue-800 mb-1">{project.projectName}&nbsp;•&nbsp;{project.projectTime}</p>
                        <p className="text-blue-600">{project.projectDescription}</p>
                    </div>;
      })}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-b border-blue-300">相关链接</h2>
                {userInfo.links && userInfo.links.map(function (link, index) {
        return <p key={index} className="text-blue-600 hover:text-blue-800 transition">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                    </p>;
      })}
            </section>
        </div>;
};
var _default = exports["default"] = ResumeModel_B;