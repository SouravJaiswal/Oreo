import React from 'react';
import { Button } from './index';

export default {
  title: 'Button',
};

export const Default = () => <Button state="default">Default</Button>;
export const Primary = () => <Button state="primary">Primary</Button>;
export const Danger = () => <Button state="danger">Danger</Button>;
export const Success = () => <Button state="success">Success</Button>;
export const Grey = () => <Button state="grey">Grey</Button>;
export const Text = () => <Button state="text">Read More</Button>;
