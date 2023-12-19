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
import { addSkill, updateSkill, deleteSkill, reorderSkills} from '../../../../store/actions';
import moment from 'moment';

interface DataType {
  key: string;
  skillName: string;
  dateRange: string;
  description: string;
  editable?: boolean;
}

const SkillsInfo: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      skillName: 'Javascript',
      dateRange: null,
      description: '',
      isEditing: false,
    },
    // More data can be added here
  ]);

  useEffect(() => {
    // Dispatch initial data to the store
    dataSource.forEach(data => {
      dispatch(addSkill(data));
    });
  }, []); // Empty dependency array means this effect runs once on mount

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
      dispatch(updateSkill({ ...item, ...values }));
    };
  };
  
  

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
    dispatch(deleteSkill(key));
  };

  const handleAdd = () => {
    const newKey = (Math.max(...dataSource.map(d => parseInt(d.key)), 0) + 1).toString();
    const newData = {
      key: newKey,
      skillName: '',
      dateRange: null,
      description: '',
      isEditing: true,
      expand: true, // 设置新行的 expand 属性为 true
    };
    setDataSource([...dataSource, newData]);
    setEditingKey(newKey);
    setExpandedRowKeys(prevKeys => [...prevKeys, newKey]); // 将新行的 key 添加到 expandedRowKeys 中
    dispatch(addSkill(newData));
  };

  const columns: ColumnsType<DataType> = [
    // This column is for drag handle
    {
      title: '专业技能',
      key: 'sort',
      render: () => <span className="drag-handle"><MenuOutlined /></span>,
      className: 'drag-visible',
      width: 300,
    },
    {
      title: '',
      dataIndex: 'skillName',
      width: 300,
      editable: true,
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
        const reordered = arrayMove(previous, activeIndex, overIndex);

        // Dispatch the reorderSkills action
        dispatch(reorderSkills(reordered));

        return reordered;
      });
    }
  };
  return (
    <>
    <h1 className="text-left text-xl font-bold mb-4 pl-3">专业技能</h1>
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
                      skillName: record.skillName,
                      dateRange: record.dateRange,
                      description: record.description,
                    }}
                  >
                    
<div className="flex flex-wrap -mx-3">
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <Form.Item name="skillName" label="项目名称">
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
    添加技能
  </span>
</Button>
    </Form>
    </>
  );
};

export default SkillsInfo;

