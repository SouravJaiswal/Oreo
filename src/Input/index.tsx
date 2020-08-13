import React, { ChangeEvent, useState, useRef } from 'react';
import { Button } from 'Button';

// All the interfaces
interface Rules {
  errMsg: string;
  type: string;
  limiter?: string;
  min?: number;
  max?: number;
  maxSize?: number;
  fileType?: string;
}

interface Options {
  label: string;
  value: string;
}

interface Input {
  name: string;
  value: string | number | Array<string>;
  label: string;
  placeholder?: string;
  onChange: Function;
  min?: number;
  max?: number;
  type: string;
  className?: string;
  icon?: React.ReactNode;
  rules?: Array<Rules>;
  autoFocus?: boolean;
  options?: Array<Options>;
  initialValue?: string;
  accept?: string;
  full?: boolean;
}

export const Input = (props: Input) => {
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
  const { rules, label, icon, name, className, type, autoFocus, value } = props;

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

const Radio = (props: Input) => {
  const { label, name, className, type, options, value, full }: Input = props;

  let onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (!Array.isArray(props.value)) return;

    // Either add or remove the clicked element
    if (props.value.indexOf(value) < 0) {
      return props.onChange([...props.value, value]);
    } else {
      return props.onChange(
        props.value.filter((v) => {
          return v !== value;
        })
      );
    }
  };

  let onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return props.onChange(value);
  };

  let fullWidthContainer = !!full ? 'radio__container--full' : '';

  let fullWidthMain = !!full ? 'radio__main--full' : '';

  let fullWidthGroup = !!full ? 'radio__group--full' : '';

  // If icon is provided, show the icon
  if (type === 'checkbox') {
    return (
      <div className={`radio__group ${fullWidthGroup}`}>
        <div className={`radio__main ${fullWidthMain}`}>
          {!!options
            ? options.map((opt: Options) => {
                const id = opt.value + Math.random() * 10;
                return (
                  <div
                    className={`radio__container ${fullWidthContainer}`}
                    key={opt.value}>
                    <input
                      className={`radio__input ${className}`}
                      type="checkbox"
                      id={id}
                      name={name}
                      value={opt.value}
                      checked={
                        Array.isArray(value) && value.indexOf(opt.value) >= 0
                      }
                      onChange={onCheckboxChange}
                    />
                    <label className="radio__label" htmlFor={id}>
                      {opt.label}
                    </label>
                  </div>
                );
              })
            : ''}
        </div>
        {!full ? <span className="input__label">{label}</span> : ''}
      </div>
    );
  }

  return (
    <div className="radio__group">
      <div className="radio__main">
        {!!options
          ? options.map((opt: Options) => (
              <div className="radio__container" key={opt.value}>
                <input
                  className={`radio__input ${className}`}
                  type="radio"
                  id={opt.value}
                  name={name}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={onRadioChange}
                />
                <label className="radio__label" htmlFor={opt.value}>
                  {opt.label}
                </label>
              </div>
            ))
          : ''}
      </div>
      <span className="input__label">{label}</span>
    </div>
  );
};

// 1. Need to upload the image - Done
// 2. Handle upload image - Done
// 2.1 Get the file uploaded as a file
// 2.2 Get the file as an object
// 3. Decide if you handle upload or let the user handle it
// 4. Call the parent handler on upload
// 5. Display the preview
// 6. Make it pretty

const File = (props: Input) => {
  let [errMsg, setErrMsg]: [Array<string>, Function] = useState([]);
  const { name, rules, accept, label, value } = props;
  let fileReader: FileReader = new FileReader();
  let [imageBlob, setImageBlob]: [any, Function] = useState(value);
  let [image, setImage]: [any, Function] = useState({});
  let fileInputElement = useRef<HTMLInputElement>(null);

  fileReader.onload = ({ target }: ProgressEvent<FileReader>) => {
    if (!target) return;

    const { result } = target;

    setImageBlob(!!result ? result : {});
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;

    if (!files) return;

    if (files.length > 0) {
      // If the file size is greater than the max file
      // size dont upload
      // Handle all the rules
      if (!checkErrors(files[0], setErrMsg, rules)) {
        fileReader.readAsDataURL(files[0]);
        setImage(files[0]);
        return props.onChange(files[0]);
      }
    }
  };

  // Clear the image from blob and from the parent
  const clearImage = () => {
    props.onChange('');
    setImageBlob('');
    setErrMsg([]);

    // Clear the value of the input element
    if (fileInputElement.current) {
      fileInputElement.current.value = '';
    }
  };
  return (
    <div className="file">
      <div className="file__main">
        {!!imageBlob ? (
          <div className="file__preview">
            <img src={imageBlob} alt={name} />
            <span className="file__name">{image.name}</span>
          </div>
        ) : (
          ''
        )}
        <div className="file__buttons">
          <div className="file__button">
            <div className="file__overlay">
              <Button state="grey">
                <span className="file__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
                  </svg>
                </span>
                Upload
              </Button>
            </div>
            <input
              className="file__input"
              type="file"
              onChange={onChange}
              accept={accept}
              ref={fileInputElement}
            />
          </div>
          {!!imageBlob ? (
            <div className="file__clear">
              <Button state="text" onClick={clearImage}>
                Clear
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="input__err">
          {errMsg.map((msg) => (
            <ErrMsg key={msg} msg={msg} />
          ))}
        </div>
      </div>
      <div className="input__label">{label}</div>
    </div>
  );
};

const ErrMsg = ({ msg }: { msg: string }) => {
  return <div className="errmsg">{msg}</div>;
};

// All utilities functions
const checkErrors = (
  value: string | File,
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
    const { limiter, errMsg, type, min, max, maxSize } = rules[i];
    switch (type) {
      case 'required':
        if (typeof value === 'string' && value.length === 0) {
          errors.push(errMsg);
        }
        break;
      case 'min':
        if (
          typeof value !== 'string' ||
          typeof min !== 'number' ||
          min === undefined
        )
          break;
        if (parseInt(value) < min) {
          errors.push(errMsg);
        }
        break;
      case 'max':
        if (
          typeof value !== 'string' ||
          typeof max !== 'number' ||
          max === undefined
        )
          break;
        if (parseInt(value) > max) {
          errors.push(errMsg);
        }
        break;
      case 'regex':
        if (!limiter || typeof value !== 'string') return;
        let regex = new RegExp(limiter);

        if (!regex.test(value)) {
          errors.push(errMsg);
        }
        break;
      case 'maxSize':
        if (!maxSize || typeof value === 'string') return;
        if (value.size / 1024 > maxSize) {
          errors.push(errMsg);
        }
        break;
      case 'fileType':
        break;
      default:
        break;
    }
  }

  setErrMsg(errors);
  return errors.length > 0;
};
