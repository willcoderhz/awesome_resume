import React, { useState } from 'react';
import Navbar from './Navbar';
import UserInfoForm from './UserInfoForm';
import ResumePreview from './ResumePreview';

import styles from './ResumeEditor.module.css';

const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className={styles.resumeEditor}>
      <Navbar className={styles.navbar} />
      <UserInfoForm onInfoChange={setUserInfo} className={styles.userInfoForm} />
      <ResumePreview userInfo={userInfo} className={styles.resumePreview} />
    </div>
  );
};

export default ResumeEditor;
