import React, { ChangeEvent, useState, useRef } from "react";
import { ErrMsg } from "./ErrMsg";
import { Button } from "../Button/Button";
import { InputProps } from "./Input.types";
import { checkErrors } from "./util";

// 1. Need to upload the image - Done
// 2. Handle upload image - Done
// 2.1 Get the file uploaded as a file
// 2.2 Get the file as an object
// 3. Decide if you handle upload or let the user handle it
// 4. Call the parent handler on upload
// 5. Display the preview
// 6. Make it pretty

export const File = (props: InputProps) => {
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
      const isValid = checkErrors(files[0], setErrMsg, rules);

      if (isValid) {
        fileReader.readAsDataURL(files[0]);
        setImage(files[0]);
        return props.onChange({ value: files[0], isValid });
      }
    }
  };

  // Clear the image from blob and from the parent
  const clearImage = () => {
    props.onChange({ value: "", isValid: !!errMsg.length });
    setImageBlob("");
    setErrMsg([]);

    // Clear the value of the input element
    if (fileInputElement.current) {
      fileInputElement.current.value = "";
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
          ""
        )}
        <div className="file__buttons">
          <div className="file__button">
            <div className="file__overlay">
              <Button type="primary">
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
              <Button type="text" onClick={clearImage}>
                Clear
              </Button>
            </div>
          ) : (
            ""
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
