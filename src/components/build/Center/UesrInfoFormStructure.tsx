import React, { useState } from 'react';

import BasicInfo from './inputparts/BasicInfo';
import SelfIntroduction from './inputparts/SelfIntroductionInfo';
import EducationInfo from './inputparts/EducationInfo';
import WorkingExperienceInfo from './inputparts/WorkingExperienceInfo';
import ProjectsInfo from './inputparts/ProjectsInfo';
import LinksInfo from './inputparts/LinksInfo';
import SkillsInfo from './inputparts/SkillsInfo';
import ToggleButton from './ToggleButton';
import Certification from './inputparts/Certification';
import Language from './inputparts/Language';

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

  const addSelfIntroduction = () => {
    const key = components.length;
    const newComponent = <SelfIntroduction key={key} handleInputChange={handleInputChange} handleDelete={() => deleteComponent(key)} />;
    setComponents([...components, newComponent]);
  };

  const addCertification = () => {
    const key = components.length;
    const newComponent = <Certification key={key} handleInputChange={handleInputChange} handleDelete={() => deleteComponent(key)}/>;
    setComponents([...components, newComponent]);
  };

  const addLanguage = () => {
    const key = components.length;
    const newComponent = <Language key={key} handleInputChange={handleInputChange} handleDelete={() => deleteComponent(key)}/>;
    setComponents([...components, newComponent]);
  };

  const deleteComponent = (key: number) => {
    setComponents(components.filter((_, index) => index !== key));
  };

  const handleCertificationChange = (newCertifications: string[]) => {
    setCertifications(newCertifications);
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


    {components.map((component, index) => (
        React.cloneElement(component, { key: index })
      ))}

      <ToggleButton
        addSelfIntroduction={addSelfIntroduction}
        addCertification={addCertification}
        addLanguage={addLanguage}
      />
      
        
      </div>
    </div>
    );
};

export default UserInfoFormView;
