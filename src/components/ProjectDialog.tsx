import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { QueryServices } from '../graphql/services/queryServices';
import dayjs from 'dayjs';

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  project?: {
    key: string;
    name: string;
    status: string;
    progress: number;
    startDate: string;
    endDate: string;
  };
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  open,
  onClose,
  onSave,
  project,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        name: project.name,
        status: project.status,
        progress: project.progress,
        startDate: project.startDate ? dayjs(project.startDate) : null,
        endDate: project.endDate ? dayjs(project.endDate) : null,
      });
    } else {
      form.resetFields();
    }
  }, [project, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (project) {
        // Update existing project
        // await QueryServices.projectUpdate({
        //   id: project.key,
        //   ...values,
        //   startDate: values.startDate?.format('YYYY-MM-DD'),
        //   endDate: values.endDate?.format('YYYY-MM-DD'),
        // });
      } else {
        // Create new project
        // await QueryServices.projectCreate({
        //   ...values,
        //   startDate: values.startDate?.format('YYYY-MM-DD'),
        //   endDate: values.endDate?.format('YYYY-MM-DD'),
        // });
      }
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  return (
    <Modal
      title={project ? 'Edit Project' : 'Add New Project'}
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          status: 'In Progress',
          progress: 0,
        }}
      >
        <Form.Item
          name="name"
          label="Project Name"
          rules={[{ required: true, message: 'Please input project name!' }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select status!' }]}
        >
          <Select>
            <Select.Option value="In Progress">In Progress</Select.Option>
            <Select.Option value="On Hold">On Hold</Select.Option>
            <Select.Option value="Completed">Completed</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="progress"
          label="Progress"
          rules={[{ required: true, message: 'Please input progress!' }]}
        >
          <InputNumber
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            // parser={(value) => value ? parseInt(value.replace('%', '')) : 0}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true, message: 'Please select start date!' }]}
        >
          <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="endDate"
          label="End Date"
          rules={[{ required: true, message: 'Please select end date!' }]}
        >
          <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
        </Form.Item>
      </Form>
    </Modal>
  );
}; 