import React from "react";
import PropTypes from "prop-types";
import camelCase from "camelcase";
import cx from "classnames";

/* Attached Design components */
import InputState from "./InputState";

/* Utils */
function getSize(type) {
  switch (type) {
    case "month":
      return 7;
    case "week":
      return 8;
    case "time":
      return 5;
    default:
      return 10;
  }
}

/**
 * @function InputDate InputDate design react component
 * @param {*} props {type, label, autocomplete, required, min, max, fontSize, value, onChange, isValidate}
 */
const InputDate = ({
  type,
  label,
  autocomplete,
  required,
  min,
  max,
  fontSize,
  value,
  onChange,
  isValidate,
}) => {
  const id = camelCase(label);
  let size = getSize(type);
  const emptied = value.trim() === "";
  const validated = isValidate(value);
  return (
    <div className="form--field">
      <div className="form--field-box">
        <label
          className={cx("field--label", {
            required: required,
          })}
          for={id}
          font-size={fontSize}
        >
          {`${label}`}
        </label>
        <input
          id={id}
          type={`${type}`}
          className={cx("field--input", {
            date: type === "date",
            month: type === "month",
            week: type === "week",
            time: type === "time",
          })}
          title={`${label}`}
          min={`${min}`}
          max={`${max}`}
          size={`${size}`}
          font-size={fontSize}
          required={required}
          autocomplete={`${autocomplete}`}
          value={`${value}`}
          onChange={onChange}
        />
      </div>
      <InputState required={required} validated={validated} emptied={emptied} />
    </div>
  );
};

/* PropTypes definition */
InputDate.propTypes = {
  type: PropTypes.oneOf(["date", "month", "week", "time"]),
  label: PropTypes.string.isRequired,
  autocomplete: PropTypes.oneOf(["off", "bday", "bday-month"]),
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  fontSize: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  isValidate: PropTypes.func,
};

/* Props default value definition */
InputDate.defaultProps = {
  type: "date",
  autocomplete: "off",
  required: false,
  min: undefined,
  max: undefined,
  fontSize: "M",
  onChange: () => {},
  isValidate: () => (true),
};

export default InputDate;
