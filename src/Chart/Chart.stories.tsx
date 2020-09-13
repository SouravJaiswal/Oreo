import React from "react";
import { Line } from "./index";
import { LineDataProps } from "./Line.types";

export default {
  title: "Chart",
};

const LineData: LineDataProps = {
  axisLabel: {
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
      id: "Score 1",
    },
    {
      id: "Score 2",
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
      id: "Score 3",
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
    /*{
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
    },*/
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

export const LineChart = () => {
  const { markers, defaultPointLabel, defaultHoverLabel } = LineData;

  const pointLabel = (e) => {
    for (let i = 0; i < markers.length; i++) {
      if (markers[i].x === e.x && !!markers[i].pointLabel) {
        return markers[i].pointLabel;
      }
    }
    if (!!defaultPointLabel) {
      return defaultPointLabel + e.x;
    } else {
      return "";
    }
  };

  const toolTip = ({ slice }) => {
    return (
      <div>
        {slice.points.map((point) => {
          let label = "";
          for (let i = 0; i < markers.length; i++) {
            if (markers[i].x === point.data.x && !!markers[i].pointLabel) {
              label = markers[i].pointLabel;
            }
          }
          if (!label) {
            label = `${defaultHoverLabel}: ${point.data.x}`;
          }
          return (
            <div className="chart__box">
              <div className="chart__box-heading">
                <span>Your Stats</span>
                <span>
                  29<sup>th</sup> July 2020
                </span>
              </div>
              <div className="chart__box-body">
                <div>
                  <div>
                    <span>43%</span>
                    <span className="chart__text">Accuracy</span>
                  </div>
                  <div>
                    <span>32%</span>
                    <span className="chart__text">Goal Reached</span>
                  </div>
                  <div>
                    <span>37%</span>
                    <span className="chart__text">Efficiency</span>
                  </div>
                </div>
                <div className="chart__box-date">
                  <span>&uarr; 4.8% than last week</span>
                </div>
              </div>
            </div>
          );
        })}
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
    <div style={{ height: "50rem" }}>
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
      />
    </div>
  );
};
