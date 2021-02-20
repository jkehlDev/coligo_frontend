import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/* Attached Design components */
import GenericInput from './GenericInput';

/**
 * @function InputRange InputRange design react component
 * @param {*} props {title, onChange, size, content}
 */
const InputRange = ({
  id,
  label,
  autoFocus,
  required,
  fontSize,
  min,
  max,
  step,
  unit,
  value,
  onChange,
}) => {
  /* Obtain label with value + unit */
  const valueUnit = useMemo(() => `${value} ${unit}`, [unit, value]);

  /* Build GenericInput props */
  const genInputProps = useMemo(
    () => ({
      type: 'range',
      id,
      label,
      autoComplete: undefined,
      autoFocus,
      min,
      minLength: undefined,
      max,
      maxLength: undefined,
      step,
      placeholder: undefined,
      fontSize,
      required,
      size: undefined,
      value,
      onChange,
      extValidityState: undefined,
      validator: undefined,
    }),
    [id, label, autoFocus, min, max, step, fontSize, required, value, onChange]
  );
  return (
    <GenericInput {...genInputProps}>
      {`${valueUnit}`}
    </GenericInput>
  );
};

/* PropTypes definition */
InputRange.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  unit: PropTypes.string,
  fontSize: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

/* Props default value definition */
InputRange.defaultProps = {
  id: undefined,
  autoComplete: 'off',
  required: false,
  min: 0,
  max: 1,
  step: 0.05,
  unit: '%',
  size: undefined,
  fontSize: 'M',
};

export default InputRange;
