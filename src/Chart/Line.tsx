import React from "react";
import { Line } from "@nivo/line";
import { LineProps } from "./Line.types";
import AutoSizer from "react-virtualized-auto-sizer";

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

/*
  Remove this after using from the library
*/
function _objectSpread$4(target, options) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys: any = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function linearGradientDef(id, colors) {
  var options =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread$4(
    {
      id: id,
      type: "linearGradient",
      colors: colors,
    },
    options
  );
}

export const LineChart = ({
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
  scale = {
    x: undefined,
    y: undefined,
  },
}: LineProps) => {
  const {
    chartData,
    markers = [],
    minValues,
    maxValues,
    axisLabels,
    noOfLabels = {
      x: 1,
      y: 1,
    },
  } = meta;

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
        legend: markers[i].pointLabel
          ? markers[i].pointLabel
          : markers[i].markerLabel,
      });
    }
  }

  /**
   * Legends
   */
  let defaultLegendsConfig: Array<any>;
  defaultLegendsConfig = [
    {
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: 80,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ];

  // Convert Defs to Nivo's Defs
  let defsList = [];
  for (let i = 0; i < defs.length; i++) {
    defsList.push(linearGradientDef(defs[i].name, defs[i].styles));
  }

  /**
   * Transform axisLabels
   */
  let xLabels = [];
  for (
    let i = 0;
    i < axisLabels.x.length;
    i = i + axisLabels.x.length * Math.floor(axisLabels.x.length / noOfLabels.x)
  ) {
    xLabels.push(axisLabels.x[i]);
  }
  // If the last item is not already added, add it
  if (xLabels[xLabels.length - 1] !== axisLabels.x[axisLabels.x.length - 1]) {
    xLabels.push(axisLabels.x[axisLabels.x[axisLabels.x.length - 1]]);
  }

  let yLabels = [];
  for (
    let i = 0;
    i < axisLabels.y.length;
    i = i + axisLabels.y.length * Math.floor(axisLabels.y.length / noOfLabels.y)
  ) {
    yLabels.push(axisLabels.y[i]);
  }
  // If the last item is not already added, add it
  if (yLabels[yLabels.length - 1] !== axisLabels.y[axisLabels.y.length - 1]) {
    yLabels.push(axisLabels.y[axisLabels.y[axisLabels.y.length - 1]]);
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Line
          height={height}
          width={width}
          data={chartData}
          margin={margin}
          xScale={
            { ...scale.x } || {
              type: "linear",
              min: minValues.x,
              max: maxValues.x,
            }
          }
          yScale={
            { ...scale.y, min: minValues.y, max: maxValues.y } || {
              type: "linear",
              min: minValues.y,
              max: maxValues.y,
              stacked: false,
              reversed: false,
            }
          }
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          colors={colors}
          axisLeft={{
            tickValues: yLabels,
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
            tickValues: xLabels,
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
          legends={defaultLegendsConfig}
        />
      )}
    </AutoSizer>
  );
};
