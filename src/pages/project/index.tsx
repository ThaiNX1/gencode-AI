import React, { useState } from 'react';
import { Table, Tag, Space, Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { ProjectDialog } from '../../components/ProjectDialog';
import dayjs from 'dayjs';

interface DataType {
  key: string;
  name: string;
  status: string;
  progress: number;
  startDate: string;
  endDate: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'Website Redesign',
    status: 'In Progress',
    progress: 60,
    startDate: '2024-01-15',
    endDate: '2024-04-15',
  },
  {
    key: '2',
    name: 'Mobile App Development',
    status: 'On Hold',
    progress: 30,
    startDate: '2024-02-01',
    endDate: '2024-05-01',
  },
  {
    key: '3',
    name: 'Database Migration',
    status: 'Completed',
    progress: 100,
    startDate: '2024-01-01',
    endDate: '2024-02-01',
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<DataType | undefined>();

  const handleAddProject = () => {
    setSelectedProject(undefined);
    setDialogOpen(true);
  };

  const handleEditProject = (project: DataType) => {
    setSelectedProject({
      ...project,
      startDate: dayjs(project.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(project.endDate).format('YYYY-MM-DD'),
    });
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedProject(undefined);
  };

  const handleSave = () => {
    // Refresh the projects list here
    handleDialogClose();
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: DataType) => (
        <a onClick={() => navigate(`/projects/${record.key}`)}>{text}</a>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'green';
        if (status === 'In Progress') color = 'blue';
        if (status === 'On Hold') color = 'orange';
        if (status === 'Completed') color = 'green';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress: number) => `${progress}%`,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={(e) => {
              e.stopPropagation();
              handleEditProject(record);
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1>Projects</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddProject}
        >
          Add Project
        </Button>
      </div>
      <Table 
        columns={columns} 
        dataSource={data} 
        onRow={(record) => ({
          onClick: () => navigate(`/projects/${record.key}`),
          style: { cursor: 'pointer' },
        })}
      />
      <ProjectDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSave={handleSave}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects; 