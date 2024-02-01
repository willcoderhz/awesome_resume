import React, { useState } from 'react';
import { Input, Typography, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateCertification, deleteCertification} from '../../../../../store/actions';


type CertificationProps = {
  handleInputChange: (tags: string[]) => void;
  handleDelete: () => void;
};

const Certification: React.FC<CertificationProps> = ({ handleInputChange, handleDelete }) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>(['CET-4', 'PMP证书']);
  const dispatch = useDispatch();
  const certificationKey = '0';

  const handleInputConfirm = () => {
    let tempTags = [...tags];
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tempTags = [...tags, inputValue];
    }
    handleInputChange(tempTags);
    setTags(tempTags);
    setInputValue('');
    dispatch(updateCertification(certificationKey, { name: tempTags.join(', ') }));
  };

  const handleClose = (removedTag: string) => {
    const tempTags = tags.filter(tag => tag !== removedTag);
    handleInputChange(tempTags);
    setTags(tempTags);
    dispatch(updateCertification(certificationKey, { name: tempTags.join(', ') }));
  };

  const handleDeleteAll = () => {
    // 清空 tags
    setTags([]);
    // 派发删除证书的动作
    dispatch(deleteCertification(certificationKey));
  };


  return (
    <div id="certification" className="bg-gray-00 p-2 ml-0 w-full">
      <div className="flex justify-between items-center mb-4">
        <Typography.Title level={3} className="ml-1">证书</Typography.Title>
        <div onClick={() => { handleDeleteAll(); handleDelete(); }} className="hover:text-red-500 cursor-pointer">
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
        placeholder='请输入证书名称，点击回车确认'
      />
    </div>
  );
}

export default Certification;