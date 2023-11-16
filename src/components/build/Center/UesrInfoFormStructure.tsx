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
  const [showSelfIntroduction, setShowSelfIntroduction] = useState(false);
  const [showCertification, setShowCertification] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);


  const [certifications, setCertifications] = useState<string[]>([]);

  const toggleSelfIntroduction = () => {
    setShowSelfIntroduction(!showSelfIntroduction);
  };

  const toggleCertification = () => {
    setShowCertification(!showCertification);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
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


{showSelfIntroduction && <SelfIntroduction handleInputChange={handleInputChange} />}
<br />
{showCertification && <Certification handleInputChange={handleCertificationChange} />}
<br />
{showLanguage && <Language handleInputChange={handleInputChange} />}
<br />





      <ToggleButton
          showSelfIntroduction={showSelfIntroduction}
          toggleSelfIntroduction={toggleSelfIntroduction}
          showCertification={showCertification}
          toggleCertification={toggleCertification}
          showLanguage={showLanguage}
          toggleLanguage={toggleLanguage}
        />
      
        
      </div>
    </div>
    );
};

export default UserInfoFormView;
