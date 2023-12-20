"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titles = exports.ResumeModel_C = exports.DeveloperModel = void 0;
var _react = _interopRequireDefault(require("react"));
var _mobx = require("mobx");
var _poster = _interopRequireDefault(require("./assets/poster.jpeg"));
var _form = require("../../../src/components/build/LeftSidebar/form.tsx");
var _AbstractTemplate2 = require("../AbstractTemplate.tsx");
var _style = require("../Cmode/titles/style1");
var _style2 = require("../Cmode/titles/style2");
var _style3 = require("../Cmode/titles/style3");
var _style4 = require("../Cmode/titles/style4");
var _style5 = require("../Cmode/titles/style5");
var _style6 = require("../Cmode/titles/style6");
var _style7 = require("../Cmode/titles/style7");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var View = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./view'));
  });
});
var ConfigForm = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./configForm'));
  });
});
var titles = exports.titles = [{
  name: 'style1',
  component: _style.TitleStyle1
}, {
  name: 'style2',
  component: _style2.TitleStyle2
}, {
  name: 'style3',
  component: _style3.TitleStyle3
}, {
  name: 'style4',
  component: _style4.TitleStyle4
}, {
  name: 'style5',
  component: _style5.TitleStyle5
}, {
  name: 'style6',
  component: _style6.TitleStyle6
}, {
  name: 'style7',
  component: _style7.TitleStyle7
}];
var DEFAULT_CONFIG = {
  modules: [{
    key: 'introduce',
    name: '简介',
    visible: true
  }, {
    key: 'workingHistory',
    name: '工作经历',
    visible: true
  }, {
    key: 'ownerProjects',
    name: '个人项目',
    visible: true
  }, {
    key: 'aboutMe',
    name: '关于我',
    visible: true
  }],
  githubVisible: true,
  primaryColor: '#002FA7',
  titleStyle: titles[0].name
};
var DEFAULT_DATA = {
  name: '小明',
  gender: '男',
  age: '25岁',
  city: '深圳',
  phoneNumber: '18888888888',
  email: '1162275271@qq.com',
  education: {
    schoolName: '霍格沃兹',
    graduationTime: '2022',
    major: '黑魔法防御系'
  },
  target: '前端 & NodeJS',
  introduce: "\u72EC\u7ACB\u4F7F\u7528 React/Vue \u5F00\u53D1\u8FC7\u5404\u7AEF\u4EA7\u54C1\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1AWeb \u5E94\u7528\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001Electron \u684C\u9762\u5E94\u7528\u3001React Native \u7B49\u3002\n\u7528 Java/Kotlin(SpringBoot\u3001MyBatis) \u5199\u8FC7\u540E\u7AEF\uFF0C\u73B0\u5728\u66F4\u719F\u6089 Node.js(nest/egg/koa)\u3002\n\u7528 Java/Kotlin \u548C Flutter \u5199\u8FC7\u5B89\u5353\u3002\n\u72EC\u7ACB\u5F00\u53D1\u8005\uFF1A\u4ECE\u96F6\u5230\u4E00\u4E0A\u7EBF\u8FC7\u591A\u6B3E\u4E2A\u4EBA\u4EA7\u54C1\uFF0C\u6709\u7F51\u9875\u3001\u5B89\u5353APP\u3001\u516C\u4F17\u53F7\u5E94\u7528\uFF0C\u5C0F\u7A0B\u5E8F\u7B49\u3002",
  projects: [{
    title: 'tarojs-router-next - Taro 路由库（★160+）',
    content: 'Taro 小程序路由库/自动生成带参数类型提示的路由方法/允许传递任意类型、任意大小的参数数据/同步的路由方法调用/ koa 体验一致的路由中间件。收录在 Taro 官方推荐物料中，正在为仓鼠星球的小程序端路由提供服务，运行稳定。'
  }, {
    title: 'open-resume - 在线简历系统',
    content: '纯前端在线简历编辑生成工具、支持导入导出配置、生成 PDF 和图片'
  }],
  github: 'github.com/lblblong',
  workingHistory: [{
    title: '神奇动物管理控制司 - 前端开发工程师',
    content: "\u2022 \u5168\u7403\u795E\u5947\u52A8\u7269\u5927\u6570\u636E\u7CFB\u7EDF\n\u8D1F\u8D23\u8BE5\u9879\u76EE\u7F51\u7AD9\u53CA\u79FB\u52A8\u7AEF\u5F00\u53D1\uFF0C\u8BE5\u9879\u76EE\u4E3B\u8981\u4F7F\u7528 React + Mobx\uFF0C\u6211\u72EC\u7ACB\u8D1F\u8D23\u4E86\u8BE5\u9879\u76EE\u7684\u795E\u5947\u52A8\u7269\u641C\u7D22\u548C\u5F55\u5165\u4FE1\u606F\u6A21\u5757\uFF0C\u5728\u9879\u76EE\u4E0A\u7EBF\u540E\u8FD0\u884C\u826F\u597D\uFF0C\u671F\u95F4\u9664\u4E86\u4E00\u4E9B\u517C\u5BB9\u6027\u95EE\u9898\u6CA1\u6709\u51FA\u73B0\u8FC7\u4EFB\u4F55\u4EE3\u7801\u903B\u8F91\u4E0A\u7684 BUG\u3002\n\u2022 \u5176\u4ED6\u5DE5\u4F5C\n\u8D1F\u8D23\u53F8\u5185\u90E8\u5206\u6570\u636E\u4E2D\u53F0\u7684\u5F00\u53D1\u548C\u8FD0\u7EF4\u3001\u795E\u5947\u52A8\u7269\u63A8\u5E7F\u843D\u5730\u9875\u7684\u7F16\u5199\u3001\u5176\u4ED6\u524D\u7AEF\u5DE5\u4F5C\u3002",
    startTime: '2016.12',
    endTime: '2022.09'
  }, {
    title: '预言家日报 - NodeJS',
    content: "\u2022 \u300A\u9884\u8A00\u5BB6\u65E5\u62A5\u300B\n\u8D1F\u8D23\u8BE5\u9879\u76EE\u540E\u7AEF\u7684\u5F00\u53D1\uFF0C\u4F17\u6240\u5468\u77E5\u8BE5\u62A5\u7EB8\u7684\u7279\u8272\u662F\u52A8\u6001\u7684\u9875\u9762\uFF0C\u5176\u5B9E\u73B0\u539F\u7406\u662F\u901A\u8FC7\u9B54\u6CD5\u5728\u62A5\u7EB8\u4E2D\u5D4C\u5165\u4E86\u4E00\u4E2A webview\u3002\u6211\u5728\u8BE5\u9879\u76EE\u4E2D\u8D1F\u8D23\u62A5\u7EB8\u5BA2\u6237\u7AEF\u76F8\u5173\u63A5\u53E3\u7684\u5F00\u53D1\u3002",
    startTime: '2016.12',
    endTime: '2022.09'
  }],
  aboutMe: "\u559C\u6B22\u5237\u5267\u770B\u7535\u5F71\u3001\u73A9\u6E38\u620F\uFF0C\u7A7A\u4F59\u65F6\u95F4\u505A\u505A\u5F00\u6E90\u548C\u4E00\u4E9B\u5C0F\u4E1C\u897F\uFF0C\u559C\u6B22\u5404\u79CD\u63D0\u5347\u751F\u4EA7\u6548\u7387\u7684\u4E1C\u897F\u3002"
};
var DeveloperModel = exports.DeveloperModel = {
  defaultData: DEFAULT_DATA,
  form: _form.DataForm
};
var ResumeModel_C = exports.ResumeModel_C = /*#__PURE__*/function (_AbstractTemplate) {
  _inherits(ResumeModel_C, _AbstractTemplate);
  var _super = _createSuper(ResumeModel_C);
  function ResumeModel_C() {
    var _this;
    _classCallCheck(this, ResumeModel_C);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "key", 'developer-concise-2');
    _defineProperty(_assertThisInitialized(_this), "name", '程序员简洁风简历');
    _defineProperty(_assertThisInitialized(_this), "tags", ['简洁', '程序员']);
    _defineProperty(_assertThisInitialized(_this), "view", View);
    _defineProperty(_assertThisInitialized(_this), "configForm", ConfigForm);
    _defineProperty(_assertThisInitialized(_this), "dataForm", DeveloperModel.form);
    _defineProperty(_assertThisInitialized(_this), "poster", _poster["default"]);
    _defineProperty(_assertThisInitialized(_this), "defaultData", DeveloperModel.defaultData);
    _defineProperty(_assertThisInitialized(_this), "defaultConfig", DEFAULT_CONFIG);
    _defineProperty(_assertThisInitialized(_this), "moveModule", function (index, targetIndex) {
      if (targetIndex < 0) return;
      var temp = _this.config.modules[targetIndex];
      _this.config.modules[targetIndex] = _this.config.modules[index];
      _this.config.modules[index] = temp;
    });
    (0, _mobx.makeObservable)(_assertThisInitialized(_this), {
      titleComponent: _mobx.computed
    });
    return _this;
  }
  _createClass(ResumeModel_C, [{
    key: "titleComponent",
    get: function get() {
      var _this2 = this;
      return titles.find(function (it) {
        return it.name === _this2.defaultConfig.titleStyle;
      }).component;
    }
  }]);
  return ResumeModel_C;
}(_AbstractTemplate2.AbstractTemplate);