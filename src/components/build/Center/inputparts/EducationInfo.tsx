import React, { useState } from 'react';
import { Button, Table, Input, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MenuOutlined, PlusOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface DataType {
  key: string;
  school: string;
  major: string;
  description: string;
  editable?: boolean;
}

const EducationInfo: React.FC = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      school: 'University',
      major: 'Major',
      description: '',
      isEditing: false,
    },
    // More data can be added here
  ]);

  const [editingKey, setEditingKey] = useState('');

  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const onExpand = (expanded, record) => {
    if (expanded) {
      setExpandedRowKeys(prevKeys => [...prevKeys, record.key]);
    } else {
      setExpandedRowKeys(prevKeys => prevKeys.filter(key => key !== record.key));
    }
  };

  const isEditing = (record: DataType) => record.key === editingKey;

  const edit = (record: DataType) => {
    // 设置展开的行
    setExpandedRowKeys([record.key]);
    // 设置表单字段的值
    form.setFieldsValue({ ...record });
    // 设置当前正在编辑的行的key
    setEditingKey(record.key);
    // 设置 record.expand 为 true
    const newData = [...dataSource];
    const index = newData.findIndex((item) => record.key === item.key);
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, expand: true });
      setDataSource(newData);
    }
  };

  
  

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key, values) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => key === item.key);
    
    if (index > -1) {
      const item = newData[index];
      newData.splice(index, 1, { ...item, ...values, isEditing: false, expand: false }); // 直接修改对应行的 expand 属性
      setDataSource(newData);
      setEditingKey('');
    };
  };
  
  

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
  };

  const handleAdd = () => {
    const newKey = (Math.max(...dataSource.map(d => parseInt(d.key)), 0) + 1).toString();
    const newData = {
      key: newKey,
      school: '',
      major: '',
      description: '',
      isEditing: true,
      expand: true, // 设置新行的 expand 属性为 true
    };
    setDataSource([...dataSource, newData]);
    setEditingKey(newKey);
    setExpandedRowKeys(prevKeys => [...prevKeys, newKey]); // 将新行的 key 添加到 expandedRowKeys 中
  };

  const columns: ColumnsType<DataType> = [
    // This column is for drag handle
    {
      title: 'Education',
      key: 'sort',
      render: () => <span className="drag-handle"><MenuOutlined /></span>,
      className: 'drag-visible',
      width: 150,
    },
    {
      title: '',
      dataIndex: 'school',
      editable: true,
      render: (text: string, record: DataType) => {
        
        return text;
      }
    },
    {
      title: '',
      dataIndex: 'major',
      editable: false,
      render: (text: string, record: DataType) => {
    
        return text;
      }
    },
    {
      title: '',
      dataIndex: 'description',
      editable: false,
      render: (text: string, record: DataType) => {
        // 现在这里不再创建任何编辑组件，直接返回文本
        return text;
      },
    },
    
    {
      title: '',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <div className="flex justify-end space-x-2">
            <a  onClick={async () => {
                          try {
                            const values = await form.validateFields();
                            await save(record.key, values); // 确保传递 record.key 和 values 给 save 函数
                          } catch (errInfo) {
                            console.log('Validate Failed:', errInfo);
                          }
                        }} >
              <SaveOutlined />
            </a>
            <a onClick={cancel}>
              <DeleteOutlined />
            </a>
          </div>
        ) : (
          <div className="flex justify-end space-x-2">
            <a disabled={editingKey !== ''} onClick={() => edit(record)}>
              <EditOutlined />
            </a>
            <a onClick={() => handleDelete(record.key)} >
              <DeleteOutlined />
            </a>
          </div>
        );
      },
    },
  ];

  // Custom Row component to handle drag-n-drop
  const Row = ({ children, ...props }: any) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: props['data-row-key'],
    });

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      ...(isDragging ? { zIndex: 9999 } : {}),
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      
      <tr {...props} ref={setNodeRef} style={style} {...attributes}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.key === 'sort') {
            return React.cloneElement(child, {
              children: (
                <MenuOutlined
                
                  ref={setNodeRef}
                  style={{ cursor: 'grab' }}
                  {...listeners}
                />
              ),
            });
          }
          return child;
        })}
      </tr>
    );
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((item) => item.key === active.id);
        const overIndex = previous.findIndex((item) => item.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  return (
    <Form form={form} component={false}>
      <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
        <SortableContext items={dataSource.map((item) => item.key)} strategy={verticalListSortingStrategy}>
          <Table className="my-table border-b-0 space-y-0"
                components={{
                  body: {
                    row: Row,
                    // 如果有其他自定义组件，也应该在这里添加
                  },
                }}
              rowKey="key"
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              expandable={{
                expandedRowKeys: expandedRowKeys,
                onExpand: onExpand,
                expandIcon: () => null,
                onExpandedRowsChange: () => {
                  setExpandedRowKeys([]);
                },
                expandedRowRender: record => record.expand && (
                  <Form
                    layout="vertical"
                    form={form}
                    className="expanded-row"
                    initialValues={{
                      school: record.school,
                      major: record.major,
                      description: record.description,
                    }}
                  >
                    <Form.Item name="school" label="School">
                      <Input />
                    </Form.Item>
                    <Form.Item name="major" label="Major">
                      <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                      <Input.TextArea rows={2} />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        onClick={async () => {
                          try {
                            const values = await form.validateFields();
                            await save(record.key, values); // 确保传递 record.key 和 values 给 save 函数
                          } catch (errInfo) {
                            console.log('Validate Failed:', errInfo);
                          }
                        }}
                        className="ant-btn bg-gray-500 text-white"
                      >
                        Save
                      </Button>
                    </Form.Item>
                  </Form>
                ),
             
            }}
          />
        </SortableContext>
      </DndContext>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{ marginTop: 16 }}
        disabled={editingKey !== ''}
        className="ant-btn bg-gray-500 text-white mb-8"
      >
        <PlusOutlined /> Add a row
      </Button>
    </Form>
  );
};

export default EducationInfo;



