import React from 'react';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
  children,
  collapsed,
  logo,
  onCollapsed,
  className = '',
  type = 'light',
  direction = 'left',
}: SidebarProps) => {
  const sidebarOpen = !collapsed ? '' : 'sidebar--collapsed';
  const myDirection = direction === 'left' ? 'sidebar--left' : 'sidebar--right';
  return (
    <div
      className={`sidebar sidebar--${type} ${sidebarOpen} ${myDirection} ${className} `}>
      <div className="sidebar__logo">
        {logo}
        <span className="sidebar__control" onClick={() => onCollapsed()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
          </svg>
        </span>
      </div>
      {children}
    </div>
  );
};
