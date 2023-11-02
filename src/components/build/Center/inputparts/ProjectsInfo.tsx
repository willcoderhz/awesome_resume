import React from 'react';
import { Input, Button, Typography } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

interface Project {
  projectName: string;
  projectTime: string;
  projectDescription: string;
}

interface Props {
  projects: Project[];
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleProjectDrop: (e: React.DragEvent, index: number) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
  handleDeleteProject: (index: number) => void;
  addProject: () => void;
}

const ProjectsInfo: React.FC<Props> = ({
  projects,
  handleDragStart,
  handleProjectDrop,
  handleDragOver,
  handleInputChange,
  handleDeleteProject,
  addProject
}) => (
  <div className="bg-gray-50 p-4 ml-0 w-full" id="projectsInfo">
    <Typography.Title level={3} className="mb-4 ml-1"  >项目经验</Typography.Title>
    {projects.map((project, index) => (
      <div 
        key={index}
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleProjectDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4"
      >
        <Input 
          name="projectName" 
          placeholder="项目名称" 
          value={project.projectName}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 mb-2 w-9/20 mr-1'
        />
        <Input 
          name="projectTime" 
          placeholder="项目时间" 
          value={project.projectTime}
          onChange={e => handleInputChange(e, index)}
          className='border rounded p-2 mb-2 w-9/20 mr-1'
        />
        <Input.TextArea 
          name="projectDescription" 
          placeholder="描述您参与过的项目" 
          value={project.projectDescription}
          onChange={e => handleInputChange(e as any, index)}
          className='mb-2 w-full'
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
        <Button 
          type="default" 
          icon={<DeleteOutlined />} 
          onClick={() => handleDeleteProject(index)} 
          className="mr-2 bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
        >
          删除
        </Button>
      </div>
    ))}
    <Button 
        type="default" 
        icon={<PlusOutlined />} 
        onClick={addProject}
        className="bg-blue-500 text-white hover:bg-blue-700 active:bg-blue-800"
    >
        添加
    </Button>
  </div>
);

export default ProjectsInfo;
