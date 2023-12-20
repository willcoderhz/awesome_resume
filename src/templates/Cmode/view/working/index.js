import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './index.module.scss';
export const Working = (props) => {
    const { name, time, content } = props;
    return (_jsxs("div", { className: styles.index, children: [_jsxs("div", { className: styles.header, children: [_jsx("div", { className: styles.name, children: name }), _jsxs("div", { className: styles.time, children: [time[0], " - ", time[1]] })] }), _jsx("div", { className: styles.content, children: _jsx("div", { dangerouslySetInnerHTML: { __html: content.replace(/\n/g, '<br/>') } }) })] }));
};
