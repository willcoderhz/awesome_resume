"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _core = require("@dnd-kit/core");
var _modifiers = require("@dnd-kit/modifiers");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _reactQuill = _interopRequireDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
var _zh_CN = _interopRequireDefault(require("antd/es/date-picker/locale/zh_CN"));
var _reactRedux = require("react-redux");
var _actions = require("../../../../store/actions");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var EducationInfo = function EducationInfo() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var _Form$useForm = _antd.Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _useState = (0, _react.useState)([{
      key: '1',
      school: '浙江大学',
      major: '计算机科学与技术',
      description: '全年级第一名，获得校级奖学金，获得校级优秀学生干部，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文',
      isEditing: false,
      dateRange: null,
      degree: '本科'
    }
    // More data can be added here
    ]),
    _useState2 = _slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  (0, _react.useEffect)(function () {
    // Dispatch initial data to the store
    dataSource.forEach(function (data) {
      dispatch((0, _actions.addEducation)(data));
    });
  }, []);
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    editingKey = _useState4[0],
    setEditingKey = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    expandedRowKeys = _useState6[0],
    setExpandedRowKeys = _useState6[1];
  var onExpand = function onExpand(expanded, record) {
    if (expanded) {
      setExpandedRowKeys(function (prevKeys) {
        return [].concat(_toConsumableArray(prevKeys), [record.key]);
      });
    } else {
      setExpandedRowKeys(function (prevKeys) {
        return prevKeys.filter(function (key) {
          return key !== record.key;
        });
      });
    }
  };
  var isEditing = function isEditing(record) {
    return record.key === editingKey;
  };
  var edit = function edit(record) {
    // 设置展开的行
    setExpandedRowKeys([record.key]);
    // 设置表单字段的值
    form.setFieldsValue(_objectSpread({}, record));
    // 设置当前正在编辑的行的key
    setEditingKey(record.key);
    // 设置 record.expand 为 true
    var newData = _toConsumableArray(dataSource);
    var index = newData.findIndex(function (item) {
      return record.key === item.key;
    });
    if (index > -1) {
      var item = newData[index];
      newData.splice(index, 1, _objectSpread(_objectSpread({}, item), {}, {
        expand: true
      }));
      setDataSource(newData);
    }
  };
  var cancel = function cancel() {
    setEditingKey('');
  };
  var save = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(key, values) {
      var newData, index, item;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            newData = _toConsumableArray(dataSource);
            index = newData.findIndex(function (item) {
              return key === item.key;
            });
            if (index > -1) {
              item = newData[index];
              newData.splice(index, 1, _objectSpread(_objectSpread(_objectSpread({}, item), values), {}, {
                isEditing: false,
                expand: false
              })); // 直接修改对应行的 expand 属性
              setDataSource(newData);
              setEditingKey('');
              dispatch((0, _actions.updateEducation)(_objectSpread(_objectSpread({}, item), values)));
            }
            ;
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function save(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleDelete = function handleDelete(key) {
    setDataSource(dataSource.filter(function (item) {
      return item.key !== key;
    }));
    dispatch((0, _actions.deleteEducation)(key));
  };
  var handleAdd = function handleAdd() {
    var newKey = (Math.max.apply(Math, _toConsumableArray(dataSource.map(function (d) {
      return parseInt(d.key);
    })).concat([0])) + 1).toString();
    var newData = {
      key: newKey,
      school: '',
      major: '',
      description: '',
      degree: '',
      // 新增
      dateRange: null,
      // 新增
      isEditing: true,
      expand: true // 设置新行的 expand 属性为 true
    };
    setDataSource([].concat(_toConsumableArray(dataSource), [newData]));
    setEditingKey(newKey);
    setExpandedRowKeys(function (prevKeys) {
      return [].concat(_toConsumableArray(prevKeys), [newKey]);
    }); // 将新行的 key 添加到 expandedRowKeys 中
    dispatch((0, _actions.addEducation)(newData));
  };
  var columns = [
  // This column is for drag handle
  {
    title: '教育经历',
    key: 'sort',
    render: function render() {
      return <span className="drag-handle"><_icons.MenuOutlined /></span>;
    },
    className: 'drag-visible',
    width: 150
  }, {
    title: '',
    dataIndex: 'school',
    editable: true,
    render: function render(text, record) {
      return text;
    }
  }, {
    title: '',
    dataIndex: 'major',
    editable: false,
    render: function render(text, record) {
      return text;
    }
  }, {
    title: '',
    dataIndex: 'operation',
    render: function render(_, record) {
      var editable = isEditing(record);
      return editable ? <div className="flex justify-end space-x-2">
            <a onClick={/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var values;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return form.validateFields();
              case 3:
                values = _context2.sent;
                _context2.next = 6;
                return save(record.key, values);
              case 6:
                _context2.next = 11;
                break;
              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log('Validate Failed:', _context2.t0);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 8]]);
        }))}>
              <_icons.SaveOutlined />
            </a>
            <a onClick={cancel}>
              <_icons.DeleteOutlined />
            </a>
          </div> : <div className="flex justify-end space-x-2">
            <a disabled={editingKey !== ''} onClick={function () {
          return edit(record);
        }}>
              <_icons.EditOutlined />
            </a>
            <a onClick={function () {
          return handleDelete(record.key);
        }}>
              <_icons.DeleteOutlined />
            </a>
          </div>;
    }
  }];

  // Custom Row component to handle drag-n-drop
  var Row = function Row(_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded);
    var _useSortable = (0, _sortable.useSortable)({
        id: props['data-row-key']
      }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition,
      isDragging = _useSortable.isDragging;
    var style2 = _objectSpread(_objectSpread(_objectSpread({
      color: '#000',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '2px dashed blue',
      margin: '1rem 2rem',
      width: '100%',
      overflow: 'auto',
      height: '100%',
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#fff',
      justifyContent: 'space-between'
    }, props.style), {}, {
      transform: _utilities.CSS.Transform.toString(transform ? _objectSpread(_objectSpread({}, transform), {}, {
        scaleY: 1
      }) : undefined),
      transition: transition
    }, isDragging ? {
      zIndex: 9999
    } : {}), isDragging ? {
      position: 'relative'
    } : {});
    var style = _objectSpread(_objectSpread({
      transform: _utilities.CSS.Transform.toString(transform),
      transition: transition
    }, isDragging ? {
      zIndex: 9999
    } : {}), {}, {
      opacity: isDragging ? 0.5 : 1
    });
    return <tr {...props} ref={setNodeRef} style={style2} {...attributes}>
        {_react["default"].Children.map(children, function (child) {
        if (_react["default"].isValidElement(child) && child.key === 'sort') {
          return _react["default"].cloneElement(child, {
            children: <_icons.MenuOutlined ref={setNodeRef} style={{
              cursor: 'grab'
            }} {...listeners} />
          });
        }
        return child;
      })}
      </tr>;
  };
  var onDragEnd = function onDragEnd(_ref4) {
    var active = _ref4.active,
      over = _ref4.over;
    if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      setDataSource(function (previous) {
        var activeIndex = previous.findIndex(function (item) {
          return item.key === active.id;
        });
        var overIndex = previous.findIndex(function (item) {
          return item.key === (over === null || over === void 0 ? void 0 : over.id);
        });

        // 计算新的排序后的数据
        var newOrder = (0, _sortable.arrayMove)(previous, activeIndex, overIndex);

        // 使用 dispatch 方法发送 reorderEducations action 更新 Redux store
        dispatch((0, _actions.reorderEducations)(newOrder));
        return newOrder;
      });
    }
  };
  return <>
    <h1 className="text-left text-xl font-bold mb-4 pl-3">教育经历</h1>
    <_antd.Form form={form} component={false}>
      <_core.DndContext modifiers={[_modifiers.restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <_sortable.SortableContext items={dataSource.map(function (item) {
          return item.key;
        })} strategy={_sortable.verticalListSortingStrategy}>
          <_antd.Table className="my-table border-b-0 space-y-0" components={{
            body: {
              row: Row
              // 如果有其他自定义组件，也应该在这里添加
            }
          }} rowKey="key" columns={columns} dataSource={dataSource} pagination={false} showHeader={false} // 不显示标题行
          expandable={{
            expandedRowKeys: expandedRowKeys,
            onExpand: onExpand,
            expandIcon: function expandIcon() {
              return null;
            },
            onExpandedRowsChange: function onExpandedRowsChange() {
              setExpandedRowKeys([]);
            },
            expandedRowRender: function expandedRowRender(record) {
              return record.expand && <_antd.Form layout="vertical" form={form} className="expanded-row" initialValues={{
                school: record.school,
                major: record.major,
                description: record.description,
                degree: record.degree,
                // 新增
                dateRange: record.dateRange // 新增
              }}>
    <div className="flex flex-wrap -mx-3">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <_antd.Form.Item name="school" label="学校名称">
      <_antd.Input className="w-full" />
    </_antd.Form.Item>
  </div>
  <div className="w-full md:w-1/2 px-3">
    <_antd.Form.Item name="major" label="所学专业">
      <_antd.Input className="w-full" />
    </_antd.Form.Item>
  </div>
                </div>

                <div className="flex flex-wrap -mx-3">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <_antd.Form.Item name="degree" label="最高学历">
      <_antd.Input className="w-full" />
    </_antd.Form.Item>
  </div>
  <div className="w-full md:w-1/2 px-3">
  <_antd.Form.Item name="dateRange" label="开始&结束时间">
  <_antd.DatePicker.RangePicker className="w-full" locale={_zh_CN["default"]} />
                    </_antd.Form.Item>
  </div>
                </div>

                <_antd.Form.Item name="description" label="描述">
  <_reactQuill.default theme="snow" className="h-32" />
                </_antd.Form.Item>
    <_antd.Form.Item>
      <_antd.Button type="primary" onClick={/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                    var values;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return form.validateFields();
                        case 3:
                          values = _context3.sent;
                          _context3.next = 6;
                          return save(record.key, values);
                        case 6:
                          _context3.next = 11;
                          break;
                        case 8:
                          _context3.prev = 8;
                          _context3.t0 = _context3["catch"](0);
                          console.log('Validate Failed:', _context3.t0);
                        case 11:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3, null, [[0, 8]]);
                  }))} className="ant-btn bg-gray-500 text-white mt-10">
        Save
      </_antd.Button>
    </_antd.Form.Item>
  </_antd.Form>;
            }
          }} />
        </_sortable.SortableContext>
      </_core.DndContext>
      <_antd.Button type="primary" className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10" // 使用 Tailwind 的类替换内联样式
      onClick={handleAdd}>
  <span className="inline-flex items-center"> {/* 使用 flex 布局来对齐图标和文本 */}
    <_icons.PlusOutlined className="mr-2" /> {/* 可以调整这个 margin 来控制图标和文本之间的距离 */}
    添加教育经历
  </span>
      </_antd.Button>
    </_antd.Form>
    </>;
};
var _default = exports["default"] = EducationInfo;