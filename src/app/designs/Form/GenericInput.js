import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';

/* Attached Design components */
import GenericField from './GenericField';

/* Tools */
import { getValidityState, isEmptied } from './tools';

/**
 * @function GenericInput GenericInput design react component
 * @param {*} props
 */
const GenericInput = (props) => {
  const {
    id,
    name,
    label,
    required,
    fontSize,
    value,
    extValidityState,
    validator,
    onChange,
    children,
    inputOption,
    toolTipped,
    optioned,
    ...others
  } = props;

  /* Obtain empty test result on value */
  const emptied = useMemo(() => isEmptied(value), [value]);

  /* Obtain validation test result on value */
  const intValidityState = useMemo(
    () =>
      getValidityState(value, required, emptied, validator, extValidityState),
    [value, required, emptied, validator, extValidityState]
  );

  /* Set identifiant (id, name) in camel case format */
  const camelIdentifiant = useMemo(() => (id ? id : camelCase(label)), [
    id,
    label,
  ]);

  /* Build GenericField props */
  const genericFieldProps = useMemo(
    () => ({
      id: camelIdentifiant,
      label,
      required,
      fontSize,
      intValidityState,
      emptied,
      children,
      contentAside: children,
      inputOption,
      toolTipped,
      optioned,
    }),
    [
      camelIdentifiant,
      children,
      emptied,
      fontSize,
      inputOption,
      intValidityState,
      label,
      optioned,
      required,
      toolTipped,
    ]
  );
  return (
    <GenericField {...genericFieldProps}>
      <input
        id={camelIdentifiant}
        name={camelIdentifiant}
        title={label}
        required={required}
        {...others}
        className="form--content--field--box--input"
        value={value}
        aria-required={required}
        aria-invalid={!intValidityState.state && !emptied}
        aria-errormessage={intValidityState.tips}
        onFocus={(event) =>
          event.target.setCustomValidity(
            !intValidityState.state && !emptied ? intValidityState.tips : ''
          )
        }
        onChange={(event) => {
          const targetValue = event.target.value;
          const targetEmptied = isEmptied(targetValue);
          const onChangeValidityState = getValidityState(
            targetValue,
            required,
            targetEmptied,
            validator,
            undefined
          );
          event.target.setCustomValidity(
            !onChangeValidityState.state && !targetEmptied
              ? onChangeValidityState.tips
              : ''
          );
          onChange(event);
        }}
      />
    </GenericField>
  );
};

/* PropTypes definition */
GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minLength: PropTypes.number,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  extValidityState: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
    structuredTips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }),
  toolTipped: PropTypes.bool,
  optioned: PropTypes.bool,
  inputOption: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  validator: PropTypes.func,
  onChange: PropTypes.func,
};

/* Props default value definition */
GenericInput.defaultProps = {
  id: undefined,
  name: undefined,
  required: false,
  autoComplete: 'off',
  autoFocus: undefined,
  min: undefined,
  minLength: undefined,
  max: undefined,
  maxLength: undefined,
  step: undefined,
  placeholder: undefined,
  fontSize: 'M',
  size: undefined,
  extValidityState: undefined,
  children: undefined,
  toolTipped: true,
  optioned: true,
  inputOption: undefined,
  onChange: () => {},
  validator: () => ({ state: true }),
};

export default GenericInput;
