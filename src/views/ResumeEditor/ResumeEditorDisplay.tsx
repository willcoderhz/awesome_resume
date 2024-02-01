import React, { useState } from 'react';
import Navbar from '../../components/build/LeftSidebar/Navbar';
import UserInfoForm from '../../components/build/Center/UserInfoForm';
import ResumePreview from '../../components/build/RightSidebar/resumePreview';
import EditorHeader from '../../components/build/Top/EditorHeader';

import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '../../store/reducers';
import { GlobalState } from '../../store/types';

import store from '../../store/store';
import { Provider } from 'react-redux';



const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
   <div>
     <Provider store={store}>
      <EditorHeader />
      <div className="flex">
        <Navbar />
        
        <UserInfoForm onInfoChange={setUserInfo} />
        <ResumePreview userInfo={userInfo} />
       
      </div>
      </Provider>
    </div>
  );
};

export default ResumeEditor;