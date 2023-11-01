// WorkingExperienceInfo.tsx
import React from 'react';

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
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md ml-0 w-2/5">
    <h3 className="text-xl font-semibold mb-4 ml-1">工作经历</h3>
    {workExperiences.map((work, index) => (
        <div 
            key={index} 
            draggable 
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleWorkDrop(e, index)}
            onDragOver={handleDragOver}
            className="mb-4"
        >
            <input 
                name="companyName" 
                placeholder="公司名称" 
                value={work.companyName}
                onChange={e => handleInputChange(e, index)}
                className='border rounded p-2 w-30 mb-2 mx-1'
            />
            <input 
                name="title" 
                placeholder="职位" 
                value={work.title}
                onChange={e => handleInputChange(e, index)}
                className='border rounded p-2 w-30 mb-2 mx-1'
            />
            <input 
                name="workTime" 
                placeholder="工作时间" 
                value={work.workTime}
                onChange={e => handleInputChange(e, index)}
                className='border rounded p-2 w-30 mb-2 mx-1'
            />
            <textarea 
                name="workExperience" 
                placeholder="描述您的工作经验" 
                value={work.workExperience}
                onChange={e => handleInputChange(e, index)}
                className='border rounded p-2  w-full mb-2 mx-1 h-16'
            />
            <button 
                onClick={() => handleDeleteWorkExperience(index)}
                className="mx-2 bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-1 px-1 rounded focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
            >
                删除
            </button>
        </div>
    ))}
    <button 
        onClick={addWorkExperience}
        className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-1 px-1 rounded focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
    >
        添加
    </button>
</div>

);

export default WorkingExperienceInfo;
