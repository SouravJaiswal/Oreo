import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Defs, linearGradientDef } from "@nivo/core";
import { BsArrowUpShort } from "react-icons/bs";
import { LineProps } from "./Line.types";
import { values } from "lodash";

/**
 * 1. Color
 * 2. Legends
 * 3. Margin
 * 4. Point Label
 * 5. Tooltip
 * 6. Defs
 * 7. Fills
 * 8. Enable Area
 */

export const Line = ({
  meta,
  margin,
  colors = ["#3498db"],
  legends = {
    x: "",
    y: "",
  },
  pointLabel,
  toolTip,
  markerTextStyles = [],
  markerLineStyles = [],
  defs,
  fill,
  enableArea = false,
  formatAxis = { x: null, y: null },
}: LineProps) => {
  const { chartData, markers = [], minValues, maxValues, axisLabel } = meta;

  /**
   * Marker formatting with Default values
   */
  let markersList = [];
  const defaultLineStyle = {
    stroke: "#111",
    strokeWidth: 1,
    strokeDasharray: 4,
    opacity: 0.8,
  };
  const defaultTextStyle = {
    fontSize: 10,
  };
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].markerLabel) {
      markersList.push({
        axis: markers[i].axis || "x",
        value: markers[i][markers[i].axis || "x"],
        lineStyle: markerLineStyles[i] || defaultLineStyle,
        textStyle: markerTextStyles[i] || defaultTextStyle,
        legend: markers[i].pointLabel ? "" : markers[i].markerLabel,
      });
    }
  }

  // Convert Defs to Nivo's Defs
  let defsList = [];
  for (let i = 0; i < defs.length; i++) {
    defsList.push(linearGradientDef(defs[i].name, defs[i].styles));
  }

  return (
    <ResponsiveLine
      data={chartData}
      margin={margin}
      xScale={{
        type: "linear",
        min: minValues.x,
        max: maxValues.x,
      }}
      yScale={{
        type: "linear",
        min: minValues.y,
        max: maxValues.y,
        stacked: false,
        reverse: false,
      }}
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      colors={colors}
      axisLeft={{
        tickValues: axisLabel.y,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legends.y || "",
        legendOffset: -45,
        legendPosition: "middle",
        format: !!formatAxis.y
          ? formatAxis.y
          : (value) => {
              return value;
            },
      }}
      axisBottom={{
        tickValues: axisLabel.x,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legends.x || "",
        legendOffset: 36,
        legendPosition: "middle",
        format: !!formatAxis.x
          ? formatAxis.x
          : (value) => {
              return value;
            },
      }}
      //enableGridX={false}
      //enableGridY={false}
      gridXValues={[minValues.x]}
      gridYValues={[minValues.y]}
      pointSize={6}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      enablePointLabel={true}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel={pointLabel}
      pointLabelYOffset={-24}
      useMesh={true}
      animate={true}
      enableArea={enableArea}
      enableSlices={"x"}
      sliceTooltip={toolTip}
      defs={defsList}
      fill={fill}
      markers={markersList}
    />
  );
};
