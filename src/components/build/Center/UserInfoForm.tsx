import React, { useState } from 'react';
import UserInfoFormView from './UesrInfoFormStructure';



const UserInfoForm = ({ onInfoChange }) => {
  const [educations, setEducations] = useState([{ school: '', major: '', degree: '', graduationDate: '' }]);
  const [workExperiences, setWorkExperiences] = useState([{ companyName: '', title: '', workTime: '', workExperience: '' }]);
  const [projects, setProjects] = useState([{ projectName: '', projectTime: '', projectDescription: '' }]);
  const [links, setLinks] = useState([{ url: '' }]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
  
    // 处理教育经历
    if (['school', 'major', 'degree', 'graduationDate'].includes(name)) {
      const newEducations = [...educations];
      newEducations[index][name] = value;
      setEducations(newEducations);
      onInfoChange(prevInfo => ({ ...prevInfo, educations: newEducations }));
    } 
    // 处理工作经历
    else if (['companyName', 'title', 'workTime', 'workExperience'].includes(name)) {
      const newWorkExperiences = [...workExperiences];
      newWorkExperiences[index][name] = value;
      setWorkExperiences(newWorkExperiences);
      onInfoChange(prevInfo => ({ ...prevInfo, workExperiences: newWorkExperiences }));
    } 
    else if (['projectName', 'projectTime', 'projectDescription'].includes(name)) {
      const newProjects = [...projects];
      newProjects[index][name] = value;
      setProjects(newProjects);
      onInfoChange(prevInfo => ({ ...prevInfo, projects: newProjects }));
    } 
    //处理链接
    else if(name === 'url'){
      const newLinks = [...links];
      newLinks[index][name] = value;
      setLinks(newLinks);
      onInfoChange(prevInfo => ({ ...prevInfo, links: newLinks }));
    }

    // 处理其他输入字段
    else {
      onInfoChange(prevInfo => ({ ...prevInfo, [name]: value }));
    }
  };

  const handleDeleteEducation = (indexToDelete) => {
    const newEducations = educations.filter((_, index) => index !== indexToDelete);
    setEducations(newEducations);
    onInfoChange(prevInfo => ({ ...prevInfo, educations: newEducations }));
};

  const addEducation = () => {
    setEducations([...educations, { school: '', major: '', degree: '', graduationDate: '' }]);
  };

  const handleDeleteWorkExperience = (indexToDelete) => {
    const newWorkExperiences = workExperiences.filter((_, index) => index !== indexToDelete);
    setWorkExperiences(newWorkExperiences);
    onInfoChange(prevInfo => ({ ...prevInfo, workExperiences: newWorkExperiences }));
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { companyName: '', title: '', workTime: '', workExperience: '' }]);
  };

  const addProject = () => {
    setProjects([...projects, { projectName: '', projectTime: '', projectDescription: '' }]);
  };

  const handleDeleteProject = (indexToDelete) => {
      const newProjects = projects.filter((_, index) => index !== indexToDelete);
      setProjects(newProjects);
  };
  
    const handleDeleteLink = (indexToDelete) => {
      const newLinks = links.filter((_, index) => index !== indexToDelete);
      setLinks(newLinks);
      onInfoChange(prevInfo => ({ ...prevInfo, links: newLinks }));
  };

  const addLink = () => {
      setLinks([...links, { url: '' }]);
  };

    const handleDragStart = (e, index) => {
      setDraggedItem(index);
  };

  const handleEducationDrop = (e, index) => {
    e.preventDefault();
  
    const list = [...educations];
    const draggedEducation = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedEducation);
  
    setEducations(list);
    onInfoChange(prevInfo => ({ ...prevInfo, educations: list }));
    setDraggedItem(null);
  };

  const handleWorkDrop = (e, index) => {
    e.preventDefault();
  
    const list = [...workExperiences];
    const draggedWork = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedWork);
  
    setWorkExperiences(list);
    onInfoChange(prevInfo => ({ ...prevInfo, workExperiences: list }));
    setDraggedItem(null);
  };

  const handleProjectDrop = (e, index) => {
    e.preventDefault();

    const list = [...projects];
    const draggedProject = list[draggedItem];
    list.splice(draggedItem, 1);
    list.splice(index, 0, draggedProject);

    setProjects(list);
    onInfoChange(prevInfo => ({ ...prevInfo, projects: list }));
    setDraggedItem(null);
};

const handleLinkDrop = (e, index) => {
  e.preventDefault();

  const list = [...links];
  const draggedLink = list[draggedItem];
  list.splice(draggedItem, 1);
  list.splice(index, 0, draggedLink);

  setLinks(list);
  onInfoChange(prevInfo => ({ ...prevInfo, links: list }));
  setDraggedItem(null);
};

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
      <UserInfoFormView 
          educations={educations}
          handleInputChange={handleInputChange}
          handleDeleteEducation={handleDeleteEducation}
          addEducation={addEducation}
          workExperiences={workExperiences}
          handleDeleteWorkExperience={handleDeleteWorkExperience}
          addWorkExperience={addWorkExperience}
          projects={projects}
          handleDeleteProject={handleDeleteProject}
          addProject={addProject}
          links={links}
          handleDeleteLink={handleDeleteLink}
          addLink={addLink}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleEducationDrop={handleEducationDrop}
          handleWorkDrop={handleWorkDrop}
          handleProjectDrop={handleProjectDrop}
          handleLinkDrop={handleLinkDrop}

      />
  );
};



export default UserInfoForm;
