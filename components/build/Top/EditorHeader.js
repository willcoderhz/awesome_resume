"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EditorHeader = function EditorHeader() {
  return <div className="bg-gray-200 p-4 flex justify-between items-center border-b border-gray-300">
      <div>
        {/* Account Button */}
        <_antd.Button className="mr-4 border-gray-500 text-gray-500 hover:bg-gray-300">账号</_antd.Button>
      </div>
      <div>
        {/* Other buttons like "返回" */}
        <_antd.Button className="ml-4 border-gray-500 text-gray-500 hover:bg-gray-300">返回</_antd.Button>
      </div>
    </div>;
};
var _default = exports["default"] = EditorHeader;