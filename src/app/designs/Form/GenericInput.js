import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* Attached Design components */
import InputState from "./InputState";

/**
 * @function GenericInput GenericInput design react component
 * @param {*} props {type, id, name, label, autoComplete, autofocus, inputClassName, min, minlength, max, maxlength, placeHolder, fontSize, required, size, value, onChange, isValidate}
 */
const GenericInput = (props) => {
  const {
    id,
    label,
    inputClassName,
    required,
    fontSize,
    value,
    isValidate,
    ...othersProps
  } = props;
  const emptied = value.trim() === "";
  const validated = isValidate(value);
  return (
    <div className="form--content--field" data-fontsize={fontSize}>
      <InputState
        required={required}
        validated={validated.state}
        emptied={emptied}
        toolTips={validated.tips}
      />
      <div className="form--content--field--box">
        <label className="form--content--field--box--label" htmlFor={id}>
          {`${label}`}
        </label>
        <input
          id={id}
          className={cx("form--content--field--box--input", inputClassName)}
          title={label}
          value={value}
          required={required}
          {...othersProps}
        />
      </div>
    </div>
  );
};

/* PropTypes definition */
GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  inputClassName: PropTypes.string,
  min: PropTypes.string,
  minLength: PropTypes.number,
  max: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  fontSize: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  isValidate: PropTypes.func,
};

/* Props default value definition */
GenericInput.defaultProps = {
  autoComplete: undefined,
  autoFocus: undefined,
  inputClassName: "",
  min: undefined,
  minLength: undefined,
  max: undefined,
  maxLength: undefined,
  placeholder: undefined,
  fontSize: "M",
  required: false,
  size: undefined,
  onChange: () => {},
  isValidate: () => true,
};

export default GenericInput;
