import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PlusOutlined, MenuOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState, useEffect } from 'react';
import { Button, Table, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addLink, updateLink, deleteLink, reorderLinks } from '../../../../store/actions';
const LinksInfo = () => {
    const dispatch = useDispatch();
    const initialData = [
        {
            key: '1',
            name: 'Github',
            url: 'http://example.com',
            isEditing: false,
        },
        // ...可以添加更多的初始数据...
    ];
    const [dataSource, setDataSource] = useState(initialData);
    // 使用 useEffect 分发初始数据到 Redux store
    useEffect(() => {
        // 仅在组件挂载时执行
        initialData.forEach(link => {
            dispatch(addLink(link));
        });
    }, [dispatch]);
    const handleEdit = (key) => {
        setDataSource(dataSource.map((item) => item.key === key ? { ...item, isEditing: !item.isEditing } : item));
    };
    const handleSave = (key, newName, newUrl) => {
        setDataSource(dataSource.map((item) => item.key === key ? { ...item, name: newName, url: newUrl, isEditing: false } : item));
        dispatch(updateLink(key, { name: newName, url: newUrl }));
    };
    const handleDelete = (key) => {
        setDataSource(dataSource.filter(item => item.key !== key));
        dispatch(deleteLink(key));
    };
    const handleAdd = () => {
        const newKey = (Math.max(...dataSource.map(d => Number(d.key))) + 1).toString(); // 创建一个新的、唯一的 key
        const newLinkData = {
            key: newKey,
            name: '',
            url: '',
            isEditing: true,
        };
        // 更新本地 state
        setDataSource([...dataSource, newLinkData]);
        // 使用 addLink action 创建函数来 dispatch action
        dispatch(addLink({ key: newKey, name: '', url: '' })); // 确保这里的值与 newLinkData 一致
    };
    const columns = [
        {
            key: 'sort',
            title: '自定义内容',
            // This column is for drag handle
        },
        {
            title: '',
            dataIndex: 'name',
            render: (name, record) => {
                if (record.isEditing) {
                    return (_jsx(Input, { id: `name-edit-${record.key}`, defaultValue: name, autoFocus: true }));
                }
                return name;
            },
        },
        {
            title: '',
            dataIndex: 'url',
            render: (url, record) => {
                if (record.isEditing) {
                    return (_jsx(Input, { id: `url-edit-${record.key}`, defaultValue: url }));
                }
                return _jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", children: url });
            },
        },
        {
            key: 'action',
            title: '',
            dataIndex: 'operation',
            className: 'text-right',
            render: (text, record) => {
                return (_jsxs("div", { className: "flex justify-end space-x-2 ", children: [record.isEditing ? (_jsx("button", { className: "text-blue-600 hover:text-blue-700 mr-2", onClick: () => {
                                const nameInput = document.getElementById(`name-edit-${record.key}`);
                                const urlInput = document.getElementById(`url-edit-${record.key}`);
                                if (nameInput && urlInput)
                                    handleSave(record.key, nameInput.value, urlInput.value);
                            }, children: _jsx(SaveOutlined, {}) })) : (_jsx("button", { className: "text-black-600 hover:text-blue-700 mr-2", onClick: () => handleEdit(record.key), children: _jsx(EditOutlined, {}) })), _jsx("button", { className: "text-black-600 hover:text-red-700 ", onClick: () => handleDelete(record.key), children: _jsx(DeleteOutlined, {}) })] }));
            },
        },
    ];
    const Row = ({ children, ...props }) => {
        const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging, } = useSortable({
            id: props['data-row-key'],
        });
        // 添加样式修改拖拽样式风格
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
        };
        const style = {
            ...props.style.style = { fontSize: '14px', border: '#165DFF' },
            transform: CSS.Transform.toString(transform ? { ...transform, scaleY: 1 } : undefined),
            transition,
            ...(isDragging ? { zIndex: 9999 } : {}),
            ...(isDragging ? { position: 'relative' } : {}),
        };
        return (_jsx("tr", { ...props, ref: setNodeRef, style: style2, ...attributes, children: React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.key === 'sort') {
                    return React.cloneElement(child, {
                        children: (_jsx(MenuOutlined, { ref: setActivatorNodeRef, style: { cursor: 'grab' }, ...listeners })),
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
                const newOrder = arrayMove(previous, activeIndex, overIndex);
                // 在这里使用 reorderLinks action
                dispatch(reorderLinks(newOrder));
                return newOrder;
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-left text-xl font-bold mb-4 pl-3", children: "\u81EA\u5B9A\u4E49\u5185\u5BB9" }), _jsx(DndContext, { modifiers: [restrictToVerticalAxis], onDragEnd: onDragEnd, children: _jsx(SortableContext, { items: dataSource.map((item) => item.key), strategy: verticalListSortingStrategy, children: _jsx(Table, { components: {
                            body: {
                                row: Row,
                            },
                        }, rowKey: "key", columns: columns, dataSource: dataSource, pagination: false, showHeader: false }) }) }), _jsx(Button, { type: "primary", className: "mt-4 bg-blue-500 border-blue-500 ml-3 mb-10" // 使用 Tailwind 的类替换内联样式
                , onClick: handleAdd, children: _jsxs("span", { className: "inline-flex items-center", children: [" ", _jsx(PlusOutlined, { className: "mr-2" }), " ", "\u6DFB\u52A0\u94FE\u63A5"] }) })] }));
};
export default LinksInfo;
