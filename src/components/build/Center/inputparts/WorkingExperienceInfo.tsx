import React from 'react';
import { Input, Button, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface WorkExperience {
  companyName: string;
  title: string;
  workTime: string;
  workExperience: string;
}

interface Props {
  workExperiences: WorkExperience[];
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleWorkDrop: (e: React.DragEvent, index: number) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteWorkExperience: (index: number) => void;
  addWorkExperience: () => void;
}

const WorkingExperienceInfo: React.FC<Props> = ({
  workExperiences,
  handleDragStart,
  handleWorkDrop,
  handleDragOver,
  handleInputChange,
  handleDeleteWorkExperience,
  addWorkExperience
}) => (
  <div className="bg-gray-50 p-4 ml-0 w-full">
    <Typography.Title level={3} className="mb-4 ml-1"  id="workingExperienceInfo">工作经历</Typography.Title>
    {workExperiences.map((work, index) => (
      <div 
        key={index} 
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleWorkDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4"
      >
        <div className="flex justify-between mb-2">
          <Input 
            name="companyName" 
            placeholder="公司名称" 
            value={work.companyName}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 mr-1 w-9/20'
          />
          <Input 
            name="title" 
            placeholder="职位" 
            value={work.title}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 ml-1 w-9/20'
          />
        </div>
        <Input 
          name="workTime" 
          placeholder="工作时间" 
          value={work.workTime}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 mb-2 w-full'
        />
        <Input.TextArea 
          name="workExperience" 
          placeholder="描述您的工作经验" 
          value={work.workExperience}
          onChange={e => handleInputChange(e as any, index)}
          className='mb-2 w-full'
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
        <Button 
          type="default" 
          icon={<DeleteOutlined />} 
          onClick={() => handleDeleteWorkExperience(index)} 
          className="mr-2 bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
        >
          删除
        </Button>
      </div>
    ))}
    <Button 
        type="default" 
        icon={<PlusOutlined />} 
        onClick={addWorkExperience}
        className="bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800"
    >
        添加
    </Button>
  </div>
);

export default WorkingExperienceInfo;
