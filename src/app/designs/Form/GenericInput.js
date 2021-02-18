import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Label dictionnary */
import labelsFr from 'app/designs/labels_fr.json';

/* Attached Design components */
import InputState from './InputState';

/* Tools */
/* Obtain default tips non-structured message */
function getDefaultTips(required, emptied, validated) {
  return required
    ? emptied
      ? labelsFr.designs.input.validator.default_required
      : validated
      ? labelsFr.designs.input.validator.default_valid
      : labelsFr.designs.input.validator.default_invalid
    : emptied
    ? labelsFr.designs.input.validator.default_optional
    : validated
    ? labelsFr.designs.input.validator.default_valid
    : labelsFr.designs.input.validator.default_invalid;
}

/* Obtain validation state with tips messages */
function getValidityState(
  value,
  required,
  emptied,
  validate,
  extValidityState
) {
  /* Obtain validation state from external validation or executing inner validation process */
  const validated =
    extValidityState === undefined ? validate(value) : extValidityState;
  /* Obtain default tips message */
  const defaultTips =
    validated.tips === undefined
      ? getDefaultTips(required, emptied, validated.state)
      : validated.tips;

  /* Return validation state */
  return {
    state: validated.state,
    tips: defaultTips,
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
    extValidityState,
    validator,
    onChange,
    children,
    inputOption,
    ...othersProps
  } = props;

  /* Obtain empty test result on value */
  const emptied = useMemo(() => value.trim() === '', [value]);

  /* Obtain validation test result on value */
  const validated = useMemo(
    () =>
      getValidityState(value, required, emptied, validator, extValidityState),
    [value, required, emptied, validator, extValidityState]
  );

  /* Declare tool-tips rendering (hide/show) state */
  const [hidedToolTips, setHidedToolTips] = useState(true);

  return (
    <>
      <div
        className={cx('form--content--field', {
          invalid: !validated.state || (emptied && required),
          valid: !emptied && validated.state,
        })}
        data-fontsize={fontSize}
      >
        {/* Input Label */}
        <label className="form--content--field--label" htmlFor={id}>
          {`${label}`}
        </label>
        {/* Input field box with input state, input field and input option elements */}
        <div className={cx('form--content--field--box')}>
          <InputState
            required={required}
            validated={validated.state}
            emptied={emptied}
            onMouseEnter={() => setHidedToolTips(false)}
            onMouseLeave={() => setHidedToolTips(true)}
          />
          <input
            id={id}
            className={cx('form--content--field--box--input', inputClassName)}
            title={label}
            value={value}
            onFocus={(event) =>
              event.target.setCustomValidity(
                !validated.state && !emptied ? validated.tips : ''
              )
            }
            onChange={(event) => {
              const targetValue = event.target.value;
              const targetEmptied = targetValue.trim() === '';
              const targetValidated = validator(
                targetValue,
                required,
                targetEmptied,
                validator,
                undefined
              );
              event.target.setCustomValidity(
                !targetValidated.state && !targetEmptied
                  ? targetValidated.tips
                  : ''
              );
              onChange(event);
            }}
            aria-required={required}
            aria-invalid={!validated.state && !emptied}
            aria-errormessage={validated.tips}
            required={required}
            {...othersProps}
          />
          <div className="form--content--field--box--input-option">
            {inputOption}
          </div>
        </div>
        {/* Aside Field element (Ex: Password rules) */}
        <aside className="form--content--field--aside">{children}</aside>
      </div>
      {/* Field Tool-tips popup element */}
      <div className={'form--content--field--tool-tips-box'}>
        <article
          className={cx('form--content--field--tool-tips-box--content', {
            show: !hidedToolTips,
          })}
        >
          {validated.structuredTips}
        </article>
      </div>
    </>
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  inputOption: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

/* Props default value definition */
GenericInput.defaultProps = {
  autoComplete: 'off',
  autoFocus: undefined,
  inputClassName: '',
  min: undefined,
  minLength: undefined,
  max: undefined,
  maxLength: undefined,
  placeholder: undefined,
  fontSize: 'M',
  required: false,
  size: undefined,
  onChange: () => {},
  extValidityState: undefined,
  validator: () => ({ state: true }),
  children: undefined,
  inputOption: undefined,
};

export default GenericInput;
