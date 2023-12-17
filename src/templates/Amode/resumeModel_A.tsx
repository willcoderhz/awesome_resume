import React, { useState, useEffect} from 'react';
import { Typography, Divider, Row, Col, Tag } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined, EnvironmentOutlined, CalendarOutlined, WechatOutlined, IdcardOutlined, PictureOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { Title, Paragraph, Text } = Typography;

const ResumeModel_A = ({ userInfo }) => {
    const basicInfo=useSelector(state=>state.basicInfo);
    const workExperiences = useSelector(state => state.workExperiences);
    const links = useSelector(state => state.links);
    const skills=useSelector(state=>state.skills);
    const personalProjects = useSelector(state => state.personalProjects);
    const educations = useSelector(state => state.educations);  

    useEffect(() => {
        // 设置一个定时器，60秒后执行
        const timer = setTimeout(() => {
            // 聚合所有状态并打印
            const allState = {
                basicInfo,
                workExperiences,
                links,
                skills,
                personalProjects,
                educations,
            };
            console.log('All State after 60 seconds:', allState);
        }, 10000); // 60000 毫秒 = 60 秒

        // 清除定时器的清理函数
        return () => clearTimeout(timer);
    }, [basicInfo, workExperiences, links, skills, personalProjects, educations]);

    return (
        <div >
            <Title level={1} className="text-gray-800 mb-5">{userInfo.name}</Title>

            <Row gutter={16} className="mb-8">
                <Col><Tag icon={<IdcardOutlined />} color="black">{basicInfo.position}</Tag></Col>
                <Col><Tag icon={<PhoneOutlined />} color="black">{basicInfo.phone}</Tag></Col>
                <Col><Tag icon={<CalendarOutlined />} color="black">{basicInfo.age}</Tag></Col>
                <Col><Tag icon={<EnvironmentOutlined />} color="black">{basicInfo.city}</Tag></Col>
                <Col><Tag icon={<MailOutlined />} color="black">{basicInfo.email}</Tag></Col>
                <Col><Tag icon={<WechatOutlined />} color="black">{basicInfo.wechat}</Tag></Col>
                <Col><Tag icon={<UserOutlined />} color="black">{basicInfo.name}</Tag></Col>
                <Col> {basicInfo.photo && <img src={basicInfo.photo} alt="Profile" className="w-20  object-cover rounded-md" />}</Col>
            </Row>

            <Title level={3} className="text-gray-800 mb-3">自我介绍</Title>
            <Paragraph className="text-gray-700 mb-8">{userInfo.introduction}</Paragraph>

            <Title level={3} className="text-gray-800 mb-3">教育背景</Title>
            {educations && educations.map((education, index) => (
                
                <div key={index} className="mb-8">
                  <Text className="text-lg block mb-2 font-semibold text-gray-800">{education.school} &nbsp;| &nbsp;{education.major} &nbsp;| &nbsp;{education.degree}&nbsp;| &nbsp;
                  {education.dateRange && education.dateRange.length >= 2 ?`${education.dateRange[0].format('YYYY-MM-DD')} 至 ${education.dateRange[1].format('YYYY-MM-DD')}`: ""}</Text> 
                  <Paragraph className="text-base text-gray-700">{education.description}</Paragraph>
                </div>
              ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">工作经历</Title>
            {workExperiences && workExperiences.map((work, index) => (
                
        <div key={index} className="mb-8">
          <Text className="text-lg block mb-2 font-semibold text-gray-800">{work.companyName} &nbsp;| &nbsp;{work.jobTitle} &nbsp;| &nbsp;{work.city}&nbsp;| &nbsp;
          {work.dateRange && work.dateRange.length >= 2 ?`${work.dateRange[0].format('YYYY-MM-DD')} 至 ${work.dateRange[1].format('YYYY-MM-DD')}`: ""}</Text> 
          <Paragraph className="text-base text-gray-700">{work.description}</Paragraph>
        </div>
      ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">项目经验</Title>
            {personalProjects && personalProjects.map((project, index) => (
                
                <div key={index} className="mb-8">
                  <Text className="text-lg block mb-2 font-semibold text-gray-800">{project.projectName} &nbsp;| &nbsp;{project.dateRange && project.dateRange.length >= 2 ?`${project.dateRange[0].format('YYYY-MM-DD')} 至 ${project.dateRange[1].format('YYYY-MM-DD')}`: ""}&nbsp; </Text> 
                  <Paragraph className="text-gray-700">{project.description}</Paragraph>
                </div>
              ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">相关链接</Title>
            {links && links.map((link, index) => (
                
                <div key={index} className="mb-8">
                  <Text className="text-lg block mb-2 font-semibold text-gray-800">{link.name} &nbsp;| &nbsp;{link.url} &nbsp; </Text> 
                 
                </div>
              ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 ">专业技能</Title>
            {skills && skills.map((skill, index) => (
                
                <div key={index} className="mb-8">
                  <Text className="text-lg block mb-2 font-semibold text-gray-800">{skill.skillName} &nbsp;| &nbsp;{skill.dateRange && skill.dateRange.length >= 2 ?`${skill.dateRange[0].format('YYYY-MM-DD')} 至 ${skill.dateRange[1].format('YYYY-MM-DD')}`: ""}&nbsp; </Text> 
                  <Paragraph className="text-gray-700">{skill.description}</Paragraph>
                </div>
              ))}
              
        </div>
    );
};

export default ResumeModel_A;

