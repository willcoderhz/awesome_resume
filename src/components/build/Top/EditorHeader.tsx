import React from 'react';
import { Button } from 'antd';

const EditorHeader = () => {
  return (
    <div className="bg-gray-200 p-4 flex justify-between items-center border-b border-gray-300">
      <div>
        {/* Account Button */}
        <Button className="mr-4 border-gray-500 text-gray-500 hover:bg-gray-300">账号</Button>
      </div>
      <div>
        {/* Other buttons like "返回" */}
        <Button className="ml-4 border-gray-500 text-gray-500 hover:bg-gray-300">返回</Button>
      </div>
    </div>
  );
}

export default EditorHeader;
