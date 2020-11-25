import React from "react";
import { ProgressProps } from "./Progress.types";

export const BlockProgress = (props: ProgressProps) => {
  const {
    radius = 120,
    strokeWidth = 4,
    progressPercentage,
    title = "",
    pointsType = "point",
    currentLevel,
  } = props;
  const normalizedRadius = radius - strokeWidth * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="progress-block">
      <div
        className="progress-block__circle"
        style={{ height: `${radius * 2}px` }}
      >
        <svg height={radius * 2} width={radius * 2}>
          <circle
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <svg
          height={radius * 2}
          width={radius * 2}
          className="progress-block__inner-circle"
        >
          <circle
            fill="transparent"
            strokeWidth={strokeWidth}
            style={{ strokeDashoffset }}
            stroke-width={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <span className="progress-block__circle-text">
          <span>{progressPercentage} %</span>
          <span>Level {currentLevel}</span>
        </span>
      </div>
      <div className="progress-block__meta">
        <div className="progress-block__title">{title}</div>
        <div className="progress-block__next-level">
          {100 - progressPercentage} more
          {progressPercentage >= 99 ? ` ${pointsType} ` : ` ${pointsType}s `} to
          Level {currentLevel + 1}
        </div>
      </div>
    </div>
  );
};
