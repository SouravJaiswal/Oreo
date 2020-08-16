import React from 'react';
import { Card } from './index';
import { H3, Paragraph } from '../Typography';

export default {
  title: 'Card',
};

export const Default = () => <Card type="default">Default</Card>;
export const Border = () => <Card type="border">Border</Card>;
export const Shadow = () => (
  <Card type="shadow">
    <H3 className=" u-margin-bottom-small">Batman Begins!</H3>
    <Paragraph>
      No guns, no killing. I'll be standing where l belong. Between you and the
      peopIe of Gotham. My anger outweights my guilt. Bats frighten me. It's
      time my enemies shared my dread. I'm not wearing hockey pads.
    </Paragraph>
  </Card>
);
