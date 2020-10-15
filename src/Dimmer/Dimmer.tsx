import React from "react";

interface Dimmer {
  children: React.ReactNode;
  loading: React.ReactNode;
  isLoading?: boolean;
}

export const Dimmer = (props: Dimmer) => {
  const isLoading = props.isLoading === undefined ? true : props.isLoading;
  return (
    <div className="dimmer">
      {isLoading ? <div className="dimmer__bg"></div> : <></>}
      {props.children}
      {isLoading ? (
        <div className="dimmer__loading">{props.loading}</div>
      ) : (
        <></>
      )}
    </div>
  );
};
