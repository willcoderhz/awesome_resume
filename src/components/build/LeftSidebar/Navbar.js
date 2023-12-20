import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Menu } from 'antd';
import { EditOutlined, AppstoreAddOutlined, ExportOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const navigate = useNavigate();
    const navigateToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(element);
    };
    return (_jsxs(Menu, { mode: "vertical", theme: "light", className: "h-screen w-8  left-0 border-r", children: [_jsx(Menu.Item, { icon: _jsx(EditOutlined, {}), className: "hover:bg-blue-600 hover:text-white", onClick: () => setIsEditClicked(!isEditClicked), children: "\u7F16\u8F91" }, "edit"), isEditClicked && (_jsxs(React.Fragment, { children: [_jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('basicInfo'), children: "\u57FA\u672C\u4FE1\u606F" }, "basicInfo"), _jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('selfIntroduction'), children: "\u81EA\u6211\u4ECB\u7ECD" }, "selfIntroduction"), _jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('educationInfo'), children: "\u6559\u80B2\u7ECF\u5386" }, "educationInfo"), _jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('workingExperienceInfo'), children: "\u5DE5\u4F5C\u7ECF\u5386" }, "workingExperienceInfo"), _jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('projectsInfo'), children: "\u9879\u76EE\u7ECF\u5386" }, "projectsInfo"), _jsx(Menu.Item, { style: { paddingLeft: '24px' }, onClick: () => navigateToSection('linksInfo'), children: "\u76F8\u5173\u94FE\u63A5" }, "linksInfo")] })), _jsx(Menu.Item, { icon: _jsx(AppstoreAddOutlined, {}), className: "hover:bg-blue-600 hover:text-white", children: "\u6A21\u677F" }, "template"), _jsx(Menu.Item, { icon: _jsx(ExportOutlined, {}), className: "hover:bg-blue-600 hover:text-white", children: "\u5BFC\u51FA" }, "export"), _jsx(Menu.Item, { icon: _jsx(HomeOutlined, {}), className: "hover:bg-blue-600 hover:text-white", onClick: () => navigate('/'), children: "\u9996\u9875" }, "home")] }));
};
export default Navbar;
