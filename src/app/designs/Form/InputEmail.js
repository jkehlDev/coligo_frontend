import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import emailValidator from 'email-validator';

/* Label dictionnary */
import labelsFr from 'app/designs/labels_fr.json';

/* Attached Design components */
import GenericInput from './GenericInput';

/**
 * @function InputEmail InputEmail design react component
 * @param {*} props
 */
const InputEmail = ({
  id,
  label,
  autoComplete,
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
      type: 'email',
      id,
      label,
      autoComplete,
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
      autoComplete,
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
InputEmail.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.oneOf(['off', 'email', 'username']),
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
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
InputEmail.defaultProps = {
  id: undefined,
  autoComplete: undefined,
  autoFocus: false,
  required: false,
  minLength: undefined,
  maxLength: undefined,
  size: undefined,
  fontSize: 'M',
  onChange: undefined,
  extValidityState: undefined,
  validator: (value) => {
    const state = emailValidator.validate(value);
    return {
      state,
      tips: state
        ? undefined
        : labelsFr.designs.email.validator.default_invalid,
    };
  },
};

export default InputEmail;
