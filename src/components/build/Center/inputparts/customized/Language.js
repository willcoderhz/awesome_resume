import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input, Typography, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
const Language = ({ handleInputChange, handleDelete }) => {
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState(['熟练运用英文', '普通话母语']);
    const handleInputConfirm = () => {
        let tempTags = [...tags];
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tempTags = [...tags, inputValue];
        }
        handleInputChange(tempTags);
        setTags(tempTags);
        setInputValue('');
    };
    const handleClose = (removedTag) => {
        const tempTags = tags.filter(tag => tag !== removedTag);
        handleInputChange(tempTags);
        setTags(tempTags);
    };
    return (_jsxs("div", { id: "certification", className: "bg-gray-00 p-2 ml-0 w-full", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx(Typography.Title, { level: 3, className: "ml-1", children: "\u8BED\u8A00\u80FD\u529B" }), _jsxs("div", { onClick: handleDelete, className: "hover:text-red-500 cursor-pointer", children: [_jsx(DeleteOutlined, {}), _jsx("span", { children: "\u5220\u9664" })] })] }), tags.map((tag, index) => {
                return (_jsx(Tag, { className: "mb-2", closable: true, onClose: () => handleClose(tag), children: tag }, tag));
            }), _jsx(Input, { type: "text", size: "small", className: "mt-2", value: inputValue, onChange: e => setInputValue(e.target.value), onBlur: handleInputConfirm, onPressEnter: handleInputConfirm, placeholder: '\u8BF7\u8F93\u5165\u60A8\u638C\u63E1\u7684\u8BED\u8A00\uFF0C\u70B9\u51FB\u56DE\u8F66\u786E\u8BA4' })] }));
};
export default Language;
