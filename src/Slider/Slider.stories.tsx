import React, { useState } from "react";
import { Slider } from "./Slider";

export default {
  title: "Slider",
};

export const Default = () => {
  let data = [
    {
      img: "https://via.placeholder.com/150x300",
      heading: "Heading 1",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio facere quod?",
    },
    {
      img: "https://via.placeholder.com/250x300",
      heading: "Heading 2",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio facere quod? ",
    },
    {
      img: "https://via.placeholder.com/150x300",
      heading: "Heading 3",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit distinctio facere quod? Saepe, veritatis ",
    },
  ];
  return <Slider data={data} />;
};
