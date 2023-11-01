import React, { useState } from 'react';
import Navbar from '../../components/build/LeftSidebar/Navbar';
import UserInfoForm from '../../components/build/Center/UserInfoForm';
import TemplateSwitcher from '../../templates/TemplateSwitcher'; 


const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div >
      <Navbar  />
      <UserInfoForm onInfoChange={setUserInfo}  />
      <TemplateSwitcher userInfo={userInfo} />
    </div>
  );
};

export default ResumeEditor;
