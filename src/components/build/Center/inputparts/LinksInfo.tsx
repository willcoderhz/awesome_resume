// LinksInfo.tsx
import React from 'react';
import { Input, Button, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface Link {
  url: string;
}

interface Props {
  links: Link[];
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleLinkDrop: (e: React.DragEvent, index: number) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteLink: (index: number) => void;
  addLink: () => void;
}

const LinksInfo: React.FC<Props> = ({
  links,
  handleDragStart,
  handleLinkDrop,
  handleDragOver,
  handleInputChange,
  handleDeleteLink,
  addLink
}) => (
  <div className="bg-gray-50 p-4 rounded ml-0 w-full" id="linksInfo">
    <Typography.Title level={3} className="mb-4 ml-1"  >相关链接</Typography.Title>
    {links.map((link, index) => (
      <div 
        key={index}
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleLinkDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4 flex items-center"
      >
        <Input 
          name="url" 
          placeholder="请输入相关链接   http://......" 
          value={link.url}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 flex-grow mx-1'
        />
        <Button 
          type="default" 
          icon={<DeleteOutlined />} 
          onClick={() => handleDeleteLink(index)} 
          className="mr-2 bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
        >
          删除
        </Button>
      </div>
    ))}
    <Button 
      type="default" 
      icon={<PlusOutlined />} 
      onClick={addLink}
      className="bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800"
    >
      添加链接
    </Button>
  </div>
);

export default LinksInfo;

