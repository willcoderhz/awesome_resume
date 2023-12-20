import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Header } from './header';
import styles from './index.module.scss';
import { OwnerProjects } from './ownerProjects';
import { WorkingHistory } from './workingHistory';
import { ResumeModel_C } from "..";
import EditorHeader from "../../../components/build/Top/EditorHeader.tsx";
import Navbar from "../../../components/build/LeftSidebar/Navbar.tsx";
import UserInfoForm from "../../../components/build/Center/UserInfoForm.tsx";
const View = () => {
    const [userInfo, setUserInfo] = useState({});
    const rm = new ResumeModel_C;
    console.log("这是第一套：", rm);
    const config = rm.defaultConfig;
    const data = rm.defaultData;
    const renderContent = useObserver(() => {
        const modules = {
            introduce: (_jsx("div", { className: clsx(styles.content, styles.introduce), children: data.introduce.split('\n').map((it, i) => {
                    return _jsx("div", { children: it }, i);
                }) })),
            ownerProjects: (_jsx("div", { className: clsx(styles.content, styles.ownerProjects), children: _jsx(OwnerProjects, {}) })),
            workingHistory: (_jsx("div", { className: clsx(styles.content), children: _jsx(WorkingHistory, {}) })),
            aboutMe: _jsx("div", { className: clsx(styles.content), children: data.aboutMe }),
        };
        return config.modules
            .filter((it) => it.visible)
            .map((it) => {
            return (_jsxs("div", { children: [_jsx("div", { className: styles.title, children: React.createElement(rm.titleComponent, {
                            value: it.name,
                        }) }), modules[it.key]] }, it.key));
        });
    });
    return useObserver(() => (
    //todo  这个地方的写法多少感觉有些问题，模版里应该只写模板的问题，但我把外层导航和编辑部分也加进来了，感觉有点乱，后面要在修改下
    _jsxs("div", { children: [_jsx(EditorHeader, {}), _jsxs("div", { className: "flex", children: [_jsx(Navbar, {}), _jsx(UserInfoForm, { onInfoChange: setUserInfo }), _jsxs("div", { className: styles.index, style: {
                            '--color-primary': config.primaryColor,
                        }, children: [_jsx("div", { className: styles.header, children: _jsx(Header, {}) }), renderContent] })] })] })));
};
export default View;
