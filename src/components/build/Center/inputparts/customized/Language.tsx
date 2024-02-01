import React, { useState } from 'react';
import { Input, Typography, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import {updateLanguageSkill, deleteLanguageSkill} from '../../../../../store/actions';

type CertificationProps = {
  handleInputChange: (tags: string[]) => void;
  handleDelete: () => void;
};

const Language: React.FC<CertificationProps> = ({ handleInputChange, handleDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>(['熟练运用英文', '普通话母语']);
  const dispatch = useDispatch();
  const languageKey = '0'; // 假设您的语言能力只有一个key为'0'

  const handleInputConfirm = () => {
    let tempTags = [...tags];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tempTags = [...tags, inputValue];
    }
    handleInputChange(tempTags);
    setTags(tempTags);
    setInputValue('');
    dispatch(updateLanguageSkill(languageKey, { name: tempTags.join(', ') }));
  };

  const handleClose = (removedTag: string) => {
    const tempTags = tags.filter(tag => tag !== removedTag);
    handleInputChange(tempTags);
    setTags(tempTags);
    dispatch(updateLanguageSkill(languageKey, { name: tempTags.join(', ') }));
  };

  const handleDeleteAll = () => {
    setTags([]);
    dispatch(deleteLanguageSkill(languageKey));
    handleDelete(); // 假设 handleDelete 是从父组件传入的
  };


  return (
    <div id="certification" className="bg-gray-00 p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={3} className="ml-1">语言能力</Typography.Title>
        <div onClick={handleDeleteAll} className="hover:text-red-500 cursor-pointer">
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
        placeholder='请输入您掌握的语言，点击回车确认'
      />
    </div>
  );
}

export default Language;