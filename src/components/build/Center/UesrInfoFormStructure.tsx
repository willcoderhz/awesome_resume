import React, { useState } from 'react';
import { useEffect } from 'react';

import BasicInfo from './inputparts/BasicInfo';
import SelfIntroduction from './inputparts/customized/SelfIntroductionInfo';
import EducationInfo from './inputparts/EducationInfo';
import WorkingExperienceInfo from './inputparts/WorkingExperienceInfo';
import ProjectsInfo from './inputparts/ProjectsInfo';
import LinksInfo from './inputparts/LinksInfo';
import SkillsInfo from './inputparts/SkillsInfo';
import ToggleButton from './ToggleButton';
import Certification from './inputparts/customized/Certification';
import Language from './inputparts/customized/Language';
import Hobby from './inputparts/customized/Hobby';

let nextId = 0;

const UserInfoFormView = ({
    handleInputChange,
    handleDeleteEducation,
    addEducation,
    educations,
    handleDragStart,
    handleEducationDrop,
    handleDragOver,
    handleDeleteWorkExperience,
    workExperiences,
    handleWorkDrop,
    addWorkExperience,
    handleDeleteProject,
    projects,
    handleProjectDrop,
    addProject,
    handleDeleteLink,
    links,
    handleLinkDrop,
    addLink
}) => {
  const [components, setComponents] = useState([]);
  const [certifications, setCertifications] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      nextId = 0; // reset the id counter when the component unmounts
    };
  }, []);

  const [selfIntroductionAdded, setSelfIntroductionAdded] = useState(false);
  const [certificationAdded, setCertificationAdded] = useState(false);
  const [languageAdded, setLanguageAdded] = useState(false);
  const [hobbyAdded, setHobbyAdded] = useState(false);

  useEffect(() => {
    return () => {
      nextId = 0; // reset the id counter when the component unmounts
      setSelfIntroductionAdded(false); // 重置自我介绍已添加的状态
      setCertificationAdded(false);
      setLanguageAdded(false);
      setHobbyAdded(false);
    };
  }, []);

  const addSelfIntroduction = () => {
    if (!selfIntroductionAdded) {
      const key = nextId++;
      const newComponent = <SelfIntroduction id={key} key={key} handleInputChange={handleInputChange} handleDelete={() => deleteComponent(key)} />;
      setComponents(prevComponents => [...prevComponents, newComponent]);
      setSelfIntroductionAdded(true);
    }
  };
  
  const addCertification = () => {
    if (!certificationAdded) {
      const key = nextId++;
      const newComponent = <Certification id={key} key={key} handleInputChange={handleCertificationChange} handleDelete={() => deleteComponent(key)}/>;
      setComponents(prevComponents => [...prevComponents, newComponent]);
      setCertificationAdded(true);
    }
  };
  
  const addLanguage = () => {
    if (!languageAdded) {
      const key = nextId++;
      const newComponent = <Language id={key} key={key} handleInputChange={handleLanguageChange} handleDelete={() => deleteComponent(key)}/>;
      setComponents(prevComponents => [...prevComponents, newComponent]);
      setLanguageAdded(true);
    }
  };

  const addHobby = () => {
    if (!hobbyAdded) {
      const key = nextId++;
      const newComponent = <Hobby id={key} key={key} handleInputChange={handleHobbyChange} handleDelete={() => deleteComponent(key)}/>;
      setComponents(prevComponents => [...prevComponents, newComponent]);
      setHobbyAdded(true);
    }
  };
  
  const deleteComponent = (id: number) => {
    setComponents(prevComponents => {
      // 检查是否是自我介绍、证书、语言或爱好组件
      const isSelfIntroduction = prevComponents.some(component => component.type === SelfIntroduction && component.props.id === id);
      const isCertification = prevComponents.some(component => component.type === Certification && component.props.id === id);
      const isLanguage = prevComponents.some(component => component.type === Language && component.props.id === id);
      const isHobby = prevComponents.some(component => component.type === Hobby && component.props.id === id);

      if (isSelfIntroduction) {
        setSelfIntroductionAdded(false);
      }
      if (isCertification) {
        setCertificationAdded(false);
      }
      if (isLanguage) {
        setLanguageAdded(false);
      }
      if (isHobby) {
        setHobbyAdded(false);
      }

      // 删除指定的组件
      return prevComponents.filter(component => component.props.id !== id);
    });
  };

  const handleCertificationChange = (newCertifications: string[]) => {
    setCertifications(newCertifications);
  };

  const handleLanguageChange = (newLanguages: string[]) => {
    setLanguages(newLanguages);
  };

  const handleHobbyChange = (newHobbies: string[]) => {
    setHobbies(newHobbies);
  };

      return (
      <div className="ml-2 z-10 w-42 mr-4">
      <div className="userInfoInput">

      <BasicInfo handleInputChange={handleInputChange} />

      <LinksInfo
      links={links}
      handleDragStart={handleDragStart}
      handleLinkDrop={handleLinkDrop}
      handleDragOver={handleDragOver}
      handleInputChange={handleInputChange}
      handleDeleteLink={handleDeleteLink}
      addLink={addLink}
      />
      

      <WorkingExperienceInfo
      workExperiences={workExperiences}
      handleDragStart={handleDragStart}
      handleWorkDrop={handleWorkDrop}
      handleDragOver={handleDragOver}
      handleInputChange={handleInputChange}
      handleDeleteWorkExperience={handleDeleteWorkExperience}
      addWorkExperience={addWorkExperience}
      />

      <SkillsInfo
      links={links}
      handleDragStart={handleDragStart}
      handleLinkDrop={handleLinkDrop}
      handleDragOver={handleDragOver}
      handleInputChange={handleInputChange}
      handleDeleteLink={handleDeleteLink}
      addLink={addLink}
      />

      <EducationInfo
      educations={educations}
      handleDragStart={handleDragStart}
      handleEducationDrop={handleEducationDrop}
      handleDragOver={handleDragOver}
      handleInputChange={handleInputChange}
      handleDeleteEducation={handleDeleteEducation}
      addEducation={addEducation}
      />
      
      <ProjectsInfo
      projects={projects}
      handleDragStart={handleDragStart}
      handleProjectDrop={handleProjectDrop}
      handleDragOver={handleDragOver}
      handleInputChange={handleInputChange}
      handleDeleteProject={handleDeleteProject}
      addProject={addProject}
      />

      <br />

      {components}

      <ToggleButton
      addSelfIntroduction={addSelfIntroduction}
      addCertification={addCertification}
      addLanguage={addLanguage}
      addHobby={addHobby}
      />
      
        
      </div>
    </div>
    );
};

export default UserInfoFormView;
