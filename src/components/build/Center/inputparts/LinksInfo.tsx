// LinksInfo.tsx

import React from 'react';

interface Link {
  url: string;
}

interface Props {
  links: Link[];
  handleDragStart: (e: React.DragEvent, index: number) => void;
  handleLinkDrop: (e: React.DragEvent, index: number) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleDeleteLink: (index: number) => void;
  addLink: () => void;
}

const LinksInfo: React.FC<Props> = ({
  links,
  handleDragStart,
  handleLinkDrop,
  handleDragOver,
  handleInputChange,
  handleDeleteLink,
  addLink
}) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md ml-0 w-2/5 my-0">
    <h3 className="text-xl font-semibold mb-4 ml-1">相关链接</h3>
    {links.map((link, index) => (
      <div 
        key={index}
        draggable 
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleLinkDrop(e, index)}
        onDragOver={handleDragOver}
        className="mb-4 flex items-center"
      >
        <input 
            name="url" 
            placeholder="请输入相关链接   http://......" 
            value={link.url}
            onChange={e => handleInputChange(e, index)}
            className='border rounded p-2 flex-grow mx-1'
        />
        <button 
            onClick={() => handleDeleteLink(index)}
            className="mx-2 bg-red-500 hover:bg-red-700 text-white font-semibold text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline-red transition duration-150 ease-in-out"
        >
            删除
        </button>
      </div>
    ))}
    <button 
      onClick={addLink}
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
    >
      添加链接
    </button>
</div>

);

export default LinksInfo;
