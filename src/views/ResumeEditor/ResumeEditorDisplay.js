import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../../components/build/LeftSidebar/Navbar';
import UserInfoForm from '../../components/build/Center/UserInfoForm';
import ResumePreview from '../../components/build/RightSidebar/resumePreview';
import EditorHeader from '../../components/build/Top/EditorHeader';
import store from '../../store/store';
import { Provider } from 'react-redux';
const ResumeEditor = () => {
    const [userInfo, setUserInfo] = useState({});
    return (_jsx("div", { children: _jsxs(Provider, { store: store, children: [_jsx(EditorHeader, {}), _jsxs("div", { className: "flex", children: [_jsx(Navbar, {}), _jsx(UserInfoForm, { onInfoChange: setUserInfo }), _jsx(ResumePreview, { userInfo: userInfo })] })] }) }));
};
export default ResumeEditor;
