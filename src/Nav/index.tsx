import React from 'react';

interface Nav {
  logo: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  type?: string;
}

interface NavWithSide {
  menu: Array<React.ReactNode>;
  type?: string;
  collapsed: boolean;
  className?: string;
}

export const Nav = ({ logo, children, className, type = 'side' }: Nav) => {
  return (
    <div className={`nav nav--${type} ${className}`}>
      <div className="nav__logo ">{logo}</div>
      {children}
    </div>
  );
};

export const NavMenu = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`nav__menu ${className}`}>{children}</div>;
};

export const NavActions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`nav__actions ${className}`}>{children}</div>;
};

export const NavSideBar = ({
  menu,
  collapsed,
  className = '',
  type = 'dark',
}: NavWithSide) => {
  const sidebarOpen = !collapsed ? '' : 'sidebar--collapsed';
  return (
    <div className={`sidebar__wrapper ${className}`}>
      <div className={`sidebar sidebar--${type} ${sidebarOpen} `}>
        {menu.map((link) => (
          <div className="sidebar__item">{link}</div>
        ))}
      </div>
    </div>
  );
};
