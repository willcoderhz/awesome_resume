import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
import { ResumeModel_D } from "../../index.tsx";
export const Header = () => {
    // const { data } = useTemplate<ResumeModel_C>()
    const data = new ResumeModel_D;
    return useObserver(() => (_jsx("div", { className: styles.index, children: _jsxs("div", { className: styles.content, children: [_jsx("div", { className: styles.name, children: data.name }), _jsxs("div", { className: styles.des, children: [_jsx("span", { children: [data.defaultData.data.basicInfo.birth, data.defaultData.data.basicInfo.sex, data.defaultData.data.basicInfo.location, data.name, data.defaultData.data.basicInfo.cellphone, data.defaultData.data.basicInfo.email].filter(Boolean).join(' ∕ ') }), _jsx("br", {})] })] }) })));
};
