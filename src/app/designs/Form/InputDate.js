import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/* Attached Design components */
import GenericInput from './GenericInput';

/**
 * @function InputDate InputDate design react component
 * @param {*} props
 */
const InputDate = ({
  id,
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
  /* Build GenericInput props */
  const genInputProps = useMemo(
    () => ({
      type,
      id,
      label,
      autoComplete,
      autoFocus,
      min,
      minLength: undefined,
      max,
      maxLength: undefined,
      placeholder: undefined,
      fontSize,
      required,
      size: undefined,
      value,
      onChange,
      validator,
      extValidityState,
    }),
    [
      type,
      id,
      label,
      autoComplete,
      autoFocus,
      min,
      max,
      fontSize,
      required,
      value,
      onChange,
      validator,
      extValidityState,
    ]
  );
  return <GenericInput {...genInputProps} />;
};

/* PropTypes definition */
InputDate.propTypes = {
  id: PropTypes.string,
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
  id: undefined,
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
