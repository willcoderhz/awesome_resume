import React from 'react';

interface Education {
  school: string;
  major: string;
  degree: string;
  graduationDate: string;
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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md ml-0 w-2/5">
    <h3 className="text-xl font-semibold mb-4 ml-1">教育背景</h3>
    {educations.map((education, index) => (
      <div 
        key={index} 
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleEducationDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4"
      >
        <input 
          name="school" 
          placeholder="学校" 
          value={education.school}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 w-20 mb-2 mx-1' 
        />
        <input 
          name="major" 
          placeholder="专业" 
          value={education.major}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 w-20 mb-2 mx-1' 
        />
        <input 
          name="degree" 
          placeholder="学位" 
          value={education.degree}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 w-20 mb-2 mx-1' 
        />
        <input 
          name="graduationDate" 
          placeholder="毕业时间" 
          value={education.graduationDate}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 w-20 mb-2 mx-1' 
        />
        <button 
    onClick={() => handleDeleteEducation(index)}
    className="mx-2 bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-1 px-1 rounded focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
>
    删除
</button>

      </div>
    ))}
    <button 
      onClick={addEducation}
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold  text-sm py-1 px-1 rounded focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
    >
      添加
    </button>
</div>

);

export default EducationInfo;
