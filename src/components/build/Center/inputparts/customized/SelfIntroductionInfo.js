import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const SelfIntroduction = ({ handleInputChange, handleDelete }) => {
    return (_jsxs("div", { id: "selfIntroduction", className: "bg-gray-50 p-2 ml-0 w-full", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx(Typography.Title, { level: 3, className: "ml-1", children: "\u81EA\u6211\u4ECB\u7ECD" }), _jsxs("div", { onClick: handleDelete, className: "hover:text-red-500 cursor-pointer", children: [_jsx(DeleteOutlined, {}), _jsx("span", { children: "\u5220\u9664" })] })] }), _jsx(ReactQuill, { name: "introduction", placeholder: "\u4F8B\u5982\uFF1A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u8005\uFF0C\u67093\u5E74\u7684\u5DE5\u4F5C\u7ECF\u9A8C,\u80FD\u591F\u719F\u7EC3\u638C\u63E1React\u53CANode.js...", onChange: handleInputChange, className: 'border rounded p-0 w-full h-40 mb-10' })] }));
};
export default SelfIntroduction;
