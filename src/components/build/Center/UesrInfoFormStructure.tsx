import React from 'react';

import BasicInfo from './inputparts/BasicInfo';
import SelfIntroduction from './inputparts/SelfIntroductionInfo';
import EducationInfo from './inputparts/EducationInfo';
import WorkingExperienceInfo from './inputparts/WorkingExperienceInfo';
import ProjectsInfo from './inputparts/ProjectsInfo';
import LinksInfo from './inputparts/LinksInfo';
import SkillsInfo from './inputparts/SkillsInfo';

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

<SelfIntroduction   handleInputChange={handleInputChange} />
      </div>
    </div>
    );
};

export default UserInfoFormView;
