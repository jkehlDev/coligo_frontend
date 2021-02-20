import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';

/* Attached Design components */
import GenericField from './GenericField';

/* Tools */
import { getValidityState, isEmptied } from './tools';

/**
 * @function TextArea TextArea design react component
 * @param {*} props
 */
const TextArea = (props) => {
  const {
    id,
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
      <textarea
        id={camelIdentifiant}
        name={camelIdentifiant}
        title={label}
        required={required}
        className={cx(
          'form--content--field--box--textarea',
          'form--content--field--box--input'
        )}
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
TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
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
  value: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  validator: PropTypes.func,
  onChange: PropTypes.func,
};

/* Props default value definition */
TextArea.defaultProps = {
  id: undefined,
  required: false,
  autoFocus: undefined,
  placeholder: undefined,
  fontSize: 'M',
  extValidityState: undefined,
  children: undefined,
  toolTipped: true,
  optioned: true,
  inputOption: undefined,
  onChange: () => {},
  validator: () => ({ state: true }),
};

export default TextArea;
