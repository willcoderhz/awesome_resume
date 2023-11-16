import React, { useState } from 'react';
import { Button } from 'antd';


const ToggleButton = ({ showSelfIntroduction, toggleSelfIntroduction, showCertification, toggleCertification, showLanguage, toggleLanguage }) => {
  return (
    <>
    <h1 className="text-left text-xl font-bold mb-4 mt-5 pl-3">添加自定义模块</h1>
    <Button type="primary" className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10"  onClick={toggleSelfIntroduction}>
      {showSelfIntroduction ? '隐藏自我介绍' : '添加自我介绍'}
    </Button>
    <Button type="primary" className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10"  onClick={toggleCertification}>
      {showCertification ? '隐藏证书介绍' : '添加相关证书'}
    </Button>
    <Button type="primary" className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10"  onClick={toggleLanguage}>
      {showLanguage ? '隐藏语言能力' : '添加语言能力'}
    </Button>
    </>
  );
};

export default ToggleButton;