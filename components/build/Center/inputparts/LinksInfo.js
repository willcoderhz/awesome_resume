"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _icons = require("@ant-design/icons");
var _core = require("@dnd-kit/core");
var _modifiers = require("@dnd-kit/modifiers");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _reactRedux = require("react-redux");
var _actions = require("../../../../store/actions");
var _excluded = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var LinksInfo = function LinksInfo() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var initialData = [{
    key: '1',
    name: 'Github',
    url: 'http://example.com',
    isEditing: false
  }
  // ...可以添加更多的初始数据...
  ];
  var _useState = (0, _react.useState)(initialData),
    _useState2 = _slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];

  // 使用 useEffect 分发初始数据到 Redux store
  (0, _react.useEffect)(function () {
    // 仅在组件挂载时执行
    initialData.forEach(function (link) {
      dispatch((0, _actions.addLink)(link));
    });
  }, [dispatch]);
  var handleEdit = function handleEdit(key) {
    setDataSource(dataSource.map(function (item) {
      return item.key === key ? _objectSpread(_objectSpread({}, item), {}, {
        isEditing: !item.isEditing
      }) : item;
    }));
  };
  var handleSave = function handleSave(key, newName, newUrl) {
    setDataSource(dataSource.map(function (item) {
      return item.key === key ? _objectSpread(_objectSpread({}, item), {}, {
        name: newName,
        url: newUrl,
        isEditing: false
      }) : item;
    }));
    dispatch((0, _actions.updateLink)(key, {
      name: newName,
      url: newUrl
    }));
  };
  var handleDelete = function handleDelete(key) {
    setDataSource(dataSource.filter(function (item) {
      return item.key !== key;
    }));
    dispatch((0, _actions.deleteLink)(key));
  };
  var handleAdd = function handleAdd() {
    var newKey = (Math.max.apply(Math, _toConsumableArray(dataSource.map(function (d) {
      return Number(d.key);
    }))) + 1).toString(); // 创建一个新的、唯一的 key
    var newLinkData = {
      key: newKey,
      name: '',
      // 留空或者设置为一个提示文本
      url: '',
      isEditing: true
    };

    // 更新本地 state
    setDataSource([].concat(_toConsumableArray(dataSource), [newLinkData]));

    // 使用 addLink action 创建函数来 dispatch action
    dispatch((0, _actions.addLink)({
      key: newKey,
      name: '',
      url: ''
    })); // 确保这里的值与 newLinkData 一致
  };
  var columns = [{
    key: 'sort',
    title: '自定义内容'
    // This column is for drag handle
  }, {
    title: '',
    dataIndex: 'name',
    render: function render(name, record) {
      if (record.isEditing) {
        return <_antd.Input id={"name-edit-".concat(record.key)} defaultValue={name} autoFocus />;
      }
      return name;
    }
  }, {
    title: '',
    dataIndex: 'url',
    render: function render(url, record) {
      if (record.isEditing) {
        return <_antd.Input id={"url-edit-".concat(record.key)} defaultValue={url} />;
      }
      return <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>;
    }
  }, {
    key: 'action',
    title: '',
    dataIndex: 'operation',
    className: 'text-right',
    render: function render(text, record) {
      return <div className="flex justify-end space-x-2 ">
            {record.isEditing ? <button className="text-blue-600 hover:text-blue-700 mr-2" onClick={function () {
          var nameInput = document.getElementById("name-edit-".concat(record.key));
          var urlInput = document.getElementById("url-edit-".concat(record.key));
          if (nameInput && urlInput) handleSave(record.key, nameInput.value, urlInput.value);
        }}>
                <_icons.SaveOutlined />
              </button> : <button className="text-black-600 hover:text-blue-700 mr-2" onClick={function () {
          return handleEdit(record.key);
        }}>
                <_icons.EditOutlined />
              </button>}
            <button className="text-black-600 hover:text-red-700 " onClick={function () {
          return handleDelete(record.key);
        }}>
              <_icons.DeleteOutlined />
            </button>
          </div>;
    }
  }];
  var Row = function Row(_ref) {
    var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);
    var _useSortable = (0, _sortable.useSortable)({
        id: props['data-row-key']
      }),
      attributes = _useSortable.attributes,
      listeners = _useSortable.listeners,
      setNodeRef = _useSortable.setNodeRef,
      setActivatorNodeRef = _useSortable.setActivatorNodeRef,
      transform = _useSortable.transform,
      transition = _useSortable.transition,
      isDragging = _useSortable.isDragging;
    // 添加样式修改拖拽样式风格
    var style2 = _objectSpread(_objectSpread(_objectSpread({
      color: '#000',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '2px dashed blue',
      margin: '1rem 2rem',
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
    var style = _objectSpread(_objectSpread(_objectSpread({}, props.style.style = {
      fontSize: '14px',
      border: '#165DFF'
    }), {}, {
      transform: _utilities.CSS.Transform.toString(transform ? _objectSpread(_objectSpread({}, transform), {}, {
        scaleY: 1
      }) : undefined),
      transition: transition
    }, isDragging ? {
      zIndex: 9999
    } : {}), isDragging ? {
      position: 'relative'
    } : {});
    return <tr {...props} ref={setNodeRef} style={style2} {...attributes}>
          {_react["default"].Children.map(children, function (child) {
        if (_react["default"].isValidElement(child) && child.key === 'sort') {
          return _react["default"].cloneElement(child, {
            children: <_icons.MenuOutlined ref={setActivatorNodeRef} style={{
              cursor: 'grab'
            }} {...listeners} />
          });
        }
        return child;
      })}

      </tr>;
  };
  var onDragEnd = function onDragEnd(_ref2) {
    var active = _ref2.active,
      over = _ref2.over;
    if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      setDataSource(function (previous) {
        var activeIndex = previous.findIndex(function (item) {
          return item.key === active.id;
        });
        var overIndex = previous.findIndex(function (item) {
          return item.key === (over === null || over === void 0 ? void 0 : over.id);
        });
        var newOrder = (0, _sortable.arrayMove)(previous, activeIndex, overIndex);

        // 在这里使用 reorderLinks action
        dispatch((0, _actions.reorderLinks)(newOrder));
        return newOrder;
      });
    }
  };
  return <>
    <h1 className="text-left text-xl font-bold mb-4 pl-3">自定义内容</h1>
    <_core.DndContext modifiers={[_modifiers.restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <_sortable.SortableContext items={dataSource.map(function (item) {
        return item.key;
      })} strategy={_sortable.verticalListSortingStrategy}>
        <_antd.Table components={{
          body: {
            row: Row
          }
        }} rowKey="key" columns={columns} dataSource={dataSource} pagination={false} showHeader={false} // 不显示标题行
        />
      </_sortable.SortableContext>
    </_core.DndContext>
    <_antd.Button type="primary" className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10" // 使用 Tailwind 的类替换内联样式
    onClick={handleAdd}>
  <span className="inline-flex items-center"> {/* 使用 flex 布局来对齐图标和文本 */}
    <_icons.PlusOutlined className="mr-2" /> {/* 可以调整这个 margin 来控制图标和文本之间的距离 */}
    添加链接
  </span>
    </_antd.Button>
  </>;
};
var _default = exports["default"] = LinksInfo;