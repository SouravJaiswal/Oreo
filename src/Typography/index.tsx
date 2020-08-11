import React from 'react';

export const HeadingJumbo = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 {...props} className={`heading heading--jumbo ${props.className}`}>
      {props.children}
    </h1>
  );
};

export const H1 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 {...props} className={`heading heading--primary ${props.className}`}>
      {props.children}
    </h1>
  );
};

export const H2 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 {...props} className={`heading heading--secondary ${props.className}`}>
      {props.children}
    </h2>
  );
};

export const H3 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 {...props} className={`heading heading--tertiary ${props.className}`}>
      {props.children}
    </h3>
  );
};

export const H4 = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h4 {...props} className={`heading heading--regular ${props.className}`}>
      {props.children}
    </h4>
  );
};

export const Paragraph = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p {...props} className={`paragraph ${props.className}`}>
      {props.children}
    </p>
  );
};
