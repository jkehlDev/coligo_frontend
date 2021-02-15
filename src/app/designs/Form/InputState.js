import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* SVG icon asset */
import icons from "app/designs/icon-sprite.svg";

/* Utils */
function getIconId(required, emptied, validated) {
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
  const [hidedToolTips, setHidedToolTips] = useState(true);
  const [iconId, setIconId] = useState(getIconId(required, emptied, validated));
  useEffect(() => {
    setIconId(getIconId(required, emptied, validated));
  }, [required, emptied, validated]);
  return (
    <div
      className="form--content--field--input-state"
      onMouseEnter={() => setHidedToolTips(false)}
      onMouseLeave={() => setHidedToolTips(true)}
    >
      <svg
        className={cx("form--content--field--input-state--icon", {
          negative: (!validated && !emptied) || (required && emptied),
          positive: validated && !emptied,
          neutral: !required && emptied,
        })}
        aria-hidden="true"
      >
        <use xlinkHref={`${icons}#${iconId}`} />
      </svg>
      <aside
        className={cx("tool-tips", {
          hide: hidedToolTips,
        })}
      >
        {toolTips}
      </aside>
    </div>
  );
};

/* PropTypes definition */
InputState.propTypes = {
  required: PropTypes.bool,
  emptied: PropTypes.bool,
  validated: PropTypes.bool,
  toolTips: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
InputState.defaultProps = {
  required: false,
  emptied: true,
  validated: false,
};

export default InputState;
