import React from 'react';
import { Input, Typography, DatePicker, Form, Col, Row } from 'antd';

type BasicInfoProps = {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (dateString: string) => void;
};
const { MonthPicker } = DatePicker;

const BasicInfo: React.FC<BasicInfoProps> = ({ handleInputChange, handleDateChange }) => {
    return (
        <div className="bg-gray-50 p-4 ml-0 w-full" id="basicInfo">
            <Typography.Title level={3} className="mb-4">基本信息</Typography.Title>
            <Form layout="horizontal">
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="求职职位" colon={false} name="position">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="照片位置" colon={false} name="photo">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="姓名" colon={false} name="name">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="工作地方" colon={false} name="city">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="联系电话" colon={false} name="phone">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="电子邮箱" colon={false} name="email">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label="出生年月" colon={false} name="age">
                            {/*<DatePicker style={{ width: 200 }} onChange={(date, dateString) => handleDateChange(dateString)} className="w-full" />*/}
                            <DatePicker className="w-full"  />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="微信号" colon={false} name="sex">
                            <Input onChange={handleInputChange} className="w-full" />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default BasicInfo;


