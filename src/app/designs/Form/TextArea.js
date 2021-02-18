import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

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
  validator,
  extValidityState
) {
  /* Obtain validation state from external validation or executing inner validation process */
  const validated =
    extValidityState === undefined ? validator(value) : extValidityState;
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
 * @function TextArea TextArea design react component
 * @param {*} props {title, onChange, size, content}
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
    optioned,
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

  /* Set identifiant (id, name) in camel case format */
  const camelIdentifiant = useMemo(() => (id ? id : camelCase(label)), [
    id,
    label,
  ]);
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
          <textarea
            id={camelIdentifiant}
            name={camelIdentifiant}
            title={label}
            required={required}
            className="form--content--field--box--input"
            value={value}
            aria-required={required}
            aria-invalid={!validated.state && !emptied}
            aria-errormessage={validated.tips}
            onFocus={(event) =>
              event.target.setCustomValidity(
                !validated.state && !emptied ? validated.tips : ''
              )
            }
            onChange={(event) => {
              const targetValue = event.target.value;
              const targetEmptied = targetValue.trim() === '';
              const targetValidated = getValidityState(
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
          />
          {optioned && (
            <div className="form--content--field--box--input-option">
              {inputOption}
            </div>
          )}
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
  optioned: true,
  inputOption: undefined,
  onChange: () => {},
  validator: () => ({ state: true }),
};

export default TextArea;
