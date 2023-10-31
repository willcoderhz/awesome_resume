import React, { useState } from 'react';
import Navbar from './Navbar';
import UserInfoForm from './UserInfoForm';
<<<<<<< HEAD
import ResumePreview from './resumeModel_A';
=======
import ResumePreview from '../../../templates/Amode/resumeModel_A';
>>>>>>> master



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
