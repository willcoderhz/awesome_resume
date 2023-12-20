"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateProvider = exports.BaseTemplate = void 0;
exports.useTemplate = useTemplate;
var _mobx = require("mobx");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TemplateContext = _react["default"].createContext(undefined);

//这段代码定义了一个名为useTemplate的React Hook，
// 它用于从React上下文中获取数据。该函数使用React.useContext方法获取上下文对象，并将其类型断言为T类型
function useTemplate() {
  return _react["default"].useContext(TemplateContext);
}
var TemplateProvider = exports.TemplateProvider = function TemplateProvider(_ref) {
  var value = _ref.value,
    children = _ref.children;
  return <TemplateContext.Provider value={value}>{children}</TemplateContext.Provider>;
};
var BaseTemplate = exports.BaseTemplate = /*#__PURE__*/function () {
  function BaseTemplate() {
    _classCallCheck(this, BaseTemplate);
    _defineProperty(this, "config", undefined);
    _defineProperty(this, "data", undefined);
    (0, _mobx.makeObservable)(this, {
      data: _mobx.observable,
      config: _mobx.observable
    });
  }
  _createClass(BaseTemplate, [{
    key: "exportConfig",
    value: function exportConfig() {
      return (0, _mobx.toJS)(this.config);
    }
  }, {
    key: "exportData",
    value: function exportData() {
      return (0, _mobx.toJS)(this.data);
    }
  }, {
    key: "importData",
    value: function importData(data) {
      if (data) {
        this.data = data;
      } else {
        this.data = (0, _mobx.toJS)(this.defaultData);
      }
    }
  }, {
    key: "importConfig",
    value: function importConfig(config) {
      if (config) {
        this.config = config;
      } else {
        this.config = (0, _mobx.toJS)(this.defaultConfig);
      }
    }
  }]);
  return BaseTemplate;
}();