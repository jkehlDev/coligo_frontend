import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

/* Attached Design components */
import GenericInput from './GenericInput';

/**
 * @function InputText InputText design react component
 * @param {*} props {title, onChange, size, content}
 */
const InputText = ({
  id,
  label,
  autoFocus,
  required,
  minLength,
  maxLength,
  size,
  fontSize,
  placeholder,
  value,
  onChange,
  extValidityState,
  validator,
}) => {
  /* Build GenericInput props */
  const genInputProps = useMemo(
    () => ({
      type: 'text',
      id,
      label,
      autoComplete: undefined,
      autoFocus,
      min: undefined,
      minLength,
      max: undefined,
      maxLength,
      placeholder,
      fontSize,
      required,
      size,
      value,
      onChange,
      extValidityState,
      validator,
    }),
    [
      id,
      label,
      autoFocus,
      minLength,
      maxLength,
      placeholder,
      fontSize,
      required,
      size,
      value,
      onChange,
      extValidityState,
      validator,
    ]
  );
  return <GenericInput {...genInputProps} />;
};

/* PropTypes definition */
InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  size: PropTypes.number,
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
InputText.defaultProps = {
  id: undefined,
  autoComplete: 'off',
  required: false,
  minLength: undefined,
  maxLength: undefined,
  size: undefined,
  fontSize: 'M',
  onChange: undefined,
  extValidityState: undefined,
  validator: undefined,
};

export default InputText;
