import { jsx as _jsx } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
const ConfigForm = () => {
    return useObserver(() => (_jsx("div", { className: styles.index, children: _jsx("h3", { children: "\u6A21\u5757" }) })));
};
export default ConfigForm;
