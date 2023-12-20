"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TemplateProvider", {
  enumerable: true,
  get: function get() {
    return _template.TemplateProvider;
  }
});
exports.templates = void 0;
Object.defineProperty(exports, "useTemplate", {
  enumerable: true,
  get: function get() {
    return _template.useTemplate;
  }
});
var _Cmode = require("../templates/Cmode/");
var _Dmode = require("../templates/Dmode/");
var _template = require("./template");
var templates = exports.templates = [new _Cmode.ResumeModel_C(), new _Dmode.ResumeModel_D()];