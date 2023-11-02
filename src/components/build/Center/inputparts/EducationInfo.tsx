import React from 'react';
import { Input, Button, Typography, InputNumber} from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface Education {
  school: string;
  major: string;
  degree: string;
  graduationDate: string;
  description?: string;
}

interface Props {
  educations: Education[];
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleEducationDrop: (e: React.DragEvent, index: number) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteEducation: (index: number) => void;
  addEducation: () => void;
}

const EducationInfo: React.FC<Props> = ({
  educations,
  handleDragStart,
  handleEducationDrop,
  handleDragOver,
  handleInputChange,
  handleDeleteEducation,
  addEducation
}) => (
    <div className="bg-gray-50 p-4 ml-0 w-full">
    <Typography.Title level={3} className="mb-4 ml-1" id="educationInfo" >教育背景</Typography.Title>
    {educations.map((education, index) => (
      <div 
        key={index} 
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleEducationDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4"
      >
        <div className="flex justify-between mb-2">
            <Input
              name="school"
              placeholder="学校"
              value={education.school}
              onChange={e => handleInputChange(e, index)}
              className='border rounded p-2 mr-1 w-9/20'
            />
            <Input 
              name="major"
              placeholder="专业"
              value={education.major}
              onChange={e => handleInputChange(e, index)}
              className='border rounded p-2 ml-1 w-9/20'
            />
        </div>
        <div className="flex justify-between mb-2">
            <Input 
              name="degree"
              placeholder="学位"
              value={education.degree}
              onChange={e => handleInputChange(e, index)}
              className='border rounded p-2 mr-1 w-9/20'
            />
            <Input
              name="graduationDate"
              placeholder="毕业时间"
              value={education.graduationDate}
              onChange={e => handleInputChange(e, index)}
              className='border rounded p-2 ml-1 w-9/20'
            />
        </div>
        <Input.TextArea
          autoSize={{ minRows: 3, maxRows: 6 }}
          name="description"
          placeholder="例如：本科期间，我主修了计算机科学，辅修了设计，并参与了多项编程竞赛，我的GPA是..."
          value={education.description}
          onChange={e => handleInputChange(e as any, index)}
          className='mb-2 w-full'
        />
            <Button 
        type="default" 
        icon={<DeleteOutlined />} 
        onClick={() => handleDeleteEducation(index)} 
        className="mr-2 bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
    >
        删除
    </Button>
        </div>
        ))}
      <Button 
          type="default" 
          icon={<PlusOutlined />} 
          onClick={addEducation}
          className="bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800"
      >
          添加
      </Button>

    </div>
);

export default EducationInfo;



