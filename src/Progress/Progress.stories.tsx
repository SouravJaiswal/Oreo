import { title } from "process";
import React, { useState } from "react";
import { Progress } from "./Progress";

export default {
  title: "Progress",
};

export const Line = () => {
  return (
    <Progress
      type="line"
      currentLevel={3}
      progressPercentage={60}
      pointsType="point"
      title="Clean and Jerk"
    />
  );
};

export const Block = () => {
  return (
    <Progress
      type="block"
      currentLevel={3}
      progressPercentage={2}
      pointsType="point"
      title="Clean and Jerk"
      radius={65}
      strokeWidth={5}
    />
  );
};
