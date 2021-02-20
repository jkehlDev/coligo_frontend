import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* SVG icon asset */
import icons from 'app/designs/images/icon-sprite.svg';

/* Utils */
function getIconId(required, emptied, validated) {
  return required
    ? emptied
      ? 'stop-circle'
      : validated
      ? 'check-circle'
      : 'x-circle'
    : emptied
    ? 'help-circle'
    : validated
    ? 'check-circle'
    : 'x-circle';
}

/**
 * @function InputState InputState design react component
 * @param {*} props {}
 */
const InputState = ({ required, emptied, validated, onMouseEnter, onMouseLeave }) => {
 
  const [iconId, setIconId] = useState(getIconId(required, emptied, validated));
  useEffect(() => {
    setIconId(getIconId(required, emptied, validated));
  }, [required, emptied, validated]);
  return (
    <div
      className="form--content--field--box--state"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      title=""
    >
      <svg
        className={cx('form--content--field--box--state--icon', {
          invalid: (!validated && !emptied) || (required && emptied),
          valid: validated && !emptied,
          neutral: !required && emptied,
        })}
        aria-hidden="true"
      >
        <use xlinkHref={`${icons}#${iconId}`} />
      </svg>
    </div>
  );
};

/* PropTypes definition */
InputState.propTypes = {
  required: PropTypes.bool,
  emptied: PropTypes.bool,
  validated: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired, 
  onMouseLeave: PropTypes.func.isRequired,
};

/* Props default value definition */
InputState.defaultProps = {
  required: false,
  emptied: true,
  validated: false,
};

export default InputState;
