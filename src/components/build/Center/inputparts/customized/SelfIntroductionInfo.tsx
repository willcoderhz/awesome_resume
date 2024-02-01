import React from 'react';
import { Input, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { updateIntroduction, deleteIntroduction } from '../../../../../store/actions';

type SelfIntroductionProps = {

  handleDelete: () => void;
};

const SelfIntroduction: React.FC<SelfIntroductionProps> = ({ handleDelete }) => {

  const dispatch = useDispatch();
  const introductionKey = '0'

  const handleInputChange = (content: string) => {
    // 使用特定的 key 和内容更新自我介绍
    dispatch(updateIntroduction(introductionKey, content));
  };

  const handleDeleteSelf = () => {
    // 删除特定 key 的自我介绍
    dispatch(deleteIntroduction(introductionKey));
  };

  return (
    <div id="selfIntroduction" className="bg-white p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={3} className="ml-1">自我介绍</Typography.Title>
        <div onClick={() => {
            handleDeleteSelf();
            handleDelete();
          }} className="hover:text-red-500 cursor-pointer">
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