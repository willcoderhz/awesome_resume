"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactRedux = require("react-redux");
var _actions = require("../../../../store/actions");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MonthPicker = _antd.DatePicker.MonthPicker;
var BasicInfo = function BasicInfo() {
  var _useState = (0, _react.useState)({
      position: '',
      name: '',
      phone: '',
      age: '',
      city: '',
      photo: '',
      email: '',
      wechat: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    basicInfo = _useState2[0],
    setBasicInfo = _useState2[1];
  var _React$useState = _react["default"].useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    imageUrl = _React$useState2[0],
    setImageUrl = _React$useState2[1];
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _actions.addBasicInfo)(basicInfo));
  }, [dispatch]);
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var updatedInfo = _objectSpread(_objectSpread({}, basicInfo), {}, _defineProperty({}, name, value));
    setBasicInfo(updatedInfo);
    dispatch((0, _actions.updateBasicInfo)(updatedInfo));
  };
  var handleFileChange = function handleFileChange(_ref) {
    var file = _ref.file;
    var reader = new FileReader();
    reader.onload = function (e) {
      var base64String = e.target.result;
      console.log(base64String); // 确认转换后的Base64字符串
      var updatedInfo = _objectSpread(_objectSpread({}, basicInfo), {}, {
        photo: base64String
      });
      setBasicInfo(updatedInfo);
      dispatch((0, _actions.updateBasicInfo)(updatedInfo));
    };

    // 直接使用 file 对象，而不是 file.originFileObj
    if (file instanceof Blob) {
      reader.readAsDataURL(file);
    } else {
      console.error('The file is not a Blob object:', file);
    }
  };
  var handleDateChange = function handleDateChange(date, dateString) {
    var updatedInfo = _objectSpread(_objectSpread({}, basicInfo), {}, {
      age: dateString
    });
    setBasicInfo(updatedInfo);
    dispatch((0, _actions.updateBasicInfo)(updatedInfo));
  };
  return <div className="bg-gray-0 p-4 ml-0 w-full" id="basicInfo">
            <_antd.Typography.Title level={3} className="mb-4">基本信息</_antd.Typography.Title>
            <_antd.Form layout="horizontal">
                <_antd.Row gutter={24}>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="求职职位" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="position" />
                        </_antd.Form.Item>
                    </_antd.Col>
                    <_antd.Col span={12}>
                    <_antd.Form.Item label="照片位置" colon={false}>
                            <_antd.Upload name="logo" listType="picture" beforeUpload={function () {
              return false;
            }} // 防止自动上传
            onChange={handleFileChange}>
                                <_antd.Button icon={<_icons.UploadOutlined />}>点击上传</_antd.Button>
                            </_antd.Upload>
                        </_antd.Form.Item>
                    </_antd.Col>
                </_antd.Row>
                <_antd.Row gutter={24}>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="姓名 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="name" />
                        </_antd.Form.Item>
                    </_antd.Col>

                    <_antd.Col span={12}>
                        <_antd.Form.Item label="工作地方" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="city" />
                        </_antd.Form.Item>
                    </_antd.Col>
                </_antd.Row>
                <_antd.Row gutter={24}>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="联系电话" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="phone" />
                        </_antd.Form.Item>
                    </_antd.Col>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="电子邮箱" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="email" />
                        </_antd.Form.Item>
                    </_antd.Col>

                </_antd.Row>
                <_antd.Row gutter={24}>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="出生年月" colon={false}>
                            {/*<DatePicker style={{ width: 200 }}  />*/}
                            <_antd.DatePicker className="w-full" onChange={handleDateChange} name="age" />
                        </_antd.Form.Item>
                    </_antd.Col>
                    <_antd.Col span={12}>
                        <_antd.Form.Item label="微信号 &nbsp; &nbsp;" colon={false}>
                            <_antd.Input onChange={handleInputChange} className="w-full" name="wechat" />
                        </_antd.Form.Item>
                    </_antd.Col>
                </_antd.Row>
            </_antd.Form>
        </div>;
};
var _default = exports["default"] = BasicInfo;