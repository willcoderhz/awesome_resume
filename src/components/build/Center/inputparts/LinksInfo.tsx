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
  url: string;
  isEditing?: boolean;
}

const LinksInfo: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '1',
      url: 'http://example.com/longtext...',
      isEditing: false,
    },
    {
      key: '2',
      url: 'http://example.com',
      isEditing: false,
    },
    {
      key: '3',
      url: 'http://example.net',
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

  const handleSave = (key: string, newValue: string) => {
    setDataSource(
      dataSource.map((item) =>
        item.key === key ? { ...item, url: newValue, isEditing: false } : item
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
      url: 'http://new.example.com',
      isEditing: false,
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

      dataIndex: 'url',

      render: (url: string, record: DataType) => {
        if (record.isEditing) {
          return (
            <Input
              defaultValue={url}
              autoFocus
              onBlur={(e) => handleSave(record.key, e.target.value)}
              onPressEnter={(e) =>
                handleSave(record.key, e.currentTarget.value)
              }
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
      className: 'text-right', // 在antd的Table中添加类名
      render: (text: string, record: DataType) => {
        return (
          <div className="flex justify-end space-x-2"> {/* 用Tailwind CSS的flex和space-x-2类来布局按钮 */}
            {record.isEditing ? (
              <button
                className="text-blue-600 hover:text-blue-700 mr-2"
                onClick={() => {
                  const input = document.getElementById(`url-edit-${record.key}`) as HTMLInputElement | null;
                  if (input) handleSave(record.key, input.value);
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

    const style: React.CSSProperties = {
      ...props.style,
      transform: CSS.Transform.toString(transform ? { ...transform, scaleY: 1 } : undefined),
      transition,
      ...(isDragging ? { zIndex: 9999 } : {}),
      ...(isDragging ? { position: 'relative' } : {}),
    };

    return (
      <tr {...props} ref={setNodeRef} style={style} {...attributes}>
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
        />
      </SortableContext>
    </DndContext>
    <Button
  type="primary"
  className="mt-4 bg-black border-black" // 使用 Tailwind 的类替换内联样式
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

