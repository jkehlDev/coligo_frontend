import React from "react";
import PropTypes from "prop-types";
import camelCase from "camelcase";
import emailValidator from "email-validator";

/* Attached Design components */
import GenericInput from "./GenericInput";

/**
 * @function InputEmail InputEmail design react component
 * @param {*} props {type, label, autocomplete, autofocus, required, min, max, fontSize, value, onChange, validate}
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
  validation,
  validate,
}) => {
  const id = camelCase(label);
  const genInputProps = {
    type: "email",
    id,
    name: id,
    label,
    autoComplete,
    autoFocus,
    inputClassName: "",
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
    validation,
    validate,
  };
  return <GenericInput {...genInputProps} />;
};

/* PropTypes definition */
InputEmail.propTypes = {
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.oneOf(["off", "bday", "bday-month"]),
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  validation: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
  }),
  validate: PropTypes.func,
};

/* Props default value definition */
InputEmail.defaultProps = {
  autoComplete: "off",
  autoFocus: false,
  required: false,
  minLength: undefined,
  maxLength: undefined,
  size: undefined,
  fontSize: "M",
  onChange: undefined,
  validation: undefined,
  validate: (value) => {
    const state = emailValidator.validate(value);
    return {
      state,
      tips: state ? undefined : "Veuillez saisir une adresse email valide.",
    };
  },
};

export default InputEmail;
