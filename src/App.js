import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ResumeEditor from './views/ResumeEditor/ResumeEditorDisplay.tsx';
import ResumeTemplates from './views/template/ResumeTemplate.tsx';
import { Route, Routes } from "react-router-dom";
import ViewC from '../src/templates/Cmode/view/index.tsx';
import ViewD from '../src/templates/Dmode/view/index.tsx';
import Home from "./views/home/Home.tsx";
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/resume", element: _jsx(ResumeEditor, {}) }), _jsx(Route, { path: "/resumeTemplates", element: _jsx(ResumeTemplates, {}) }), _jsx(Route, { path: "/resumeTemplatesUrlC", element: _jsx(ViewC, {}) }), _jsx(Route, { path: "/resumeTemplatesUrlD", element: _jsx(ViewD, {}) })] }));
}
export default App;
