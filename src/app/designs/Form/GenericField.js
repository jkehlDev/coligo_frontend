import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Attached Design components */
import InputState from './InputState';

/**
 * @function GenericField Generic Field design react component
 * @param {*} props
 */
const GenericField = (props) => {
  const {
    id,
    label,
    required,
    fontSize,
    intValidityState,
    emptied,
    children,
    contentAside,
    inputOption,
    toolTipped,
    optioned,
  } = props;

  /* Declare tool-tips rendering (hide/show) state */
  const [hidedToolTips, setHidedToolTips] = useState(true);

  return (
    <div
      className={cx('form--content--field', {
        invalid: !intValidityState.state || (emptied && required),
        valid: !emptied && intValidityState.state,
      })}
      data-fontsize={fontSize}
      title={label}
    >
      <label className="form--content--field--label" htmlFor={id}>
        {`${label}`}
      </label>
      {/* Input field box with input state, input field and input option elements */}
      <div className={cx('form--content--field--box')}>
        {toolTipped && (
          <InputState
            required={required}
            validated={intValidityState.state}
            emptied={emptied}
            onMouseEnter={() => setHidedToolTips(false)}
            onMouseLeave={() => setHidedToolTips(true)}
          />
        )}
        {children}
        {optioned && (
          <div className="form--content--field--box--input-option">
            {inputOption}
          </div>
        )}
      </div>
      {/* Aside Field element (Ex: Password rules) */}
      <aside className="form--content--field--aside">{contentAside}</aside>
      {/* Field Tool-tips popup element */}
      {toolTipped && (
        <div className={'form--content--field--tool-tips-box'}>
          <div
            className={cx('tool-tips-pointer', {
              show: !hidedToolTips,
            })}
          />
          <article
            className={cx('form--content--field--tool-tips-box--content', {
              show: !hidedToolTips,
            })}
          >
            {intValidityState.structuredTips}
          </article>
        </div>
      )}
    </div>
  );
};

/* PropTypes definition */
GenericField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fontSize: PropTypes.string,
  intValidityState: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
    structuredTips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }).isRequired,
  emptied: PropTypes.bool.isRequired,
  toolTipped: PropTypes.bool,
  optioned: PropTypes.bool,
  inputOption: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  contentAside: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  validator: PropTypes.func,
};

/* Props default value definition */
GenericField.defaultProps = {
  id: undefined,
  required: false,
  fontSize: 'M',
  extValidityState: undefined,
  children: undefined,
  contentAside: undefined,
  toolTipped: true,
  optioned: true,
  inputOption: undefined,
  validator: () => ({ state: true }),
};

export default GenericField;
