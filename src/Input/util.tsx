import { RulesProps } from './Input.types';

// All utilities functions
const checkErrors = (
  value: string | File,
  setErrMsg: Function,
  rules?: Array<RulesProps>
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
