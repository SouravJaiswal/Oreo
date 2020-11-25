import React from "react";
import "./progress.scss";
import { ProgressProps } from "./Progress.types";

export const LineProgress = ({
  currentLevel = 0,
  progressPercentage,
  pointsType,
  title,
}: ProgressProps) => {
  const pointsToNextLevel = 100 - progressPercentage;
  return (
    <div className="progress-line">
      <div className="progress-line__heading">{title}</div>
      <div className="progress-line__bar">
        <span
          style={{ width: `${progressPercentage}%` }}
          className="progress-line__bar-left"
        ></span>
        <span
          style={{ width: `${pointsToNextLevel}%` }}
          className="progress-line__bar-right"
        ></span>
      </div>
      <div className="progress-line__meta">
        <span className="progress-line__currentLevel">
          Level {currentLevel}
        </span>{" "}
        <div>
          <span>
            {pointsToNextLevel} more {pointsType}
            {pointsToNextLevel === 1 ? "" : "s"} to
          </span>
          <span className="progress-line__nextLevel">
            Level {currentLevel + 1}
          </span>
        </div>
      </div>
    </div>
  );
};
