import React from 'react';
import { Input, Typography } from 'antd';
import ReactQuill from 'react-quill'; // 这里
import 'react-quill/dist/quill.snow.css'; // 导入 Quill 的样式

type SelfIntroductionProps = {
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = ({ handleInputChange }) => {
    return (
        <div id="selfIntroduction" className="bg-gray-50 p-2 ml-0 w-full">
            <Typography.Title level={3} className="mb-4 ml-1">自我介绍</Typography.Title>

            <ReactQuill 
                name="introduction" 
                placeholder="例如：我是一名前端开发者，有3年的工作经验,能够熟练掌握React及Node.js..." 
                onChange={handleInputChange}
                className='border rounded p-0 w-full h-40 mb-10'
            />
        </div>
    );
}

export default SelfIntroduction;

