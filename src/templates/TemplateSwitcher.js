import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import ResumeModel_A from './Amode/resumeModel_A';
import ResumeModel_B from './Bmode/resumeModel_B';
const TemplateSwitcher = ({ userInfo }) => {
    const [currentTemplate, setCurrentTemplate] = useState('C');
    let ResumeComponent;
    switch (currentTemplate) {
        case 'A':
            ResumeComponent = ResumeModel_A;
            break;
        case 'B':
            ResumeComponent = ResumeModel_B;
            break;
        default:
            ResumeComponent = ResumeModel_A;
            break;
    }
    return (_jsx("div", { children: _jsx(ResumeComponent, { userInfo: userInfo }) }));
};
export default TemplateSwitcher;
