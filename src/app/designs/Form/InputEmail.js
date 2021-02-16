import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import emailValidator from 'email-validator';

/* Attached Design components */
import GenericInput from './GenericInput';

/**
 * @function InputEmail InputEmail design react component
 * @param {*} props
 */
const InputEmail = ({
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
  const id = useMemo(() => camelCase(label), [label]);
  const genInputProps = useMemo(
    () => ({
      type: 'email',
      id,
      name: id,
      label,
      autoComplete,
      autoFocus,
      inputClassName: '',
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
      autoComplete,
      autoFocus,
      fontSize,
      id,
      label,
      maxLength,
      minLength,
      onChange,
      placeholder,
      required,
      size,
      validator,
      extValidityState,
      value,
    ]
  );
  return <GenericInput {...genInputProps} />;
};

/* PropTypes definition */
InputEmail.propTypes = {
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
      tips: state ? undefined : 'Veuillez saisir une adresse email valide.',
    };
  },
};

export default InputEmail;
