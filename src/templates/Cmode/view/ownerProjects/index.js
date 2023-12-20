import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
import { ResumeModel_C } from "../../index.tsx";
export const OwnerProjects = () => {
    // const { data, config } = useTemplate<ResumeModel_C>()
    const data = new ResumeModel_C;
    const config = data.defaultConfig;
    return useObserver(() => (_jsxs("div", { className: styles.index, children: [data.defaultData.projects.map((it, i) => {
                return (_jsxs("div", { className: styles.item, children: [_jsxs("div", { className: styles.header, children: [_jsx("div", { className: styles.name, children: it.title }), _jsx("div", { className: styles.time })] }), _jsx("div", { className: styles.des, dangerouslySetInnerHTML: { __html: it.content.replace(/\n/g, '<br/>') } })] }, i));
            }), config.githubVisible && (_jsxs("div", { className: styles.more, children: ["\u27B1 \u66F4\u591A\u6211\u7684\u4E2A\u4EBA\u9879\u76EE\u8BF7\u770B GitHub\uFF1A", _jsx("span", { style: {
                            textDecoration: 'underline',
                        }, children: data.defaultData.github })] }))] })));
};
