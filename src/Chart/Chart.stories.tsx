import React from "react";
import _ from "lodash";
import { Line } from "./index";
import { map } from "core-js/fn/array";

export default {
  title: "Chart",
};

/*
const LineData = {
  minValues: { x: -5, y: 0 },
  maxValues: { x: 10, y: 200 },
  axisLabels: {
    x: [
      "-5 to -3",
      "-3 to -1",
      "-1 to 1",
      "1 to 3",
      "3 to 5",
      "5 to 7",
      "7 to 9",
      "9 to 11",
    ],
    y: [0, 50, 100, 150, 200],
  },
  markers: [
    {
      x: 2.5,
      y: 2,
      pointLabel: "Your Score: 2.50",
      hoverLabel: null,
      markerLabel: "You are here",
      axis: "x",
    },
    {
      x: 2.5,
      y: 2,
      pointLabel: "Highest Score: 2.50",
      hoverLabel: null,
      markerLabel: "Highest",
      axis: "x",
    },
  ],
  chartData: [
    {
      id: "Score vs Users",
      data: [
        { x: -3, y: 0 },
        { x: -1, y: 0 },
        { x: 1, y: 193 },
        { x: 3, y: 4 },
        { x: 5, y: 0 },
        { x: 7, y: 0 },
        { x: 9, y: 0 },
        { x: 11, y: 0 },
      ],
    },
  ],
  
  noOfLabels: {
    x: 1,
    y: 1,
  },
};*/
/*
const LineData: LineDataProps = {
  axisLabels: {
    x: [-20, 0, 20, 40, 60, 80, 100],
    y: [0, 50, 100, 150, 200, 250, 300],
  },
  chartData: [
    {
      data: [
        {
          x: -20,
          y: 0,
        },
        {
          x: -10,
          y: 50,
        },
        {
          x: 0,
          y: 41,
        },
        {
          x: 10,
          y: 60,
        },
        {
          x: 20,
          y: 80,
        },
        {
          x: 30,
          y: 113,
        },
        {
          x: 40,
          y: 175,
        },
        {
          x: 50,
          y: 296,
        },
        {
          x: 60,
          y: 241,
        },
        {
          x: 70,
          y: 211,
        },
        {
          x: 80,
          y: 143,
        },
        {
          x: 83.5,
          y: 135,
        },
        {
          x: 90,
          y: 20,
        },
        {
          x: 94.25,
          y: 1,
        },
        {
          x: 100,
          y: 3,
        },
      ],
      id: "CSK vs RR",
    },
    {
      id: "CSK vs MI",
      data: [
        {
          x: -20,
          y: 0,
        },
        {
          x: -10,
          y: 50,
        },
        {
          x: 0,
          y: 41,
        },
        {
          x: 10,
          y: 100,
        },
        {
          x: 20,
          y: 30,
        },
        {
          x: 30,
          y: 113,
        },
        {
          x: 40,
          y: 15,
        },
        {
          x: 50,
          y: 100,
        },
        {
          x: 70,
          y: 211,
        },
        {
          x: 80,
          y: 13,
        },
        {
          x: 83.5,
          y: 135,
        },
        {
          x: 90,
          y: 20,
        },
        {
          x: 94.25,
          y: 1,
        },
        {
          x: 100,
          y: 3,
        },
      ],
    },
    {
      id: "DD vs MI",
      data: [
        {
          x: -20,
          y: 0,
        },
        {
          x: -10,
          y: 50,
        },
        {
          x: 0,
          y: 21,
        },
        {
          x: 10,
          y: 90,
        },
        {
          x: 20,
          y: 30,
        },
        {
          x: 30,
          y: 63,
        },
        {
          x: 40,
          y: 15,
        },
        {
          x: 50,
          y: 50,
        },

        {
          x: 70,
          y: 211,
        },
        {
          x: 83.5,
          y: 135,
        },
        {
          x: 90,
          y: 20,
        },

        {
          x: 100,
          y: 3,
        },
      ],
    },
  ],
  markers: [
    {
      axis: "x",
      hoverLabel: null,
      markerLabel: "You are here",
      pointLabel: "Your Score: 83.5",
      x: 83.5,
      y: 4,
    },
    {
      axis: "x",
      hoverLabel: null,
      markerLabel: "Highest",
      pointLabel: "Highest Score: 94.25",
      x: 94.25,
      y: 1,
    },
    {
      axis: "x",
      hoverLabel: null,
      markerLabel: "Mean",
      pointLabel: "Mean: 63.25",
      x: 63.25,
      y: null,
    },
    {
      axis: "x",
      hoverLabel: null,
      markerLabel: "Median",
      pointLabel: "Median: 54",
      x: 54,
      y: null,
    },
    {
      axis: "x",
      hoverLabel: null,
      markerLabel: "Qualify Marks",
      pointLabel: "Qualify Marks: 60",
      x: 60,
      y: null,
    },
  ],
  minValues: {
    x: -20,
    y: 0,
  },
  maxValues: {
    x: 100,
    y: 300,
  },
};
*/

const LineData = {
  minValues: { x: "2020-10-20", y: 0 },
  maxValues: { x: "2020-10-26", y: 100 },
  axisLabels: {
    x: [
      "2020-10-20",
      "2020-10-21",
      "2020-10-22",
      "2020-10-23",
      "2020-10-24",
      "2020-10-25",
      "2020-10-26",
    ],
    y: [0, 20, 40, 60, 80, 100],
  },
  markers: [
    {
      x: null,
      y: 80,
      pointLabel: null,
      hoverLabel: null,
      markerLabel: "Target Preparation",
      axis: "y",
    },
  ],
  chartData: [
    {
      id: "Preparation",
      data: [
        { x: "2020-10-20", y: 0 },
        { x: "2020-10-21", y: 5.94 },
      ],
    },
    {
      id: "Future",
      data: [
        { x: "2020-10-21", y: 5.94 },
        { x: "2020-10-22", y: 9.51 },
        { x: "2020-10-23", y: 13.13 },
        { x: "2020-10-24", y: 15.36 },
        { x: "2020-10-25", y: 17.98 },
        { x: "2020-10-26", y: 21.49 },
      ],
    },
  ],
  noOfLabels: { x: 1, y: 1 },
};

export const LineChart = () => {
  const { markers } = LineData;

  const pointLabel = (e) => {
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].x === e.x && !!markers[i].pointLabel) {
        return markers[i].pointLabel;
      }
    }

    return "";
  };

  let accuracy = [
    { x: "2020-10-20", y: 0.0 },
    { x: "2020-10-21", y: 0.0 },
    { x: "2020-10-22", y: 3.01 },
    { x: "2020-10-23", y: 5.87 },
    { x: "2020-10-24", y: 9.48 },
    { x: "2020-10-25", y: 12.99 },
    { x: "2020-10-26", y: 16.09 },
  ];
  let efficiency = [
    { x: "2020-10-20", y: 0.0 },
    { x: "2020-10-21", y: 0.0 },
    { x: "2020-10-22", y: 2.08 },
    { x: "2020-10-23", y: 4.82 },
    { x: "2020-10-24", y: 8.21 },
    { x: "2020-10-25", y: 11.46 },
    { x: "2020-10-26", y: 14.66 },
  ];

  let accuracyTmp = {};
  let efficiencyTmp = {};

  _.map(accuracy, ({ x, y }) => {
    accuracyTmp[x] = y;
  });

  _.map(efficiency, ({ x, y }) => {
    efficiencyTmp[x] = y;
  });

  const toolTip = ({ slice }) => {
    return (
      <div>
        <div className="chart__box">
          <div className="chart__box-heading">
            <span>Your Stats</span>
            <span>{slice.points[0].data.x}</span>
          </div>
          <div className="chart__box-body">
            <div>
              <div>
                <span>{accuracyTmp[slice.points[0].data.x]} %</span>
                <span className="chart__text">Accuracy</span>
              </div>
              <div>
                <span>{slice.points[0].data.y} %</span>
                <span className="chart__text">Goal Reached</span>
              </div>
              <div>
                <span>{efficiencyTmp[slice.points[0].data.x]} %</span>
                <span className="chart__text">Efficiency</span>
              </div>
            </div>
            {/*<div className="chart__box-date">
              <span>&uarr; 4.8% than last week</span>
        </div>*/}
          </div>
        </div>
      </div>
    );
  };

  const markerLineStyles = [
    {
      stroke: "#111",
      strokeWidth: 1,
      strokeDasharray: 4,
      opacity: 0.8,
    },
    {
      stroke: "#111",
      strokeWidth: 1,
      strokeDasharray: 4,
      opacity: 0.8,
    },
    {
      stroke: "#111",
      strokeWidth: 1,
      strokeDasharray: 4,
      opacity: 0.8,
    },
  ];

  const markerTextStyles = [
    {
      fontSize: 10,
    },
  ];
  return (
    <div
      style={{
        height: "60rem",
        paddingBottom: "8rem",
      }}
    >
      <Line
        meta={LineData}
        enableArea={false}
        pointLabel={pointLabel}
        toolTip={toolTip}
        markerLineStyles={markerLineStyles}
        markerTextStyles={markerTextStyles}
        colors={["#3498db", "#e74c3c", "#2ecc71"]}
        defs={[
          {
            name: "gradientA",
            styles: [
              { offset: 0, color: "inherit" },
              { offset: 100, color: "inherit", opacity: 0.3 },
            ],
          },
        ]}
        fill={[{ match: "*", id: "gradientA" }]}
        margin={{ top: 50, right: 50, bottom: 100, left: 60 }}
        scale={{
          x: { type: "point" },
          y: {
            type: "linear",
            stacked: false,
            reversed: false,
            min: 0,
            max: 100,
          },
        }}
      />
    </div>
  );
};
