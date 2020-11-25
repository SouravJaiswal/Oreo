export interface ProgressProps {
    title: string;
    currentLevel: number;
    progressPercentage: number;
    pointsType: string;
    type: "line" | "block";
    radius?: number;
    strokeWidth?: number;
}
