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

  const addSelfIntroduction = () => {
    const key = nextId++;
    const newComponent = <SelfIntroduction id={key} key={key} handleInputChange={handleInputChange} handleDelete={() => deleteComponent(key)} />;
    setComponents(prevComponents => [...prevComponents, newComponent]);
  };
  
  const addCertification = () => {
    const key = nextId++;
    const newComponent = <Certification id={key} key={key} handleInputChange={handleCertificationChange} handleDelete={() => deleteComponent(key)}/>;
    setComponents(prevComponents => [...prevComponents, newComponent]);
  };
  
  const addLanguage = () => {
    const key = nextId++;
    const newComponent = <Language id={key} key={key} handleInputChange={handleLanguageChange} handleDelete={() => deleteComponent(key)}/>;
    setComponents(prevComponents => [...prevComponents, newComponent]);
  };

  const addHobby = () => {
    const key = nextId++;
    const newComponent = <Hobby id={key} key={key} handleInputChange={handleHobbyChange} handleDelete={() => deleteComponent(key)}/>;
    setComponents(prevComponents => [...prevComponents, newComponent]);
  }
  
  const deleteComponent = (id: number) => {
    setComponents(prevComponents => prevComponents.filter(component => component.props.id !== id));
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
      <div className="ml-0 z-10 w-45">
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
