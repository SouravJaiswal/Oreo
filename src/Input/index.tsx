import React, { ChangeEvent, useState } from 'react';

// All the interfaces
interface Rules {
  errMsg: string;
  type: string;
  limiter?: string;
  min?: number;
  max?: number;
}

interface InputText {
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  onChange: Function;
}

interface Input extends InputText {
  type: string;
  className?: string;
  icon?: React.ReactNode;
  rules?: Array<Rules>;
  autoFocus?: boolean;
}

export const Input = (props: Input) => {
  switch (props.type) {
    case 'text':
      return <Text {...props} />;
    default:
      return <Text {...props} />;
  }
};

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
const Text = (props: Input) => {
  let [errMsg, setErrMsg]: [Array<string>, Function] = useState([]);
  let [touched, setTouched]: [boolean, Function] = useState(false);
  const { rules, label, icon, name, className, type, autoFocus } = props;

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    // Handle all the rules
    checkErrors(value, setErrMsg, rules);

    // Touched state
    setTouched(true);

    return props.onChange(value);
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

const ErrMsg = ({ msg }: { msg: string }) => {
  return <div className="errmsg">{msg}</div>;
};

// All utilities functions
const checkErrors = (
  value: string,
  setErrMsg: Function,
  rules?: Array<Rules>
) => {
  // No rules, do not execute any thing
  if (!rules) {
    return;
  }

  let errors = [];
  // Handle all rules
  for (let i = 0; i < rules.length; i++) {
    const { limiter, errMsg, type } = rules[i];
    switch (type) {
      case 'required':
        if (value.length === 0) {
          errors.push(errMsg);
        }
        break;
      case 'regex':
        if (!limiter) return;
        let regex = new RegExp(limiter);

        if (!regex.test(value)) {
          errors.push(errMsg);
        }
        break;
      default:
        break;
    }
  }

  setErrMsg(errors);
};
