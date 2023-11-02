import React from 'react';
import { Input, Typography } from 'antd';

type SelfIntroductionProps = {
    handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = ({ handleInputChange }) => {
    return (
        <div id="selfIntroduction" className="bg-gray-50 p-4 ml-0 w-full">
            <Typography.Title level={3} className="mb-4 ml-1">自我介绍</Typography.Title>

            <Input.TextArea 
                name="introduction" 
                placeholder="例如：我是一名前端开发者，有3年的工作经验,能够熟练掌握React及Node.js..." 
                onChange={handleInputChange}
                className='border rounded p-2 w-full'
                autoSize={{ minRows: 4, maxRows: 6 }}
            />
        </div>
    );
}

export default SelfIntroduction;

