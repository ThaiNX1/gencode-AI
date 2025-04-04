import React from 'react';
import { Card, Descriptions, Button, Progress, Tag, Timeline } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import './detail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock project data
  const project = {
    name: 'Website Redesign',
    description: 'Complete redesign of the company website with modern UI/UX',
    status: 'In Progress',
    progress: 60,
    startDate: '2024-01-15',
    endDate: '2024-04-15',
    team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
    budget: '$50,000',
    client: 'Acme Corp',
    milestones: [
      {
        title: 'Project Kickoff',
        date: '2024-01-15',
        completed: true,
      },
      {
        title: 'Design Phase',
        date: '2024-02-01',
        completed: true,
      },
      {
        title: 'Development Phase',
        date: '2024-03-01',
        completed: false,
      },
      {
        title: 'Testing Phase',
        date: '2024-03-15',
        completed: false,
      },
      {
        title: 'Launch',
        date: '2024-04-15',
        completed: false,
      },
    ],
  };

  return (
    <div className="project-detail">
      <Button type="link" onClick={() => navigate('/projects')}>
        ← Back to Projects
      </Button>
      <Card title={project.name}>
        <Descriptions bordered>
          <Descriptions.Item label="Status" span={3}>
            <Tag color={project.status === 'In Progress' ? 'blue' : 'green'}>
              {project.status}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Progress" span={3}>
            <Progress percent={project.progress} />
          </Descriptions.Item>
          <Descriptions.Item label="Start Date">{project.startDate}</Descriptions.Item>
          <Descriptions.Item label="End Date">{project.endDate}</Descriptions.Item>
          <Descriptions.Item label="Budget">{project.budget}</Descriptions.Item>
          <Descriptions.Item label="Client">{project.client}</Descriptions.Item>
          <Descriptions.Item label="Team" span={3}>
            {project.team.join(', ')}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {project.description}
          </Descriptions.Item>
        </Descriptions>

        <div className="project-timeline">
          <h3>Project Timeline</h3>
          <Timeline>
            {project.milestones.map((milestone, index) => (
              <Timeline.Item
                key={index}
                color={milestone.completed ? 'green' : 'blue'}
              >
                <p>{milestone.title}</p>
                <p>{milestone.date}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetail; 