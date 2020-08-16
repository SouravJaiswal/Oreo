/// <reference types="react" />
export interface SidebarProps {
    children: React.ReactNode;
    type?: 'light' | 'dark';
    collapsed: boolean;
    className?: string;
    logo: React.ReactNode;
    onCollapsed: Function;
    direction?: 'left' | 'right';
}
