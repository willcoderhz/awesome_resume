import React from 'react';
import { Input, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type SelfIntroductionProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDelete: () => void;
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = ({ handleInputChange, handleDelete }) => {
  return (
    <div id="selfIntroduction" className="bg-gray-50 p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={3} className="ml-1">自我介绍</Typography.Title>
        <div onClick={handleDelete} className="hover:text-red-500 cursor-pointer">
          <DeleteOutlined />
          <span>删除</span>
        </div>
      </div>
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