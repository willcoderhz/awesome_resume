import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
import { ResumeModel_D } from "../../index.tsx";
export const OwnerProjects = () => {
    // const { data } = useTemplate<ResumeModel_C>()
    return useObserver(() => (_jsx(MyComponent, {})));
};
const MyComponent = () => {
    const data = new ResumeModel_D;
    const sectionsArray = data.defaultData.data.sections;
    const linksArray = data.defaultData.data.links;
    return (_jsxs("div", { children: [sectionsArray.map((item, index) => (_jsxs("div", { children: ["//\u540E\u9762\u8981\u4FEE\u6539\uFF0C\u81EA\u52A8\u751F\u6210", _jsx("div", { className: styles.index, children: _jsx("div", { className: styles.text, children: item.name }) }), item.type === 'custom' && (_jsx("div", { children: item.data.map((item) => (_jsxs("div", { children: [_jsx("h3", { children: item.title }), _jsx("p", { dangerouslySetInnerHTML: { __html: item.description } })] }, item.title))) })), item.type === 'skills' && (_jsx("div", { children: item.data.map((skill) => (_jsxs("div", { children: [_jsx("h3", { children: skill.title }), _jsx("p", { dangerouslySetInnerHTML: { __html: skill.description } })] }, skill.title))) })), item.type === 'empolyment' && (_jsx("div", { children: item.data.map((job) => (_jsxs("div", { children: [_jsx("h3", { children: job.title }), _jsx("p", { children: job.subTitle }), _jsx("p", { children: job.city }), _jsx("p", { dangerouslySetInnerHTML: { __html: job.description } }), _jsxs("p", { children: [job.startDate, " - ", job.endDate] })] }, job.title))) })), item.type === 'education' && (_jsx("div", { children: item.data.map((job) => (_jsxs("div", { children: [_jsx("h3", { children: job.title }), _jsx("p", { children: job.subTitle }), _jsx("p", { children: job.city }), _jsx("p", { dangerouslySetInnerHTML: { __html: job.description } }), _jsxs("p", { children: [job.startDate, " - ", job.endDate] })] }, job.title))) }))] }, index))), linksArray.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.src, target: "_blank", rel: "noopener noreferrer", children: link.name }) }, index)))] }));
};
