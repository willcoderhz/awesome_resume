import React, { useState } from 'react';
import styles from './ResumeEditor.module.css';
import './UserInfoFormStyles.css';  




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
    <div className={styles.userInfoForm}>
      <div className="userInfoInput">
        <h3>基本信息</h3>
        <input name="name" placeholder="姓名" onChange={handleInputChange} className='Name'/>
        <input name="phone" placeholder="联系电话" onChange={handleInputChange} className='Phone'/>
        <input name="email" placeholder="邮箱" onChange={handleInputChange} className='Email'/>
        <input name="sex" placeholder="性别" onChange={handleInputChange} className='Sex'/>
        <input name="city" placeholder="城市" onChange={handleInputChange} className='City'/>
        <input name="age" placeholder="年龄" onChange={handleInputChange} className='Age'/>

        
        <h3>自我介绍</h3>
        <textarea name="introduction" placeholder="简短地描述自己" onChange={handleInputChange} />

        <h3>教育背景</h3>
        {educations.map((education, index) => (
          <div key={index} 
          draggable 
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleEducationDrop(e, index)}
          onDragOver={handleDragOver}>
            <input 
              className="school" 
              name="school" 
              placeholder="学校" 
              value={education.school}
              onChange={e => handleInputChange(e, index)} 
            />
            <input 
              className="major" 
              name="major" 
              placeholder="专业" 
              value={education.major}
              onChange={e => handleInputChange(e, index)} 
            />
            <input 
              className="degree" 
              name="degree" 
              placeholder="学位" 
              value={education.degree}
              onChange={e => handleInputChange(e, index)} 
            />
            <input 
              className="graduationDate" 
              name="graduationDate" 
              placeholder="毕业时间" 
              value={education.graduationDate}
              onChange={e => handleInputChange(e, index)} 
            />
            <button onClick={() => handleDeleteEducation(index)}>删除</button>
          </div>
        ))}
        <button onClick={addEducation}>添加</button>

        
      <h3>工作经历</h3>
      {workExperiences.map((work, index) => (
        <div key={index} 
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleWorkDrop(e, index)}
        onDragOver={handleDragOver}>
          <input 
            className="companyName" 
            name="companyName" 
            placeholder="公司名称" 
            value={work.companyName}
            onChange={e => handleInputChange(e, index)} 
          />
          <input 
            className="title" 
            name="title" 
            placeholder="职位" 
            value={work.title}
            onChange={e => handleInputChange(e, index)} 
          />
          <input 
            className="workTime" 
            name="workTime" 
            placeholder="工作时间" 
            value={work.workTime}
            onChange={e => handleInputChange(e, index)} 
          />
          <textarea 
            className="workExperience" 
            name="workExperience" 
            placeholder="描述您的工作经验" 
            value={work.workExperience}
            onChange={e => handleInputChange(e, index)} 
          />
          <button onClick={() => handleDeleteWorkExperience(index)}>删除</button>
        </div>
      ))}
      <button onClick={addWorkExperience}>添加</button>

      <h3>项目经验</h3>
{projects.map((project, index) => (
    <div key={index} 
    draggable 
    onDragStart={(e) => handleDragStart(e, index)}
    onDrop={(e) => handleProjectDrop(e, index)}
    onDragOver={handleDragOver}>
        <input 
            className="projectName" 
            name="projectName" 
            placeholder="项目名称" 
            value={project.projectName}
            onChange={e => handleInputChange(e, index)} 
        />
        <input 
            className="projectTime" 
            name="projectTime" 
            placeholder="项目时间" 
            value={project.projectTime}
            onChange={e => handleInputChange(e, index)} 
        />
        <textarea 
            className='projectDescription' 
            name="projectDescription" 
            placeholder="描述您参与过的项目" 
            value={project.projectDescription}
            onChange={e => handleInputChange(e, index)} 
        />
        <button onClick={() => handleDeleteProject(index)}>删除</button>
    </div>
))}
<button onClick={addProject}>添加</button>

      <h3>相关链接</h3>
      {links.map((link, index) => (
        <div key={index} 
            draggable 
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleLinkDrop(e, index)}
            onDragOver={handleDragOver}>
          <input 
            className='links' 
            name="url" 
            placeholder="请输入相关链接   http://......" 
            value={link.url}
            onChange={e => handleInputChange(e, index)} 
          />
          <button onClick={() => handleDeleteLink(index)}>删除</button>
        </div>
      ))}
      <button onClick={addLink}>添加链接</button>
      </div>
    </div>
  );
};



export default UserInfoForm;
