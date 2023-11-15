import { PlusOutlined, MenuOutlined, EditOutlined, SaveOutlined, DeleteOutlined } from '@ant-design/icons';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useState } from 'react';
import { Button, Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string; // 新增
  url: string;
  isEditing?: boolean;
}

const LinksInfo: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      name: 'Github',
      url: 'http://example.com',
      isEditing: false,
    },
  
  ]);

  const handleEdit = (key: string) => {
    setDataSource(
      dataSource.map((item) =>
        item.key === key ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const handleSave = (key: string, newName: string, newUrl: string) => {
    setDataSource(
      dataSource.map((item) =>
        item.key === key ? { ...item, name: newName, url: newUrl, isEditing: false } : item
      )
    );
  };

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter(item => item.key !== key));
  };

  const handleAdd = () => {
    const newKey = (Math.max(...dataSource.map(d => Number(d.key))) + 1).toString(); // 创建一个新的、唯一的 key
    const newData = {
      key: newKey,
      name: ' ',
      url: '',
      isEditing: true,
    };
    setDataSource([...dataSource, newData]); // 添加新的数据到 dataSource
  };

  const columns: ColumnsType<DataType> = [
    
    {
      key: 'sort',
      title: '自定义内容',
      // This column is for drag handle
    },
    
    {
      title: '',
      dataIndex: 'name',
      render: (name: string, record: DataType) => {
        if (record.isEditing) {
          return (
            <Input
              id={`name-edit-${record.key}`}
              defaultValue={name}
              autoFocus
            />
          );
        }
        return name;
      },
    },
    {
      title: '',
      dataIndex: 'url',
      render: (url: string, record: DataType) => {
        if (record.isEditing) {
          return (
            <Input
              id={`url-edit-${record.key}`}
              defaultValue={url}
            />
          );
        }
        return <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>;
      },
    },
    {
      key: 'action',
      title: '',
      dataIndex: 'operation',
      className: 'text-right',
      render: (text: string, record: DataType) => {
        return (
          <div className="flex justify-end space-x-2 ">
            {record.isEditing ? (
              <button
                className="text-blue-600 hover:text-blue-700 mr-2"
                onClick={() => {
                  const nameInput = document.getElementById(`name-edit-${record.key}`) as HTMLInputElement | null;
                  const urlInput = document.getElementById(`url-edit-${record.key}`) as HTMLInputElement | null;
                  if (nameInput && urlInput) handleSave(record.key, nameInput.value, urlInput.value);
                }}
              >
                <SaveOutlined />
              </button>
            ) : (
              <button
                className="text-black-600 hover:text-blue-700 mr-2"
                onClick={() => handleEdit(record.key)}
              >
                <EditOutlined />
              </button>
            )}
            <button
              className="text-black-600 hover:text-red-700 "
              onClick={() => handleDelete(record.key)}
            >
              <DeleteOutlined />
            </button>
          </div>
        );
      },
    },
  ];

  const Row = ({ children, ...props }: any) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: props['data-row-key'],
    });
    // 添加样式修改拖拽样式风格
    const style2 = {
      color: '#000',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      border: '2px dashed blue',
      margin: '0.5rem',
      display: 'flex',
      minWidth: '480px', 
      maxWidth: '480px', 
      overflow: 'auto',
      height: '100%',
      fontSize: '14px',
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
      ...props.style.style={fontSize:'14px',border:'#165DFF'},
      transform: CSS.Transform.toString(transform ? { ...transform, scaleY: 1 } : undefined),
      transition,
      ...(isDragging ? { zIndex: 9999 } : {}),
      ...(isDragging ? { position: 'relative' } : {}),
    };

    return (
      <tr  {...props} ref={setNodeRef} style={style2} {...attributes}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.key === 'sort') {
              return React.cloneElement(child, {
                children: (
                    <MenuOutlined
                        ref={setActivatorNodeRef}
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
    <>
    <h1 className="text-left text-xl font-bold mb-4 pl-3">自定义内容</h1>
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext items={dataSource.map((item) => item.key)} strategy={verticalListSortingStrategy}>
        <Table
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey="key"
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          showHeader={false} // 不显示标题行
          
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
    添加链接
  </span>
</Button>
  </>
  );
};

export default LinksInfo;

