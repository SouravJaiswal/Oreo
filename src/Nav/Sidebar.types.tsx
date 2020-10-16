export interface SidebarProps {
  children: React.ReactNode;
  type?: "light" | "dark";
  collapsed: boolean;
  className?: string;
  shortLogo: React.ReactNode;
  longLogo: React.ReactNode;
  onCollapsed: Function;
  direction?: "left" | "right";
}
