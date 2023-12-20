"use strict";

var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App.tsx"));
require("./assets/css/tailwind.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_client["default"].createRoot(document.getElementById('root')).render(<_reactRouterDom.BrowserRouter>
    <_App.default />
  </_reactRouterDom.BrowserRouter>);