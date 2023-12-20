import { jsx as _jsx } from "react/jsx-runtime";
import { useObserver } from 'mobx-react-lite';
import styles from './index.module.scss';
import { ResumeModel_C } from "../../index.tsx";
import { Working } from "../working";
export const WorkingHistory = () => {
    const data = new ResumeModel_C;
    return useObserver(() => (_jsx("div", { className: styles.index, children: data.defaultData.workingHistory.map((it, i1) => {
            return (_jsx("div", { className: styles.item, children: _jsx(Working, { name: it.title, time: [it.startTime, it.endTime], content: it.content }) }, i1));
        }) })));
};
