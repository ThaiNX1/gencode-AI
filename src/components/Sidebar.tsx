import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  ProjectOutlined,
  CheckSquareOutlined,
  SettingOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined
} from '@ant-design/icons';
import './Sidebar.css';

interface SidebarProps {
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapse(newCollapsedState);
  };

  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: 'Projects',
    },
    {
      key: '/tasks',
      icon: <CheckSquareOutlined />,
      label: 'Tasks',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className={isCollapsed ? 'hidden' : ''}>App Name</h2>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        className="sidebar-menu"
        items={menuItems}
        inlineCollapsed={isCollapsed}
        onClick={handleMenuClick}
        selectedKeys={[location.pathname]}
      />
      <div className="sidebar-footer">
        <button className="collapse-btn" onClick={toggleSidebar}>
          {isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </button>
        <span className={`version-number ${isCollapsed ? 'hidden' : ''}`}>v1.0.0</span>
      </div>
    </aside>
  );
};

export default Sidebar; 