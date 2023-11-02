import React, { useState } from 'react';
import Navbar from '../../components/build/LeftSidebar/Navbar';
import UserInfoForm from '../../components/build/Center/UserInfoForm';
import ResumePreview from '../../components/build/RightSidebar/resumePreview';
import EditorHeader from '../../components/build/Top/EditorHeader';

const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
   <div>
      <EditorHeader />
      <div className="flex">
        <Navbar />
        <UserInfoForm onInfoChange={setUserInfo} />
        <ResumePreview userInfo={userInfo} />
      </div>
    </div>
  );
};

export default ResumeEditor;
