import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Button, Table, Input, Form } from 'antd';
import { MenuOutlined, PlusOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DatePicker } from 'antd';
import zh_CN from 'antd/es/date-picker/locale/zh_CN';
import { useDispatch } from 'react-redux';
import { addEducation, updateEducation, deleteEducation, reorderEducations } from '../../../../store/actions';
const EducationInfo = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [dataSource, setDataSource] = useState([
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
        }
        else {
            setExpandedRowKeys(prevKeys => prevKeys.filter(key => key !== record.key));
        }
    };
    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
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
    const save = async (key, values) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...values, isEditing: false, expand: false }); // 直接修改对应行的 expand 属性
            setDataSource(newData);
            setEditingKey('');
            dispatch(updateEducation({ ...item, ...values }));
        }
        ;
    };
    const handleDelete = (key) => {
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
            degree: '',
            dateRange: null,
            isEditing: true,
            expand: true, // 设置新行的 expand 属性为 true
        };
        setDataSource([...dataSource, newData]);
        setEditingKey(newKey);
        setExpandedRowKeys(prevKeys => [...prevKeys, newKey]); // 将新行的 key 添加到 expandedRowKeys 中
        dispatch(addEducation(newData));
    };
    const columns = [
        // This column is for drag handle
        {
            title: '教育经历',
            key: 'sort',
            render: () => _jsx("span", { className: "drag-handle", children: _jsx(MenuOutlined, {}) }),
            className: 'drag-visible',
            width: 150,
        },
        {
            title: '',
            dataIndex: 'school',
            editable: true,
            render: (text, record) => {
                return text;
            }
        },
        {
            title: '',
            dataIndex: 'major',
            editable: false,
            render: (text, record) => {
                return text;
            }
        },
        {
            title: '',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (_jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx("a", { onClick: async () => {
                                try {
                                    const values = await form.validateFields();
                                    await save(record.key, values); // 确保传递 record.key 和 values 给 save 函数
                                }
                                catch (errInfo) {
                                    console.log('Validate Failed:', errInfo);
                                }
                            }, children: _jsx(SaveOutlined, {}) }), _jsx("a", { onClick: cancel, children: _jsx(DeleteOutlined, {}) })] })) : (_jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx("a", { disabled: editingKey !== '', onClick: () => edit(record), children: _jsx(EditOutlined, {}) }), _jsx("a", { onClick: () => handleDelete(record.key), children: _jsx(DeleteOutlined, {}) })] }));
            },
        },
    ];
    // Custom Row component to handle drag-n-drop
    const Row = ({ children, ...props }) => {
        const { attributes, listeners, setNodeRef, transform, transition, isDragging, } = useSortable({
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
        };
        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            ...(isDragging ? { zIndex: 9999 } : {}),
            opacity: isDragging ? 0.5 : 1,
        };
        return (_jsx("tr", { ...props, ref: setNodeRef, style: style2, ...attributes, children: React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.key === 'sort') {
                    return React.cloneElement(child, {
                        children: (_jsx(MenuOutlined, { ref: setNodeRef, style: { cursor: 'grab' }, ...listeners })),
                    });
                }
                return child;
            }) }));
    };
    const onDragEnd = ({ active, over }) => {
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
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-left text-xl font-bold mb-4 pl-3", children: "\u6559\u80B2\u7ECF\u5386" }), _jsxs(Form, { form: form, component: false, children: [_jsx(DndContext, { modifiers: [restrictToVerticalAxis], onDragEnd: onDragEnd, children: _jsx(SortableContext, { items: dataSource.map((item) => item.key), strategy: verticalListSortingStrategy, children: _jsx(Table, { className: "my-table border-b-0 space-y-0", components: {
                                    body: {
                                        row: Row,
                                        // 如果有其他自定义组件，也应该在这里添加
                                    },
                                }, rowKey: "key", columns: columns, dataSource: dataSource, pagination: false, showHeader: false, expandable: {
                                    expandedRowKeys: expandedRowKeys,
                                    onExpand: onExpand,
                                    expandIcon: () => null,
                                    onExpandedRowsChange: () => {
                                        setExpandedRowKeys([]);
                                    },
                                    expandedRowRender: record => record.expand && (_jsxs(Form, { layout: "vertical", form: form, className: "expanded-row", initialValues: {
                                            school: record.school,
                                            major: record.major,
                                            description: record.description,
                                            degree: record.degree,
                                            dateRange: record.dateRange, // 新增
                                        }, children: [_jsxs("div", { className: "flex flex-wrap -mx-3", children: [_jsx("div", { className: "w-full md:w-1/2 px-3 mb-6 md:mb-0", children: _jsx(Form.Item, { name: "school", label: "\u5B66\u6821\u540D\u79F0", children: _jsx(Input, { className: "w-full" }) }) }), _jsx("div", { className: "w-full md:w-1/2 px-3", children: _jsx(Form.Item, { name: "major", label: "\u6240\u5B66\u4E13\u4E1A", children: _jsx(Input, { className: "w-full" }) }) })] }), _jsxs("div", { className: "flex flex-wrap -mx-3", children: [_jsx("div", { className: "w-full md:w-1/2 px-3 mb-6 md:mb-0", children: _jsx(Form.Item, { name: "degree", label: "\u6700\u9AD8\u5B66\u5386", children: _jsx(Input, { className: "w-full" }) }) }), _jsx("div", { className: "w-full md:w-1/2 px-3", children: _jsx(Form.Item, { name: "dateRange", label: "\u5F00\u59CB&\u7ED3\u675F\u65F6\u95F4", children: _jsx(DatePicker.RangePicker, { className: "w-full", locale: zh_CN }) }) })] }), _jsx(Form.Item, { name: "description", label: "\u63CF\u8FF0", children: _jsx(ReactQuill, { theme: "snow", className: "h-32" }) }), _jsx(Form.Item, { children: _jsx(Button, { type: "primary", onClick: async () => {
                                                        try {
                                                            const values = await form.validateFields();
                                                            await save(record.key, values); // 确保传递 record.key 和 values 给 save 函数
                                                        }
                                                        catch (errInfo) {
                                                            console.log('Validate Failed:', errInfo);
                                                        }
                                                    }, className: "ant-btn bg-gray-500 text-white mt-10", children: "Save" }) })] })),
                                } }) }) }), _jsx(Button, { type: "primary", className: "mt-4 bg-blue-500 border-blue-500 ml-3 mb-10" // 使用 Tailwind 的类替换内联样式
                        , onClick: handleAdd, children: _jsxs("span", { className: "inline-flex items-center", children: [" ", _jsx(PlusOutlined, { className: "mr-2" }), " ", "\u6DFB\u52A0\u6559\u80B2\u7ECF\u5386"] }) })] })] }));
};
export default EducationInfo;
