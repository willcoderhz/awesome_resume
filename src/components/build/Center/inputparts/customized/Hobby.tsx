import React, { useState } from 'react';
import { Input, Typography, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

type HobbyProps = {
  handleInputChange: (tags: string[]) => void;
  handleDelete: () => void;
};

const Hobby: React.FC<HobbyProps> = ({ handleInputChange, handleDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>(['篮球', '弹钢琴']);

  const handleInputConfirm = () => {
    let tempTags = [...tags];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tempTags = [...tags, inputValue];
    }
    handleInputChange(tempTags);
    setTags(tempTags);
    setInputValue('');
  };

  const handleClose = (removedTag: string) => {
    const tempTags = tags.filter(tag => tag !== removedTag);
    handleInputChange(tempTags);
    setTags(tempTags);
  };

  return (
    <div id="hobby" className="bg-gray-00 p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={3} className="ml-1">个人爱好</Typography.Title>
        <div onClick={handleDelete} className="hover:text-red-500 cursor-pointer">
          <DeleteOutlined />
          <span>删除</span>
        </div>
      </div>

      {tags.map((tag, index) => {
        return (
          <Tag
            className="mb-2"
            key={tag}
            closable
            onClose={() => handleClose(tag)}
          >
            {tag}
          </Tag>
        );
      })}

      <Input
        type="text"
        size="small"
        className="mt-2"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
        placeholder='请输入爱好，点击回车确认'
      />
    </div>
  );
}

export default Hobby;