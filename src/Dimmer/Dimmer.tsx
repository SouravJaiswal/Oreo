import React from 'react';

interface Dimmer {
  children: React.ReactNode;
  loading: React.ReactNode;
}

export const Dimmer = (props: any) => {
  return (
    <div className="dimmer">
      <div className="dimmer__bg"></div>
      {props.children}
      <div className="dimmer__loading">{props.loading}</div>
    </div>
  );
};
