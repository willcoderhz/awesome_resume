"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reducers = _interopRequireDefault(require("./reducers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// store.ts

// 假设你将在后面创建这个 reducer
// 引入之前定义的类型

// 创建 store
var store = (0, _toolkit.configureStore)({
  reducer: _reducers["default"]
});
var _default = exports["default"] = store;