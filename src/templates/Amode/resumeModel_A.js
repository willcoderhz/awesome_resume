import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Typography, Divider } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, CalendarOutlined, WechatOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const { Title, Paragraph, Text } = Typography;
const ResumeModel_A = ({ userInfo }) => {
    const basicInfo = useSelector(state => state.basicInfo);
    const workExperiences = useSelector(state => state.workExperiences);
    const links = useSelector(state => state.links);
    const skills = useSelector(state => state.skills);
    const personalProjects = useSelector(state => state.personalProjects);
    const educations = useSelector(state => state.educations);
    const exportPDF = () => {
        const resumeElement = document.getElementById('resume');
        // 增加画布的缩放比例以提高清晰度
        const scale = 1.1; // 你可以调整这个值来提高清晰度
        // 获取元素的尺寸并计算缩放后的尺寸
        const width = resumeElement.offsetWidth;
        const height = resumeElement.offsetHeight;
        const scaledWidth = width * scale;
        const scaledHeight = height * scale;
        // 设置html2canvas的配置
        const canvasOptions = {
            scale: scale,
            width: scaledWidth,
            height: scaledHeight,
            useCORS: true // 如果有跨域图片的问题，可以尝试打开这个选项
        };
        html2canvas(resumeElement, canvasOptions).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: [scaledWidth, scaledHeight]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
            pdf.save("resume.pdf");
        });
    };
    useEffect(() => {
        // 设置一个定时器，60秒后执行
        const timer = setTimeout(() => {
            // 聚合所有状态并打印
            const allState = {
                basicInfo,
                workExperiences,
                links,
                skills,
                personalProjects,
                educations,
            };
            console.log('All State after 60 seconds:', allState);
        }, 10000); // 60000 毫秒 = 60 秒
        // 清除定时器的清理函数
        return () => clearTimeout(timer);
    }, [basicInfo, workExperiences, links, skills, personalProjects, educations]);
    return (_jsxs("div", { children: [_jsxs("div", { id: "resume", children: [_jsxs("div", { className: "bg-white p-5 relative", children: [" ", _jsxs("div", { className: "flex flex-col justify-center items-center space-y-2 h-full", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: " text-black font-bold text-4xl rounded-lg py-4 flex items-center", children: basicInfo.name }), _jsx("div", { className: " text-black  text-xl rounded-lg p-1 flex items-center", children: basicInfo.position })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("div", { className: "bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center", children: [_jsx(PhoneOutlined, { className: "mr-2" }), basicInfo.phone] }), _jsxs("div", { className: "bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center", children: [_jsx(CalendarOutlined, { className: "mr-2" }), basicInfo.age] }), _jsxs("div", { className: "bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center", children: [_jsx(EnvironmentOutlined, { className: "mr-2" }), basicInfo.city] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("div", { className: "bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center", children: [_jsx(MailOutlined, { className: "mr-2" }), basicInfo.email] }), _jsxs("div", { className: "bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center", children: [_jsx(WechatOutlined, { className: "mr-2" }), basicInfo.wechat] })] })] }), basicInfo.photo && (_jsx("div", { className: "absolute right-10 bottom-5", children: _jsx("img", { src: basicInfo.photo, alt: "Profile", className: " h-40 object-cover  rounded-lg  border-gray-300" }) }))] }), _jsx(Title, { level: 3, className: "bg-gray-50 ext-gray-800 p-2", children: "\u6559\u80B2\u80CC\u666F" }), educations && educations.map((education, index) => (_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex justify-between items-center px-5", children: [_jsxs(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: [education.school, " \u00A0| \u00A0", education.major, " \u00A0| \u00A0", education.degree] }), _jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: education.dateRange && education.dateRange.length >= 2 ? `${education.dateRange[0].format('YYYY-MM-DD')} 至 ${education.dateRange[1].format('YYYY-MM-DD')}` : "" })] }), _jsx("div", { className: "text-base text-gray-700", dangerouslySetInnerHTML: { __html: education.description } })] }, index))), _jsx(Divider, { className: "my-5" }), _jsx(Title, { level: 3, className: "bg-gray-50 ext-gray-800 p-2", children: "\u5DE5\u4F5C\u7ECF\u5386" }), workExperiences && workExperiences.map((work, index) => (_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex justify-between items-center px-5", children: [_jsxs(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: [work.companyName, " \u00A0| \u00A0", work.jobTitle, " \u00A0| \u00A0", work.city] }), _jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: work.dateRange && work.dateRange.length >= 2 ? `${work.dateRange[0].format('YYYY-MM-DD')} 至 ${work.dateRange[1].format('YYYY-MM-DD')}` : "" })] }), _jsx("div", { className: "text-base text-gray-700", dangerouslySetInnerHTML: { __html: work.description } })] }, index))), _jsx(Divider, { className: "my-5" }), _jsx(Title, { level: 3, className: "bg-gray-50 ext-gray-800 p-2", children: "\u9879\u76EE\u7ECF\u9A8C" }), personalProjects && personalProjects.map((project, index) => (_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex justify-between px-5 items-center", children: [_jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: project.projectName }), _jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: project.dateRange && project.dateRange.length >= 2 ? `${project.dateRange[0].format('YYYY-MM-DD')} 至 ${project.dateRange[1].format('YYYY-MM-DD')}` : "" })] }), _jsx("div", { className: "text-base text-gray-700", dangerouslySetInnerHTML: { __html: project.description } })] }, index))), _jsx(Divider, { className: "my-5" }), _jsx(Title, { level: 3, className: "bg-gray-50 ext-gray-800 p-2", children: "\u4E13\u4E1A\u6280\u80FD" }), skills && skills.map((skill, index) => (_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex justify-between px-5", children: [_jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: skill.skillName }), _jsx(Text, { className: "text-lg mb-2 font-semibold text-gray-800", children: skill.dateRange && skill.dateRange.length >= 2 ? `${skill.dateRange[0].format('YYYY-MM-DD')} 至 ${skill.dateRange[1].format('YYYY-MM-DD')}` : "" })] }), _jsx("div", { className: "text-base text-gray-700", dangerouslySetInnerHTML: { __html: skill.description } })] }, index))), _jsx(Divider, { className: "my-5" }), _jsx(Title, { level: 3, className: "bg-gray-50 ext-gray-800 p-2", children: "\u76F8\u5173\u94FE\u63A5" }), links && links.map((link, index) => (_jsx("div", { className: "mb-8 px-5", children: _jsxs(Text, { className: "text-lg block mb-0 font-semibold text-gray-800", children: [link.name, " \u00A0| \u00A0", link.url, " \u00A0 "] }) }, index)))] }), _jsx("button", { onClick: exportPDF, style: { margin: '20px', padding: '10px' }, children: "\u5BFC\u51FA\u4E3APDF" })] }));
};
export default ResumeModel_A;
