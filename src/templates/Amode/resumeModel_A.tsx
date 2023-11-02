import React from 'react';
import { Typography, Divider, Row, Col, Tag } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined, EnvironmentOutlined, GiftFilled } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ResumeModel_A = ({ userInfo }) => {
    return (
        <div >
            <Title level={1} className="text-gray-800 mb-5">{userInfo.name}</Title>

            <Row gutter={16} className="mb-8">
            <Col><Tag icon={<PhoneOutlined />} color="black">{userInfo.phone}</Tag></Col>
            <Col><Tag icon={<MailOutlined />} color="black">{userInfo.email}</Tag></Col>
            <Col><Tag icon={<UserOutlined />} color="black">{userInfo.sex}</Tag></Col>
            <Col><Tag icon={<EnvironmentOutlined />} color="black">{userInfo.city}</Tag></Col>
            <Col><Tag icon={<GiftFilled />} color="black">{userInfo.age}</Tag></Col>
            </Row>

            <Title level={3} className="text-gray-800 mb-3">自我介绍</Title>
            <Paragraph className="text-gray-700 mb-8">{userInfo.introduction}</Paragraph>

            <Title level={3} className="text-gray-800 mb-3">教育背景</Title>
            {userInfo.educations && userInfo.educations.map((education, index) => (
                <Text key={index} className="block mb-6 text-gray-700 leading-relaxed">
                    <strong>{education.school}</strong> | {education.major} | {education.degree} | {education.graduationDate}
                </Text>
            ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">工作经历</Title>
            {userInfo.workExperiences && userInfo.workExperiences.map((work, index) => (
                <div key={index} className="mb-8">
                    <Text className="block mb-2 font-semibold text-gray-800">{work.companyName} | {work.title} | {work.workTime}</Text>
                    <Paragraph className="text-gray-700">{work.workExperience}</Paragraph>
                </div>
            ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">项目经验</Title>
            {userInfo.projects && userInfo.projects.map((project, index) => (
                <div key={index} className="mb-8">
                    <Text className="block mb-2 font-semibold text-gray-800">{project.projectName} | {project.projectTime}</Text>
                    <Paragraph className="text-gray-700">{project.projectDescription}</Paragraph>
                </div>
            ))}

            <Divider className="my-5" />

            <Title level={3} className="text-gray-800 mb-3">相关链接</Title>
            {userInfo.links && userInfo.links.map((link, index) => (
                <Text key={index} className="block mb-6 text-blue-600 hover:text-blue-800">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                </Text>
            ))}
        </div>
    );
};

export default ResumeModel_A;


