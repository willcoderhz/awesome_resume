import React, { useState } from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addIntroduction, addCertifications, addLanguageSkill} from '../../../store/actions';

const ToggleButton = ({ addSelfIntroduction, addCertification, addLanguage, addHobby }) => {
  const dispatch = useDispatch();
  const introductions = useSelector(state => state.introductions); 
  const certifications = useSelector(state => state.certifications);
  const languageSkills = useSelector(state => state.languages);

  const handleAddSelfIntroduction = () => {
    if (!introductions || introductions.length === 0) {
      dispatch(addIntroduction({ key: '0', content: '这是我的自我介绍...' }));
      if (addSelfIntroduction) {
        addSelfIntroduction();
      }
    } else {
      alert('已存在自我介绍，无法添加更多。');
    }
  };

  const handleAddCertification = () => {
    if (!certifications || certifications.length === 0) {
      dispatch(addCertifications({ key: '0', name: 'CET-4, PMP证书' })); // 示例证书信息
      if (addCertification) {
        addCertification();
      }
    } else {
      alert('已存在证书，无法添加更多。');
    }
  };

  const handleAddLanguageSkill = () => {
    if (!languageSkills || languageSkills.length === 0) {
      dispatch(addLanguageSkill({ key: '0', name: '熟练运用英文，普通话母语' })); // 示例语言能力信息
      if (addLanguage) {
        addLanguage();
      }
    } else {
      alert('已存在语言能力，无法添加更多。');
    }
  };


  return (
    <>
      <h1 className="text-left text-xl font-bold mb-4 mt-5 pl-3">添加自定义模块</h1>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={handleAddSelfIntroduction}>
        添加自我介绍
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={handleAddCertification}>
        添加相关证书
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={handleAddLanguageSkill}>
        添加语言能力
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addHobby}>
        添加个人爱好
      </Button>
    </>
  );
};

export default ToggleButton;