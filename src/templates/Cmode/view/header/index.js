import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
import { ResumeModel_C } from "../../index.tsx";
export const Header = () => {
    // const { data } = useTemplate<ResumeModel_C>()
    const data = new ResumeModel_C;
    return useObserver(() => (_jsx("div", { className: styles.index, children: _jsxs("div", { className: styles.content, children: [_jsx("div", { className: styles.name, children: data.name }), _jsxs("div", { className: styles.des, children: [_jsx("span", { children: [data.defaultData.age, data.defaultData.gender, data.defaultData.city, data.defaultData.target, data.defaultData.phoneNumber, data.defaultData.email].filter(Boolean).join(' ∕ ') }), _jsx("br", {}), _jsx("span", { children: `${data.defaultData.education.graduationTime} 年毕业于 ${data.defaultData.education.schoolName} - ${data.defaultData.education.major}` })] })] }) })));
};
