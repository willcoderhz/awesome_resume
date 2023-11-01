import React from 'react';

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
    <div className="bg-gray-100 p-6  shadow-md ml-0 w-2/5 my-0">
    <h3 className="text-xl font-semibold mb-4 ml-1">项目经验</h3>
    {projects.map((project, index) => (
      <div 
        key={index}
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleProjectDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4"
      >
        <input 
            name="projectName" 
            placeholder="项目名称" 
            value={project.projectName}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 w-40 mb-2 mx-1'
        />
        <input 
            name="projectTime" 
            placeholder="项目时间" 
            value={project.projectTime}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 w-45 mb-2 mx-1'
        />
        <textarea 
            name="projectDescription" 
            placeholder="描述您参与过的项目" 
            value={project.projectDescription}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 w-full h-32 my-2 mx-1'
        />
        <button 
            onClick={() => handleDeleteProject(index)}
            className="mx-2 bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
        >
            删除
        </button>
      </div>
    ))}
    <button 
      onClick={addProject}
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
    >
      添加
    </button>
</div>

);

export default ProjectsInfo;