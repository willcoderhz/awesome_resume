import React from 'react';

type BasicInfoProps = {
    handleInputChange: any;
};

const BasicInfo: React.FC<BasicInfoProps> = ({ handleInputChange }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md ml-0 w-2/5">
            <h3 className="text-xl font-semibold mb-4 ml-1">基本信息</h3>
            <input name="name" placeholder="姓名" onChange={handleInputChange} className='border rounded p-2 w-30 mb-2 mx-1'/>
            <input name="phone" placeholder="联系电话" onChange={handleInputChange} className='border rounded p-2 w-30  mb-2 mx-1'/>
            <input name="email" placeholder="邮箱" onChange={handleInputChange} className='border rounded p-2 w-30  mb-2 mx-1'/>
            <input name="sex" placeholder="性别" onChange={handleInputChange} className='border rounded p-2 w-30  mb-2 mx-1'/>
            <input name="city" placeholder="城市" onChange={handleInputChange} className='border rounded p-2 w-30  mb-2 mx-1'/>
            <input name="age" placeholder="年龄" onChange={handleInputChange} className='border rounded p-2 w-30  mb-2 mx-1'/>
        </div>
    );
}

export default BasicInfo;

