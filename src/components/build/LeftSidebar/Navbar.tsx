import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
    EditOutlined, AppstoreAddOutlined, ExportOutlined, HomeOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(element)
  };

  return (
    <Menu mode="vertical" theme="light" className="h-screen w-8  left-0 border-r">
      <Menu.Item 
          key="edit"
          icon={<EditOutlined />}
          className="hover:bg-blue-600 hover:text-white"
          onClick={() => setIsEditClicked(!isEditClicked)}
      >
        编辑
      </Menu.Item>
      
      {isEditClicked && (
        <React.Fragment>
          <Menu.Item key="basicInfo" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('basicInfo')}>基本信息</Menu.Item>
          <Menu.Item key="selfIntroduction" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('selfIntroduction')}>自我介绍</Menu.Item>
          <Menu.Item key="educationInfo" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('educationInfo')}>教育经历</Menu.Item>
          <Menu.Item key="workingExperienceInfo" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('workingExperienceInfo')}>工作经历</Menu.Item>
          <Menu.Item key="projectsInfo" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('projectsInfo')}>项目经历</Menu.Item>
          <Menu.Item key="linksInfo" style={{ paddingLeft: '24px' }} onClick={() => navigateToSection('linksInfo')}>相关链接</Menu.Item>
        </React.Fragment>
      )}

      <Menu.Item 
          key="template" 
          icon={<AppstoreAddOutlined />}
          className="hover:bg-blue-600 hover:text-white"
      >
        模板
      </Menu.Item>
      
      <Menu.Item 
          key="export" 
          icon={<ExportOutlined />}
          className="hover:bg-blue-600 hover:text-white"
      >
        导出
      </Menu.Item>

      <Menu.Item 
          key="home" 
          icon={<HomeOutlined />} 
          className="hover:bg-blue-600 hover:text-white"
          onClick={() => navigate('/')}
      >
        首页
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;



