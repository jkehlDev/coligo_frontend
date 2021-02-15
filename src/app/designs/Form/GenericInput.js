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
    ? "Saisie facultative, vous pouvez compléter si nécessaire"
    : validated
    ? "Votre saisie est correcte."
    : "Votre saisie est incorrecte, veuillez corriger.";
}

function isValid(value, required, emptied, validate, validation) {
  const validated = validation === undefined ? validate(value) : validation;
  const defaultTips = getDefaultToolTips(required, emptied, validated.state);
  return {
    state: validated.state,
    tips:
      validated.tips === undefined
        ? defaultTips
        : validated.tips,
    structuredTips:
      validated.structuredTips === undefined
        ? defaultTips
        : validated.structuredTips,
  };
}

/**
 * @function GenericInput GenericInput design react component
 * @param {*} props
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
    children,
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
        toolTips={validated.structuredTips}
      />
      <div className="form--content--field--box">
        <label className="form--content--field--box--label" htmlFor={id}>
          {`${label}`}
        </label>
        <input
          id={id}
          className={cx("form--content--field--box--input", inputClassName, {
            error: !validated.state || (emptied && required),
            valide: !emptied && validated.state,
          })}
          title={label}
          value={value}
          onFocus= {(event) => event.target.setCustomValidity((!validated.state && !emptied) ? validated.tips : '')}
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
            event.target.setCustomValidity((!targetValidated.state && !targetEmptied) ? targetValidated.tips : '');
            onChange(event);
          }}
          aria-required={required}
          aria-invalid={!validated.state && !emptied}
          aria-errormessage={validated.tips}
          required={required}
          {...othersProps}
        />
        {children}
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
    structuredTips:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }),
  validate: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/* Props default value definition */
GenericInput.defaultProps = {
  autoComplete: 'off',
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
  children: undefined,
};

export default GenericInput;
