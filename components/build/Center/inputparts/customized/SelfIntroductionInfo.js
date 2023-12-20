"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactQuill = _interopRequireDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelfIntroduction = function SelfIntroduction(_ref) {
  var handleInputChange = _ref.handleInputChange,
    handleDelete = _ref.handleDelete;
  return <div id="selfIntroduction" className="bg-gray-50 p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <_antd.Typography.Title level={3} className="ml-1">自我介绍</_antd.Typography.Title>
        <div onClick={handleDelete} className="hover:text-red-500 cursor-pointer">
          <_icons.DeleteOutlined />
          <span>删除</span>
        </div>
      </div>
      <_reactQuill.default name="introduction" placeholder="例如：我是一名前端开发者，有3年的工作经验,能够熟练掌握React及Node.js..." onChange={handleInputChange} className='border rounded p-0 w-full h-40 mb-10' />
    </div>;
};
var _default = exports["default"] = SelfIntroduction;