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

/**
 * @function InputState InputState design react component
 * @param {*} props {}
 */
const InputState = ({ required, emptied, validated, toolTips }) => {
  const state = getState(required, emptied, validated);
  toolTips =
    toolTips !== undefined
      ? toolTips
      : getDefaultToolTips(required, emptied, validated);
  return (
    <div className="inputState-box" data-tips={`${toolTips}`}>
      <svg
        className={cx("inputState", {
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
  toolTips: PropTypes.string,
};

/* Props default value definition */
InputState.defaultProps = {
  required: false,
  emptied: true,
  validated: false,
  toolTips: undefined,
};

export default InputState;
