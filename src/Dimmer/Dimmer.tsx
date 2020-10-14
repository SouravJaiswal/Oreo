import React from "react";

interface Dimmer {
  children: React.ReactNode;
  loading: React.ReactNode;
  isLoading: boolean;
}

export const Dimmer = (props: Dimmer) => {
  return (
    <div className="dimmer">
      <div className="dimmer__bg"></div>
      {props.children}
      {props.isLoading ? (
        <div className="dimmer__loading">{props.loading}</div>
      ) : (
        <></>
      )}
    </div>
  );
};
