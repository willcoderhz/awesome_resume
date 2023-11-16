import React, { useState } from 'react';
import ResumeModel_A from './Amode/resumeModel_A';
import ResumeModel_B from './Bmode/resumeModel_B';


const TemplateSwitcher = ({ userInfo }) => {
  const [currentTemplate, setCurrentTemplate] = useState('C');

  let ResumeComponent;
  switch (currentTemplate) {
    case 'A':
      ResumeComponent = ResumeModel_A;
      break;
    case 'B':
      ResumeComponent = ResumeModel_B;
      break;


    default:
      ResumeComponent = ResumeModel_A;
      break;
  }

  return (
    <div>
      {/* 这里可以添加切换模板的按钮或其他逻辑
      <div className="flex justify-start space-x-6 pl-6">
  <button
    className="ml-24 py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
    onClick={() => setCurrentTemplate('A')}
  >
    选择模板A
  </button>
  <button
    className="py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
    onClick={() => setCurrentTemplate('B')}
  >
    选择模板B
  </button>
  <button
    className="py-2 px-5 border-2 border-gray-500 text-gray-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
    onClick={() => setCurrentTemplate('C')}
  >
    选择模板C
  </button>
</div>*/}


      <ResumeComponent userInfo={userInfo} />
    </div>
  );
}

export default TemplateSwitcher;
