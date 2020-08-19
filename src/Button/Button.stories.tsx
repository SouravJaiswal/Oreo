import React from 'react';
import { Button } from './index';

export default {
  title: 'Button',
};

export const Default = () => {
  return (
    <>
      <Button type="default">Default</Button>
      <Button type="default" loading={true}>
        Read More
      </Button>
    </>
  );
};
export const Primary = () => {
  return (
    <>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" loading={true}>
        Read More
      </Button>
    </>
  );
};
export const Danger = () => {
  return (
    <>
      <Button type="danger">Danger</Button>
      <Button type="danger" loading={true}>
        Read More
      </Button>
    </>
  );
};
export const Success = () => {
  return (
    <>
      <Button type="success">Success</Button>
      <Button type="success" loading={true}>
        Read More
      </Button>
    </>
  );
};
export const Grey = () => {
  return (
    <>
      <Button type="grey">Grey</Button>
      <Button type="grey" loading={true}>
        Read More
      </Button>
    </>
  );
};
export const Text = () => <Button type="text">Read More</Button>;
