import React, { useState, useEffect} from 'react';
import { Input, Typography, DatePicker, Form, Col, Row } from 'antd';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addBasicInfo, updateBasicInfo } from '../../../../store/actions';




const { MonthPicker } = DatePicker;



const BasicInfo = () => {
    const [basicInfo, setBasicInfo] = useState({
        position: '',
        name: '',
        phone: '',
        age: '',
        city: '',
        photo: '',
        email: '',
        wechat: '',
      });

    const [imageUrl, setImageUrl] = React.useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addBasicInfo(basicInfo));
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedInfo = { ...basicInfo, [name]: value };
        setBasicInfo(updatedInfo);
        dispatch(updateBasicInfo(updatedInfo));
    };

    const handleFileChange = ({ file }) => {
        
    
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64String = e.target.result;
            console.log(base64String); // 确认转换后的Base64字符串
            const updatedInfo = { ...basicInfo, photo: base64String };
            setBasicInfo(updatedInfo);
            dispatch(updateBasicInfo(updatedInfo));
        };
    
        // 直接使用 file 对象，而不是 file.originFileObj
        if (file instanceof Blob) {
            reader.readAsDataURL(file);
        } else {
            console.error('The file is not a Blob object:', file);
        }
    };
    

    const handleDateChange = (date, dateString) => {
        const updatedInfo = { ...basicInfo, age: dateString };
        setBasicInfo(updatedInfo);
        dispatch(updateBasicInfo(updatedInfo));
    };

    return (
        <div className="bg-gray-0 p-4 ml-0 w-full" id="basicInfo">
            <Typography.Title level={3} className="mb-4">基本信息</Typography.Title>
            <Form layout="horizontal">
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="求职职位" colon={false} >
                            <Input onChange={handleInputChange} className="w-full" name="position" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                    <Form.Item label="照片位置" colon={false}>
                            <Upload
                                name="logo"
                                listType="picture"
                                beforeUpload={() => false} // 防止自动上传
                                onChange={handleFileChange}
                            >
                                <Button icon={<UploadOutlined />}  >点击上传</Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="姓名 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;" colon={false} >
                            <Input onChange={handleInputChange} className="w-full" name="name" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="工作地方" colon={false} >
                            <Input onChange={handleInputChange} className="w-full" name="city"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="联系电话" colon={false} >
                            <Input onChange={handleInputChange} className="w-full" name="phone" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="电子邮箱" colon={false} >
                            <Input onChange={handleInputChange} className="w-full" name="email" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="出生年月" colon={false} >
                            {/*<DatePicker style={{ width: 200 }}  />*/}
                            <DatePicker className="w-full" onChange={handleDateChange}  name="age"  />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="微信号 &nbsp; &nbsp;" colon={false} >
                            <Input onChange={handleInputChange} className="w-full"  name="wechat"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default BasicInfo;


