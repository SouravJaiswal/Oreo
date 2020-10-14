import React from "react";
import { Loading } from "./index";

export default {
  title: "Loading",
};

export const Default = () => {
  return (
    <>
      <Loading />
    </>
  );
};

export const Light = () => {
  return (
    <>
      <Loading shade="light" />
    </>
  );
};

export const Modern = () => {
  return (
    <>
      <Loading type="modern" />
    </>
  );
};

export const Line = () => {
  return (
    <>
      <Loading type="line" />
    </>
  );
};
