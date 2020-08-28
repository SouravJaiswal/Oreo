import React, { ChangeEvent, useState, useRef } from 'react';
import { GrSearch } from 'react-icons/gr';
import { InputProps } from './Input.types';
import { ErrMsg } from './ErrMsg';
import { checkErrors } from './util';

/*
  Usage:


  <Input type="search" label="Search" name="search" 
  placeholder=""  
  className=""
  value=""
  onChange=""
  />
*/

export const Search = (props: InputProps) => {
  let [errMsg, setErrMsg]: [Array<string>, Function] = useState([]);

  const { placeholder, name, className, type, autoFocus, value } = props;

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    // Handle all the rules
    const isValid = checkErrors(value, setErrMsg, [
      { type: 'required', errMsg: '' },
    ]);

    return props.onChange({ value, isValid });
  };

  // If icon is provided, show the icon text

  return (
    <div className="search__group">
      <span className="search__text">Search</span>
      <input
        autoFocus={autoFocus}
        value={value}
        type={type}
        name={name}
        className={`search__input  ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <span className="search__icon">{<GrSearch />}</span>
    </div>
  );
};
