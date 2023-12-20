"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Store = void 0;
var _mobx = require("mobx");
var _templates = require("../../templates");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Store = exports.Store = /*#__PURE__*/function () {
  function Store(key) {
    _classCallCheck(this, Store);
    _defineProperty(this, "grayPreview", false);
    _defineProperty(this, "currentForm", 'data');
    this.template = _templates.templates.find(function (tmp) {
      return tmp.key === key;
    });
    var state = window.localStorage.getItem(key); // todo 这块写的可能有问题

    this.template.importConfig(state === null || state === void 0 ? void 0 : state.config);
    this.template.importData(state === null || state === void 0 ? void 0 : state.data);
    if (!state) {
      alert('已自动填充初始信息');
    }
    (0, _mobx.makeAutoObservable)(this, {
      template: false
    });
  }
  _createClass(Store, [{
    key: "availableTemplates",
    get: function get() {
      var _this = this;
      return _templates.templates.filter(function (t) {
        return t.dataForm === _this.template.dataForm && t.key !== _this.template.key;
      });
    }
  }]);
  return Store;
}();