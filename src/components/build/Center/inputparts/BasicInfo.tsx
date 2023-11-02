import React from 'react';
import { Input, Typography, DatePicker } from 'antd';

type BasicInfoProps = {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const { MonthPicker } = DatePicker;

const BasicInfo: React.FC<BasicInfoProps> = ({ handleInputChange }) => {
    return (
        <div className="bg-gray-50 p-4 ml-0 w-full" id="basicInfo">
            <Typography.Title level={3} className="mb-4 ml-1">基本信息</Typography.Title>

            <Typography.Text type="secondary" className="ml-1 mb-4 block">
                请输入您的基本信息，同时上传头像哦：）
            </Typography.Text>
            
            <div className="flex justify-between mb-2">
                <Input name="position" placeholder="求职职位" onChange={handleInputChange} className='border rounded p-2 mr-1 w-9/20'/>
                <Input name="photo" placeholder="照片位置" onChange={handleInputChange} className='border rounded p-2 ml-1 w-9/20'/>
            </div>

            <div className="flex justify-between mb-2">
                <Input name="name" placeholder="姓名" onChange={handleInputChange} className='border rounded p-2 mr-1 w-9/20'/>
                <Input name="phone" placeholder="联系电话" onChange={handleInputChange} className='border rounded p-2 ml-1 w-9/20'/>
            </div>

            <div className="flex justify-between mb-2">
                <Input name="city" placeholder="所在城市" onChange={handleInputChange} className='border rounded p-2 mr-1 w-9/20'/>
                <Input name="sex" placeholder="性别" onChange={handleInputChange} className='border rounded p-2 ml-1 w-9/20'/>
            </div>

            <div className="flex justify-between mb-2">  
                <Input name="email" placeholder="电子邮箱" onChange={handleInputChange} className='border rounded p-2 mr-1 w-9/20'/>
                <MonthPicker name="age" placeholder="出生年月" format="YYYY-MM" onChange={(date, dateString) => {handleInputChange({ target: { name: "age", value: dateString } });}}
                className='border rounded p-2 ml-1 w-9/20'
            />
            </div>
        </div>
    );
}

export default BasicInfo;
