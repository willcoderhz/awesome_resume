import React from 'react';

const ResumeModel_C = ({ userInfo }) => {
    return (
        <div className="fixed top-0 right-0 h-full w-45 bg-gray-100 p-8 overflow-y-auto shadow-sm">
            <h1 className="text-4xl font-light mb-6 text-black">{userInfo.name}</h1>
        
            <div className="mb-8 flex flex-wrap space-x-2 text-gray-700">
                <p className="mr-3"><i className="fas fa-phone-alt"></i> {userInfo.phone}</p>
                <p className="mr-3"><i className="fas fa-envelope"></i> {userInfo.email}</p>
                <p className="mr-3"><i className="fas fa-user"></i> {userInfo.sex}</p>
                <p className="mr-3"><i className="fas fa-map-marker-alt"></i> {userInfo.city}</p>
                <p><i className="fas fa-birthday-cake"></i> {userInfo.age}</p>
            </div>
        
            <section className="mb-8">
                <h2 className="text-2xl font-thin text-black mb-2">自我介绍</h2>
                <p className="text-gray-700 leading-snug">{userInfo.introduction}</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin text-black mb-2">教育背景</h2>
                {userInfo.educations && userInfo.educations.map((education, index) => (
                    <p key={index} className="text-gray-700 mb-2">
                        {education.school} | {education.major} | {education.degree} | {education.graduationDate}
                    </p>
                ))}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin text-black mb-2">工作经历</h2>
                {userInfo.workExperiences && userInfo.workExperiences.map((work, index) => (
                    <div key={index} className="mb-4">
                        <p className="font-medium text-gray-800 mb-1">{work.companyName} | {work.title} | {work.workTime}</p>
                        <p className="text-gray-700">{work.workExperience}</p>
                    </div>
                ))}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin text-black mb-2">项目经验</h2>
                {userInfo.projects && userInfo.projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <p className="font-medium text-gray-800 mb-1">{project.projectName} | {project.projectTime}</p>
                        <p className="text-gray-700">{project.projectDescription}</p>
                    </div>
                ))}
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin text-black mb-2">相关链接</h2>
                {userInfo.links && userInfo.links.map((link, index) => (
                    <p key={index} className="text-gray-700 hover:text-gray-800 transition">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                    </p>
                ))}
            </section>
        </div>
    );
};

export default ResumeModel_C;
