export interface ProgressProps {
  title: string;
  currentLevel: number;
  progressPercentage: number;
  // This will be shown in the "37 more points to"
  pointsType: string;
  type: "line" | "block";
  radius?: number;
  strokeWidth?: number;
  flavour?: "small" | "medium" | "default";
}
