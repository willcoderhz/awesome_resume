"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PreviewHeader = function PreviewHeader() {
  return <div className="bg-gray-100 p-1 flex justify-center">
      <div className="flex space-x-6">
        <_antd.Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">预览</_antd.Button>
        <_antd.Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">例子</_antd.Button>
        <_antd.Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">指南</_antd.Button>
      </div>
    </div>;
};
var _default = exports["default"] = PreviewHeader;