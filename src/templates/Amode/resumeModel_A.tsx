import React, { useState, useEffect} from 'react';
import { Typography, Divider, Row, Col, Tag } from 'antd';
import { PhoneOutlined, MailOutlined, UserOutlined, EnvironmentOutlined, CalendarOutlined, WechatOutlined, IdcardOutlined, PictureOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const { Title, Paragraph, Text } = Typography;

const ResumeModel_A = ({ userInfo }) => {
    const basicInfo=useSelector(state=>state.basicInfo);
    const workExperiences = useSelector(state => state.workExperiences);
    const links = useSelector(state => state.links);
    const skills=useSelector(state=>state.skills);
    const personalProjects = useSelector(state => state.personalProjects);
    const educations = useSelector(state => state.educations);  
    const introductions=useSelector(state=>state.introductions);
    const certifications=useSelector(state=>state.certifications);
    const languageSkills=useSelector(state=>state.languages);
 

    const exportPDF = () => {
      const resumeElement = document.getElementById('resume');
      
      // 增加画布的缩放比例以提高清晰度
      const scale = 1; // 你可以调整这个值来提高清晰度

      // 获取元素的尺寸并计算缩放后的尺寸
      const width = resumeElement.offsetWidth;
      const height = resumeElement.offsetHeight;
      const scaledWidth = width * scale;
      const scaledHeight = height * scale;

      // 设置html2canvas的配置
      const canvasOptions = {
          scale: scale,
          width: scaledWidth,
          height: scaledHeight,
          useCORS: true // 如果有跨域图片的问题，可以尝试打开这个选项
      };

      html2canvas(resumeElement, canvasOptions).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({
              orientation: 'portrait',
              unit: 'px',
              format: [scaledWidth, scaledHeight]
          });
          pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
          pdf.save("resume.pdf");
      });
  }

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
                introductions
            };
            console.log('All State after 60 seconds:', allState);
        }, 10000); // 60000 毫秒 = 60 秒

        // 清除定时器的清理函数
        return () => clearTimeout(timer);
    }, [basicInfo, workExperiences, links, skills, personalProjects, educations]);

    return (
        <div >
          <div id="resume">
            

            <div className="bg-white p-5 relative"> {/* Removed flex classes here */}
  {/* Centered section for personal info in three rows */}
  <div className="flex flex-col justify-center items-center space-y-2 h-full">
    {/* First row */}
    <div className="flex items-center space-x-2">
    <div className=" text-black font-bold text-4xl rounded-lg py-4 flex items-center">
        {basicInfo.name}
      </div>
      <div className=" text-black  text-xl rounded-lg p-1 flex items-center">
     {basicInfo.position}
      </div>
      
    </div>
    {/* Second row */}
    <div className="flex items-center space-x-2">
    <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <PhoneOutlined className="mr-2" />{basicInfo.phone}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <CalendarOutlined className="mr-2" />{basicInfo.age}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <EnvironmentOutlined className="mr-2" />{basicInfo.city}
      </div>
    </div>
    {/* Third row */}
    <div className="flex items-center space-x-2">
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <MailOutlined className="mr-2" />{basicInfo.email}
      </div>
      <div className="bg-gray-100 text-black text-lg rounded-lg p-2 flex items-center">
        <WechatOutlined className="mr-2" />{basicInfo.wechat}
      </div>
    </div>
  </div>

  {/* Absolute positioned right bottom section for the profile image */}
  {basicInfo.photo && (
    <div className="absolute right-10 bottom-5">
      <img
        src={basicInfo.photo}
        alt="Profile"
        className=" h-40 object-cover  rounded-lg  border-gray-300"
      />
    </div>
  )}
</div>


            <div>
              {introductions && introductions.length > 0 && (
                <>
                  <Title level={3} className="bg-gray-50 text-gray-800 p-2">自我介绍</Title>
                  {introductions.map((introduction, index) => (
                    <div key={index} className="mb-8">
                      <div className="text-base text-gray-700 px-5" dangerouslySetInnerHTML={{ __html: introduction.content }} />
                    </div>
                  ))}
                </>
              )}
            </div>

            
       

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">教育背景</Title>
            {educations && educations.map((education, index) => (
                
                <div key={index} className="mb-8">
                  <div className="flex justify-between items-center px-5">
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {education.school} &nbsp;| &nbsp;{education.major} &nbsp;| &nbsp;{education.degree}
                    </Text>
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {education.dateRange && education.dateRange.length >= 2 ? `${education.dateRange[0].format('YYYY-MM-DD')} 至 ${education.dateRange[1].format('YYYY-MM-DD')}` : ""}
                    </Text>
                  </div>

                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: education.description }} />


                </div>
              ))}

            <Divider className="my-5" />

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">工作经历</Title>
            {workExperiences && workExperiences.map((work, index) => (
                
        <div key={index} className="mb-8">
          <div className="flex justify-between items-center px-5">
            <Text className="text-lg mb-2 font-semibold text-gray-800">
              {work.companyName} &nbsp;| &nbsp;{work.jobTitle} &nbsp;| &nbsp;{work.city}
            </Text>
            <Text className="text-lg mb-2 font-semibold text-gray-800">
              {work.dateRange && work.dateRange.length >= 2 ? `${work.dateRange[0].format('YYYY-MM-DD')} 至 ${work.dateRange[1].format('YYYY-MM-DD')}` : ""}
            </Text>
          </div>

          <div className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: work.description }} />

        </div>
      ))}

            <Divider className="my-5" />

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">项目经验</Title>
            {personalProjects && personalProjects.map((project, index) => (
                
                <div key={index} className="mb-8">
                  <div className="flex justify-between px-5 items-center">
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {project.projectName}
                    </Text>
                    <Text className="text-lg mb-2 font-semibold text-gray-800">
                      {project.dateRange && project.dateRange.length >= 2 ? `${project.dateRange[0].format('YYYY-MM-DD')} 至 ${project.dateRange[1].format('YYYY-MM-DD')}` : ""}
                    </Text>
                  </div>
 
                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
              ))}

            <Divider className="my-5" />

            

            

            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">专业技能</Title>
            {skills && skills.map((skill, index) => (
                
                <div key={index} className="mb-8">
                  <div className="flex justify-between px-5">
                  <Text className="text-lg mb-2 font-semibold text-gray-800">
                    {skill.skillName}
                  </Text>
                  <Text className="text-lg mb-2 font-semibold text-gray-800">
                    {skill.dateRange && skill.dateRange.length >= 2 ? `${skill.dateRange[0].format('YYYY-MM-DD')} 至 ${skill.dateRange[1].format('YYYY-MM-DD')}` : ""}
                  </Text>
                </div>
                  <div className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: skill.description }} />
                </div>
              ))}

            <Divider className="my-5" />
            <Title level={3} className="bg-gray-50 ext-gray-800 p-2">相关链接</Title>
            {links && links.map((link, index) => (
                
                <div key={index} className="mb-8 px-5">
                  <Text className="text-lg block mb-0 font-semibold text-gray-800">{link.name} &nbsp;| &nbsp;{link.url} &nbsp; </Text> 
                 
                </div>
              ))}

              <Divider className="my-5" />

              <div>
              {certifications && certifications.length > 0 && (
                <>
                  <Title level={3} className="bg-gray-50 text-gray-800 p-2">专业技能</Title>
                  {certifications.map((certification, index) => (
                    <div key={index} className="mb-8">
                      <div className="text-base text-gray-700 px-5" dangerouslySetInnerHTML={{ __html: certification.name }} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div>
              {languageSkills && languageSkills.length > 0 && (
                <>
                  <Title level={3} className="bg-gray-50 text-gray-800 p-2">语言能力</Title>
                  {languageSkills.map((languageSkill, index) => (
                    <div key={index} className="mb-8">
                      <div className="text-base text-gray-700 px-5" dangerouslySetInnerHTML={{ __html: languageSkill.name }} />
                    </div>
                  ))}
                </>
              )}
            </div>

              </div>
              <button onClick={exportPDF} style={{ margin: '20px', padding: '10px' }}>
                导出为PDF
            </button>
        </div>
    );
};

export default ResumeModel_A;

