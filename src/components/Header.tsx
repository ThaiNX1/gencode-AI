import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbNameMap: Record<string, string> = {
    'projects': 'Projects',
    'tasks': 'Tasks',
    'settings': 'Settings',
  };

  const extraBreadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSnippets.length - 1;
    
    // Handle project detail pages
    if (pathSnippets[0] === 'projects' && index === 1) {
      // For project detail, use "Project Name" format
      const name = `Project ${snippet}`; // You can replace this with actual project name from your data
      return (
        <React.Fragment key={url}>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">{name}</span>
        </React.Fragment>
      );
    }

    const name = breadcrumbNameMap[snippet] || 'Dashboard';
    return (
      <React.Fragment key={url}>
        <span className="breadcrumb-separator">/</span>
        <span className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
          {isLast ? name : <Link to={url}>{name}</Link>}
        </span>
      </React.Fragment>
    );
  });

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="header-left">
        <div className="breadcrumb">
          <span className="breadcrumb-item">
            <Link to="/">Home</Link>
          </span>
          {extraBreadcrumbItems}
        </div>
      </div>
      <div className="header-right">
        <Dropdown overlay={userMenu} placement="bottomRight">
          <div className="user-info">
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header; 