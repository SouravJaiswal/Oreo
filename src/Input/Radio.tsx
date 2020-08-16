import React, { ChangeEvent, useState, useRef } from 'react';
import { InputProps, OptionsProps } from './Input.types';

export const Radio = (props: InputProps) => {
  const {
    label,
    name,
    className,
    type,
    options,
    value,
    full,
  }: InputProps = props;

  let onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (!Array.isArray(props.value)) return;

    // Either add or remove the clicked element
    if (props.value.indexOf(value) < 0) {
      return props.onChange({ value: [...props.value, value], isValid: true });
    } else {
      return props.onChange({
        value: props.value.filter((v) => {
          return v !== value;
        }),
        isValid: true,
      });
    }
  };

  let onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    return props.onChange({ value, isValid: true });
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
            ? options.map((opt: OptionsProps) => {
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
          ? options.map((opt: OptionsProps) => (
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
