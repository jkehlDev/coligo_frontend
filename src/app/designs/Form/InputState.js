import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* SVG icon asset */
import icons from "app/designs/icon-sprite.svg";

/* Utils */
function getState(required, emptied, validated) {
  return required
    ? emptied
      ? "stop-circle"
      : validated
      ? "check-circle"
      : "x-circle"
    : emptied
    ? "help-circle"
    : validated
    ? "check-circle"
    : "x-circle";
}

/**
 * @function InputState InputState design react component
 * @param {*} props {}
 */
const InputState = ({ required, emptied, validated, toolTips }) => {
  const state = getState(required, emptied, validated);
  return (
    <div className="form--content--field--input-state" data-tips={`${toolTips}`}>
      <svg
        className={cx("form--content--field--input-state--icon", {
          negative: (!validated && !emptied) || (required && emptied),
          positive: (validated && !emptied),
          neutral: !required && emptied,
        })}
        aria-hidden="true"
      >
        {/* <title>{`${toolTips}`}</title> */}
        <use xlinkHref={`${icons}#${state}`} />
      </svg>
    </div>
  );
};

/* PropTypes definition */
InputState.propTypes = {
  required: PropTypes.bool,
  emptied: PropTypes.bool,
  validated: PropTypes.bool,
  toolTips: PropTypes.string.isRequired,
};

/* Props default value definition */
InputState.defaultProps = {
  required: false,
  emptied: true,
  validated: false,
};

export default InputState;
