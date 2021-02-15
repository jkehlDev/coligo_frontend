import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* Attached Design components */
import InputState from "./InputState";

/* Tools */
function getDefaultToolTips(required, emptied, validated) {
  return required
    ? emptied
      ? "Saisie obligatoire, veuillez compléter."
      : validated
      ? "Votre saisie est correcte."
      : "Votre saisie est incorrecte. Veuillez corriger."
    : emptied
    ? "Saisie non obligatoire, vous pouvez compléter si necessaire"
    : validated
    ? "Votre saisie est correcte."
    : "Votre saisie est incorrecte, veuillez corriger.";
}

function isValid(value, required, emptied, validate, validation) {
  const validated = validation === undefined ? validate(value) : validation;
  return {
    state: validated.state,
    tips:
      validated.tips === undefined
        ? getDefaultToolTips(required, emptied, validated.state)
        : validated.tips,
  };
}

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
    validation,
    validate,
    onChange,
    ...othersProps
  } = props;
  const emptied = value.trim() === "";
  const validated = isValid(value, required, emptied, validate, validation);
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
          onChange={(event) => {
            const targetValue = event.target.value;
            const targetEmptied = targetValue.trim() === "";
            const targetValidated = isValid(
              targetValue,
              required,
              targetEmptied,
              validate,
              undefined
            );
            if (!targetValidated.state && !targetEmptied) {
              event.target.setCustomValidity(targetValidated.tips);
            } else {
              event.target.setCustomValidity("");
            }
            onChange(event);
          }}
          className={cx("form--content--field--box--input", inputClassName, {
            error: !validated.state || (emptied && required),
            valide: !emptied && validated.state,
          })}
          title={label}
          value={value}
          aria-required={required}
          aria-invalid={!validated.state && !emptied}
          aria-errormessage={validated.tips}
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
  validation: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
  }),
  validate: PropTypes.func,
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
  validation: undefined,
  validate: () => ({ state: true }),
};

export default GenericInput;
