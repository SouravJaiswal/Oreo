import React, { ChangeEvent, useState, useRef } from 'react';
import { File } from './File';
import { Radio } from './Radio';
import { Text } from './Text';
import { InputProps } from './Input.types';

export const Input = (props: InputProps) => {
  switch (props.type) {
    case 'file':
      return <File {...props} />;
    case 'checkbox':
    case 'radio':
      return <Radio {...props} />;
    default:
      return <Text {...props} />;
  }
};
