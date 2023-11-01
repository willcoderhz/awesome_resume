import React from 'react';

const ResumeModel_A = ({ userInfo }) => {
    return (
        <div className="fixed top-0 right-0 h-full w-45 bg-white p-8 overflow-y-auto shadow-2xl border-l-2 border-gray-300">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 pb-4">{userInfo.name}</h1>
    
        <div className="mb-10 flex items-center space-x-0 text-gray-600 border-b border-gray-300 pb-2">
            <p className="flex items-center space-x-0">
                <i className="fas fa-phone-alt"></i>
                <span>{userInfo.phone}</span>
            </p>
            <p className="flex items-center space-x-3">
                <i className="fas fa-envelope"></i>
                <span>{userInfo.email}</span>
            </p>
            <p className="flex items-center space-x-3">
                <i className="fas fa-user"></i>
                <span>{userInfo.sex}</span>
            </p>
            <p className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt"></i>
                <span>{userInfo.city}</span>
            </p>
            <p className="flex items-center space-x-3">
                <i className="fas fa-birthday-cake"></i>
                <span>{userInfo.age}</span>
            </p>
        </div>
    
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-300">自我介绍</h3>
        <p className="mb-10 text-gray-700 leading-relaxed">{userInfo.introduction}</p>
    
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-300">教育背景</h3>
        {userInfo.educations && userInfo.educations.map((education, index) => (
            <div key={index} className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                    {education.school}&nbsp; | &nbsp;
                    {education.major}&nbsp; | &nbsp;
                    {education.degree}&nbsp; | &nbsp;
                    {education.graduationDate}
                </p>
            </div>
        ))}
    
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-300">工作经历</h3>
        {userInfo.workExperiences && userInfo.workExperiences.map((work, index) => (
            <div key={index} className="mb-8">
                <p className="mb-2 font-semibold text-gray-800">{work.companyName}&nbsp; | &nbsp;{work.title}&nbsp; | &nbsp;{work.workTime}</p>
                <p className="text-gray-700 leading-relaxed">{work.workExperience}</p>
            </div>
        ))}
    
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-300">项目经验</h3>
        {userInfo.projects && userInfo.projects.map((project, index) => (
            <div key={index} className="mb-8">
                <p className="mb-2 font-semibold text-gray-800">{project.projectName}&nbsp; | &nbsp;{project.projectTime}</p>
                <p className="text-gray-700 leading-relaxed">{project.projectDescription}</p>
            </div>
        ))}
    
        <h3 className="text-3xl font-semibold mb-4 text-gray-800 pb-2 border-b border-gray-300">相关链接</h3>
        {userInfo.links && userInfo.links.map((link, index) => (
            <div key={index} className="mb-8">
                <p className="text-gray-700 leading-relaxed hover:text-gray-800 transition">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                </p>
            </div>
        ))}
    </div>
    

    

    );
};

export default ResumeModel_A;


