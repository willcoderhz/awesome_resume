import React from 'react';
import { Button } from 'antd';

const PreviewHeader = () => {
  return (
    <div className="bg-gray-100 p-1 flex justify-center">
      <div className="flex space-x-6">
        <Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">预览</Button>
        <Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">例子</Button>
        <Button className="items-center justify-center border px-2 py-1 text-gray-500 border-gray-500 hover:bg-gray-200">指南</Button>
      </div>
    </div>
  );
}

export default PreviewHeader;
