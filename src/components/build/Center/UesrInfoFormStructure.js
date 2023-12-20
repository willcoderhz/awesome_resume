import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
const UserInfoFormView = ({ handleInputChange, handleDeleteEducation, addEducation, educations, handleDragStart, handleEducationDrop, handleDragOver, handleDeleteWorkExperience, workExperiences, handleWorkDrop, addWorkExperience, handleDeleteProject, projects, handleProjectDrop, addProject, handleDeleteLink, links, handleLinkDrop, addLink }) => {
    const [components, setComponents] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    useEffect(() => {
        return () => {
            nextId = 0; // reset the id counter when the component unmounts
        };
    }, []);
    const addSelfIntroduction = () => {
        const key = nextId++;
        const newComponent = _jsx(SelfIntroduction, { id: key, handleInputChange: handleInputChange, handleDelete: () => deleteComponent(key) }, key);
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };
    const addCertification = () => {
        const key = nextId++;
        const newComponent = _jsx(Certification, { id: key, handleInputChange: handleCertificationChange, handleDelete: () => deleteComponent(key) }, key);
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };
    const addLanguage = () => {
        const key = nextId++;
        const newComponent = _jsx(Language, { id: key, handleInputChange: handleLanguageChange, handleDelete: () => deleteComponent(key) }, key);
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };
    const addHobby = () => {
        const key = nextId++;
        const newComponent = _jsx(Hobby, { id: key, handleInputChange: handleHobbyChange, handleDelete: () => deleteComponent(key) }, key);
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };
    const deleteComponent = (id) => {
        setComponents(prevComponents => prevComponents.filter(component => component.props.id !== id));
    };
    const handleCertificationChange = (newCertifications) => {
        setCertifications(newCertifications);
    };
    const handleLanguageChange = (newLanguages) => {
        setLanguages(newLanguages);
    };
    const handleHobbyChange = (newHobbies) => {
        setHobbies(newHobbies);
    };
    return (_jsx("div", { className: "ml-2 z-10 w-42 mr-4", children: _jsxs("div", { className: "userInfoInput", children: [_jsx(BasicInfo, { handleInputChange: handleInputChange }), _jsx(LinksInfo, { links: links, handleDragStart: handleDragStart, handleLinkDrop: handleLinkDrop, handleDragOver: handleDragOver, handleInputChange: handleInputChange, handleDeleteLink: handleDeleteLink, addLink: addLink }), _jsx(WorkingExperienceInfo, { workExperiences: workExperiences, handleDragStart: handleDragStart, handleWorkDrop: handleWorkDrop, handleDragOver: handleDragOver, handleInputChange: handleInputChange, handleDeleteWorkExperience: handleDeleteWorkExperience, addWorkExperience: addWorkExperience }), _jsx(SkillsInfo, { links: links, handleDragStart: handleDragStart, handleLinkDrop: handleLinkDrop, handleDragOver: handleDragOver, handleInputChange: handleInputChange, handleDeleteLink: handleDeleteLink, addLink: addLink }), _jsx(EducationInfo, { educations: educations, handleDragStart: handleDragStart, handleEducationDrop: handleEducationDrop, handleDragOver: handleDragOver, handleInputChange: handleInputChange, handleDeleteEducation: handleDeleteEducation, addEducation: addEducation }), _jsx(ProjectsInfo, { projects: projects, handleDragStart: handleDragStart, handleProjectDrop: handleProjectDrop, handleDragOver: handleDragOver, handleInputChange: handleInputChange, handleDeleteProject: handleDeleteProject, addProject: addProject }), _jsx("br", {}), components, _jsx(ToggleButton, { addSelfIntroduction: addSelfIntroduction, addCertification: addCertification, addLanguage: addLanguage, addHobby: addHobby })] }) }));
};
export default UserInfoFormView;
