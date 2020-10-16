import React from "react";
import { Dimmer } from "./index";
import { Loading } from "../Loading";
import { H1, H2, Paragraph } from "../Typography";

export default {
  title: "Dimmer",
};

export const Modern = () => (
  <Dimmer isLoading={false} loading={<Loading type="modern" shade="light" />}>
    <H1>This is a heading!</H1>
    <Paragraph className="u-margin-bottom-medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur
      nobis nisi voluptas molestias quaerat consectetur dignissimos ipsam
      nostrum quibusdam maxime consequatur amet! Libero magni tempore distinctio
      quaerat magnam molestias!
    </Paragraph>
    <H2>This is a heading!</H2>
    <Paragraph className="u-margin-bottom-medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur
      nobis nisi voluptas molestias quaerat consectetur dignissimos ipsam
      nostrum quibusdam maxime consequatur amet! Libero magni tempore distinctio
      quaerat magnam molestias!
    </Paragraph>
  </Dimmer>
);
export const Default = () => (
  <Dimmer loading={<Loading />}>
    <H1>This is a heading!</H1>
    <Paragraph className="u-margin-bottom-medium">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aspernatur
      nobis nisi voluptas molestias quaerat consectetur dignissimos ipsam
      nostrum quibusdam maxime consequatur amet! Libero magni tempore distinctio
      quaerat magnam molestias!
    </Paragraph>
  </Dimmer>
);
