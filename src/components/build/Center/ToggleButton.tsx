import React, { useState } from 'react';
import { Button } from 'antd';

const ToggleButton = ({ addSelfIntroduction, addCertification, addLanguage, addHobby }) => {
  return (
    <>
      <h1 className="text-left text-xl font-bold mb-4 mt-5 pl-3">添加自定义模块</h1>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addSelfIntroduction}>
        添加自我介绍
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addCertification}>
        添加相关证书
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addLanguage}>
        添加语言能力
      </Button>
      <Button type="primary" className="mt-4 w-28 h-20 bg-white text-blue-500 hover:bg-blue-100 border-dashed border-blue-500 ml-3 mb-10" onClick={addHobby}>
        添加个人爱好
      </Button>
    </>
  );
};

export default ToggleButton;