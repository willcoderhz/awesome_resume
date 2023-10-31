import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> master

const Navbar = () => {
  return (
    <div className="relative ">
<<<<<<< HEAD
     <div className="h-screen w-12 p-y-5 fixed top-0 left-0"> 
      <ul className="list-none p-3">
        <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">编辑</li>
        <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">模板</li>
        <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">导出</li>
      </ul>
    </div>
=======
      <div className="h-screen w-12 p-y-5 fixed top-0 left-0"> 
        <ul className="list-none p-3">
         
          <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">编辑</li>
          <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">模板</li>
          <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">导出</li>
          <li className="text-lg font-medium mb-6 text-left cursor-pointer transition-colors duration-300 write-mode-vertical pl-2 hover:text-blue-500">
          <Link to="/">首页</Link>
          </li>
        </ul>
      </div>
>>>>>>> master
    </div>
  );
};

export default Navbar;
