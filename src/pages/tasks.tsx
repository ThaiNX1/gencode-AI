import React from 'react';
import { List, Tag, Checkbox, Button } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'pending';
  dueDate: string;
}

const tasks: TaskItem[] = [
  {
    id: '1',
    title: 'Review Project Documentation',
    description: 'Review and update the project documentation for the new features',
    status: 'pending',
    dueDate: '2024-03-15',
  },
  {
    id: '2',
    title: 'Implement User Authentication',
    description: 'Add user authentication functionality to the application',
    status: 'completed',
    dueDate: '2024-03-10',
  },
  {
    id: '3',
    title: 'Fix UI Responsiveness Issues',
    description: 'Address mobile responsiveness issues in the dashboard',
    status: 'pending',
    dueDate: '2024-03-20',
  },
];

const Tasks: React.FC = () => {
  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="link">Edit</Button>,
              <Button type="link" danger>Delete</Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Checkbox checked={item.status === 'completed'} />}
              title={item.title}
              description={
                <>
                  <p>{item.description}</p>
                  <div>
                    <Tag
                      icon={item.status === 'completed' ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
                      color={item.status === 'completed' ? 'success' : 'processing'}
                    >
                      {item.status === 'completed' ? 'Completed' : 'Pending'}
                    </Tag>
                    <span style={{ marginLeft: 8 }}>Due: {item.dueDate}</span>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Tasks; 