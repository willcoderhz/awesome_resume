import React, { useState } from 'react';
import { Input, Typography, Tag } from 'antd';

type CertificationProps = {
  handleInputChange: (tags: string[]) => void;
};

const Language: React.FC<CertificationProps> = ({ handleInputChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>(['熟练运用英文', '普通话母语']);

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
    <div id="certification" className="bg-gray-00 p-2 ml-0 w-full">
      <Typography.Title level={3} className="mb-4 ml-1">语言能力</Typography.Title>

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