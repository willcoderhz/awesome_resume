import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TemplateSwitcher from "../../../templates/TemplateSwitcher";
import PreviewHeader from "./PreviewHeader";
const ResumePreview = ({ userInfo }) => {
    return (_jsxs("div", { className: " right-0  w-50 h-full ", children: [_jsx(PreviewHeader, {}), _jsx(TemplateSwitcher, { userInfo: userInfo })] }));
};
export default ResumePreview;
