import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Input, Typography, DatePicker, Form, Col, Row } from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addBasicInfo, updateBasicInfo } from '../../../../store/actions';
const { MonthPicker } = DatePicker;
const BasicInfo = () => {
    const [basicInfo, setBasicInfo] = useState({
        position: '',
        name: '',
        phone: '',
        age: '',
        city: '',
        photo: '',
        email: '',
        wechat: '',
    });
    const [imageUrl, setImageUrl] = React.useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addBasicInfo(basicInfo));
    }, [dispatch]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedInfo = { ...basicInfo, [name]: value };
        setBasicInfo(updatedInfo);
        dispatch(updateBasicInfo(updatedInfo));
    };
    const handleFileChange = ({ file }) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result;
            console.log(base64String); // 确认转换后的Base64字符串
            const updatedInfo = { ...basicInfo, photo: base64String };
            setBasicInfo(updatedInfo);
            dispatch(updateBasicInfo(updatedInfo));
        };
        // 直接使用 file 对象，而不是 file.originFileObj
        if (file instanceof Blob) {
            reader.readAsDataURL(file);
        }
        else {
            console.error('The file is not a Blob object:', file);
        }
    };
    const handleDateChange = (date, dateString) => {
        const updatedInfo = { ...basicInfo, age: dateString };
        setBasicInfo(updatedInfo);
        dispatch(updateBasicInfo(updatedInfo));
    };
    return (_jsxs("div", { className: "bg-gray-0 p-4 ml-0 w-full", id: "basicInfo", children: [_jsx(Typography.Title, { level: 3, className: "mb-4", children: "\u57FA\u672C\u4FE1\u606F" }), _jsxs(Form, { layout: "horizontal", children: [_jsxs(Row, { gutter: 24, children: [_jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u6C42\u804C\u804C\u4F4D", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "position" }) }) }), _jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u7167\u7247\u4F4D\u7F6E", colon: false, children: _jsx(Upload, { name: "logo", listType: "picture", beforeUpload: () => false, onChange: handleFileChange, children: _jsx(Button, { icon: _jsx(UploadOutlined, {}), children: "\u70B9\u51FB\u4E0A\u4F20" }) }) }) })] }), _jsxs(Row, { gutter: 24, children: [_jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u59D3\u540D \u00A0 \u00A0\u00A0\u00A0\u00A0", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "name" }) }) }), _jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u5DE5\u4F5C\u5730\u65B9", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "city" }) }) })] }), _jsxs(Row, { gutter: 24, children: [_jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u8054\u7CFB\u7535\u8BDD", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "phone" }) }) }), _jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u7535\u5B50\u90AE\u7BB1", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "email" }) }) })] }), _jsxs(Row, { gutter: 24, children: [_jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u51FA\u751F\u5E74\u6708", colon: false, children: _jsx(DatePicker, { className: "w-full", onChange: handleDateChange, name: "age" }) }) }), _jsx(Col, { span: 12, children: _jsx(Form.Item, { label: "\u5FAE\u4FE1\u53F7 \u00A0 \u00A0", colon: false, children: _jsx(Input, { onChange: handleInputChange, className: "w-full", name: "wechat" }) }) })] })] })] }));
};
export default BasicInfo;
