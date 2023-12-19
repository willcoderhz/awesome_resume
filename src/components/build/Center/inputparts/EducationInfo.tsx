import React, { useState, useEffect} from 'react';
import { Button, Table, Input, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MenuOutlined, PlusOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DatePicker } from 'antd';
import zh_CN from 'antd/es/date-picker/locale/zh_CN';
import { useDispatch } from 'react-redux';
import { addEducation, updateEducation, deleteEducation, reorderEducations} from '../../../../store/actions';
import moment from 'moment';

interface DataType {
  key: string;
  school: string;
  major: string;
  description: string;
  degree: string; // 新增
  dateRange: string; // 新增
  editable?: boolean;
}

const EducationInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      school: '浙江大学',
      major: '计算机科学与技术',
      description: '全年级第一名，获得校级奖学金，获得校级优秀学生干部，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文，获得校级优秀毕业生，获得校级优秀毕业设计，获得校级优秀毕业论文',
      isEditing: false,
      dateRange: null,
      degree: '本科',
    },
    // More data can be added here
  ]);

  useEffect(() => {
    // Dispatch initial data to the store
    dataSource.forEach(data => {
      dispatch(addEducation(data));
    });
  }, []);

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
      dispatch(updateEducation({ ...item, ...values }));
    };
  };
  
  

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
    dispatch(deleteEducation(key));
  };

  const handleAdd = () => {
    const newKey = (Math.max(...dataSource.map(d => parseInt(d.key)), 0) + 1).toString();
    const newData = {
      key: newKey,
      school: '',
      major: '',
      description: '',
      degree: '', // 新增
      dateRange: null, // 新增
      isEditing: true,
      expand: true, // 设置新行的 expand 属性为 true
    };
    setDataSource([...dataSource, newData]);
    setEditingKey(newKey);
    setExpandedRowKeys(prevKeys => [...prevKeys, newKey]); // 将新行的 key 添加到 expandedRowKeys 中
    dispatch(addEducation(newData));
  };

  const columns: ColumnsType<DataType> = [
    // This column is for drag handle
    {
      title: '教育经历',
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

    const style2 = {
      color: '#000',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '2px dashed blue',
      margin: '1rem 2rem',
      
      width: '100%',
      overflow: 'auto',
      height: '100%',
      fontSize: '20px',
      fontWeight: 'bold',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      ...props.style,
      transform: CSS.Transform.toString(transform ? { ...transform, scaleY: 1 } : undefined),
      transition,
      ...(isDragging ? { zIndex: 9999 } : {}),
      ...(isDragging ? { position: 'relative' } : {}),

    }

    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      ...(isDragging ? { zIndex: 9999 } : {}),
      opacity: isDragging ? 0.5 : 1,
    };

    return (
      
      <tr {...props} ref={setNodeRef} style={style2} {...attributes}>
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
        
        // 计算新的排序后的数据
        const newOrder = arrayMove(previous, activeIndex, overIndex);
        
        // 使用 dispatch 方法发送 reorderEducations action 更新 Redux store
        dispatch(reorderEducations(newOrder));
  
        return newOrder;
      });
    }
  };
  

  return (
    <>
    <h1 className="text-left text-xl font-bold mb-4 pl-3">教育经历</h1>
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
              showHeader={false} // 不显示标题行
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
      degree: record.degree, // 新增
      dateRange: record.dateRange, // 新增
    }}
  >
    <div className="flex flex-wrap -mx-3">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <Form.Item name="school" label="学校名称">
      <Input className="w-full" />
    </Form.Item>
  </div>
  <div className="w-full md:w-1/2 px-3">
    <Form.Item name="major" label="所学专业">
      <Input className="w-full" />
    </Form.Item>
  </div>
</div>

<div className="flex flex-wrap -mx-3">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <Form.Item name="degree" label="最高学历">
      <Input className="w-full" />
    </Form.Item>
  </div>
  <div className="w-full md:w-1/2 px-3">
  <Form.Item name="dateRange" label="开始&结束时间">
  <DatePicker.RangePicker className="w-full" locale={zh_CN} />
</Form.Item>
  </div>
</div>

<Form.Item name="description" label="描述">
  <ReactQuill theme="snow" className="h-32" />
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
        className="ant-btn bg-gray-500 text-white mt-10"
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
  type="primary"
  className="mt-4 bg-blue-500 border-blue-500 ml-3 mb-10" // 使用 Tailwind 的类替换内联样式
  onClick={handleAdd}
>
  <span className="inline-flex items-center"> {/* 使用 flex 布局来对齐图标和文本 */}
    <PlusOutlined className="mr-2" /> {/* 可以调整这个 margin 来控制图标和文本之间的距离 */}
    添加教育经历
  </span>
</Button>
    </Form>
    </>
  );
};

export default EducationInfo;