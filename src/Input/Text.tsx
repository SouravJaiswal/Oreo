import React, { ChangeEvent, useState, useRef } from 'react';
import { InputProps } from './Input.types';
import { ErrMsg } from './ErrMsg';
import { checkErrors } from './util';
/*
  Usage:

  ## With Label

  <Input type="text" label="Username" name="username" 
  rules={[
          type: 'required', errMsg: 'Username is required' },
          {
            type: 'regex',
            errMsg: 'Username does not match the required items',
            limiter:
              '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
          },
  ]}
  className=""
  value=""
  onChange=""
  />

  ## With Icon

  <Input type="text" label="Username" name="username" 
  rules={[
          type: 'required', errMsg: 'Username is required' },
          {
            type: 'regex',
            errMsg: 'Username does not match the required items',
            limiter:
              '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
          },
  ]}
  className=""
  value=""
  onChange=""
  icon={<svg></svg>}
  />

*/

export const Text = (props: InputProps) => {
  let [errMsg, setErrMsg]: [Array<string>, Function] = useState([]);
  let [touched, setTouched]: [boolean, Function] = useState(false);
  const { rules, label, icon, name, className, type, autoFocus, value } = props;

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    // Handle all the rules
    checkErrors(value, setErrMsg, rules);

    // Touched state
    setTouched(true);

    return props.onChange({ value, isValid: !!errMsg.length });
  };

  // If touched and error show the error border, else success border
  const showErrState = touched
    ? errMsg.length > 0
      ? 'input--error'
      : 'input--success'
    : '';

  // If icon is provided, show the icon text
  if (!!icon) {
    return (
      <div className="input__group">
        <div className="input__main">
          <input
            autoFocus={autoFocus}
            value={value}
            type={type}
            name={name}
            className={`input  input--text input__with-icon ${showErrState} ${className}`}
            onChange={onChange}
            placeholder={label}
            required
          />
          <span className="input__icon">{icon}</span>
        </div>
        <div className="input__err">
          {errMsg.map((msg) => (
            <ErrMsg key={msg} msg={msg} />
          ))}
        </div>
      </div>
    );
  }

  // show the label format
  return (
    <div className="input__group">
      <div className="input__main">
        <input
          type={type}
          name={name}
          value={value}
          className={`input input--${type} input__with-label ${showErrState} ${className}`}
          onChange={onChange}
          required
        />
        <span className="input__label">{label}</span>
      </div>
      <div className="input__err">
        {errMsg.map((msg) => (
          <ErrMsg key={msg} msg={msg} />
        ))}
      </div>
    </div>
  );
};
