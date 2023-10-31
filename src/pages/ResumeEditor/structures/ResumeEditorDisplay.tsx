import React, { useState } from 'react';
import Navbar from './Navbar';
import UserInfoForm from './UserInfoForm';
import ResumePreview from './resumeModel_A';



const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div >
      <Navbar  />
      <UserInfoForm onInfoChange={setUserInfo}  />
      <ResumePreview userInfo={userInfo}  />
    </div>
  );
};

export default ResumeEditor;
