import React from "react";
import { BlockProgress } from "./BlockProgress";
import { LineProgress } from "./LineProgress";
import { ProgressProps } from "./Progress.types";

export const Progress = (props: ProgressProps) => {
  switch (props.type) {
    case "block":
      return <BlockProgress {...props} />;
    case "line":
    default:
      return <LineProgress {...props} />;
  }
};
