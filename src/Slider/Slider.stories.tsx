import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  title: "Slider",
};

export const Default = () => {
  let data = [
    {
      img: (
        <img
          src="https://examlounge.com/img/analysis1.png"
          alt=""
          style={{ width: "100%", objectFit: "contain", marginBottom: "-2rem" }}
        />
      ),
      heading: "Artificial Intelligence",
      desc:
        "Analyze your overall performance and improvement throughout the series of tests. ",
    },
    {
      img: <img src="https://examlounge.com/img/blog.png" alt="" />,
      heading: "Read and Learn",
      desc:
        "Get the free study material for your exams in both video and blog format.",
    },
    {
      img: <img src="https://examlounge.com/img/contest.png" alt="" />,
      heading: "Puzzle, Games and Contest",
      desc:
        "Learning shouldn’t be just limited to tests. Tricky and brain teasing puzzles on different topics.",
    },
  ];
  return <Slider data={data} />;
};
