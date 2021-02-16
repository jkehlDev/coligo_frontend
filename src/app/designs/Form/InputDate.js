import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';

/* Attached Design components */
import GenericInput from './GenericInput';

/* Utils */
function getSize(type) {
  switch (type) {
    case 'month':
      return 7;
    case 'week':
      return 8;
    case 'time':
      return 5;
    default:
      return 10;
  }
}

/**
 * @function InputDate InputDate design react component
 * @param {*} props
 */
const InputDate = ({
  type,
  label,
  autoComplete,
  autoFocus,
  required,
  min,
  max,
  fontSize,
  value,
  onChange,
  extValidityState,
  validator,
}) => {
  const id = useMemo(() => camelCase(label), [label]);
  let size = useMemo(() => getSize(type), [type]);
  const genInputProps = useMemo(
    () => ({
      type,
      id,
      name: id,
      label,
      autoComplete,
      autoFocus,
      inputClassName: cx({
        date: type === 'date',
        month: type === 'month',
        week: type === 'week',
        time: type === 'time',
      }),
      min,
      minLength: undefined,
      max,
      maxLength: undefined,
      placeholder: undefined,
      fontSize,
      required,
      size,
      value,
      onChange,
      validator,
      extValidityState,
    }),
    [
      autoComplete,
      autoFocus,
      fontSize,
      id,
      label,
      max,
      min,
      onChange,
      required,
      size,
      type,
      validator,
      extValidityState,
      value,
    ]
  );
  return <GenericInput {...genInputProps} />;
};

/* PropTypes definition */
InputDate.propTypes = {
  type: PropTypes.oneOf(['date', 'month', 'week', 'time']),
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.oneOf(['off', 'bday', 'bday-month']),
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  fontSize: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  extValidityState: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
    structuredTips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }),
  validator: PropTypes.func,
};

/* Props default value definition */
InputDate.defaultProps = {
  type: 'date',
  autoComplete: 'off',
  autoFocus: undefined,
  required: false,
  min: undefined,
  max: undefined,
  fontSize: 'M',
  onChange: undefined,
  extValidityState: undefined,
  validator: undefined,
};

export default InputDate;
