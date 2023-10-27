import React from 'react';
import styles from './ResumeEditor.module.css';
import './ResumePreviewStyles.css';

const ResumePreview = ({ userInfo }) => {
    return (
        <div className={styles.resumePreview}>
            <div className="resumeContent">
                <h1>{userInfo.name}</h1>
                <div className="contactInfo">
                    <p>{userInfo.phone}</p>
                    <p>{userInfo.email}</p>
                    <p>{userInfo.sex}</p>
                    <p>{userInfo.city}</p>
                    <p>{userInfo.age}</p>
                </div>

                <h3>自我介绍</h3>
                <p>{userInfo.introduction}</p>

                <h3>教育背景</h3>
                <div>
                {userInfo.educations && userInfo.educations.map((education, index) => (
                    <p key={index}>
                        {education.school}&nbsp;&nbsp;&nbsp;
                        {education.major}&nbsp;&nbsp;&nbsp;
                        {education.degree}&nbsp;&nbsp;&nbsp;
                        {education.graduationDate}
                    </p>
                ))}
                </div>


                
                <h3>工作经历</h3>
                {userInfo.workExperiences && userInfo.workExperiences.map((work, index) => (
                    <div key={index}>
                        <p>{work.companyName}&nbsp;&nbsp;&nbsp;{work.title}&nbsp;&nbsp;&nbsp;{work.workTime}</p>
                        <p>{work.workExperience}</p>
                    </div>
                ))}

                <h3>项目经验</h3>
                {userInfo.projects && userInfo.projects.map((project, index) => (
                    <div key={index}>
                        <p>{project.projectName}&nbsp;&nbsp;&nbsp;{project.projectTime}</p>
                        <p>{project.projectDescription}</p>
                    </div>
                ))}

                <h3>相关链接</h3>
                <div>
                {userInfo.links && userInfo.links.map((link, index) => (
                    <p key={index}>
                        {link.url}
                    </p>
                ))}
                </div>
             
            </div>
        </div>
    );
};


export default ResumePreview;
