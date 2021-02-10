import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* Attached Design components */
import BtGroup from "./BtGroup";

/* Styles */
import "./button.scss";
/* Feather icon */
import feather from "../feather-sprite.svg";

/**
 * @function Button Button design react component
 * @param {*} props {title, type, onClick, positive, negative, neutral, icon, content}
 */
const Button = ({
  title,
  type,
  onClick,
  positive,
  negative,
  icon,
  content,
}) => (
  <button
    title={`${title}`}
    aria-label={icon ? `${title}` : ""}
    type={`${type}`}
    onClick={onClick}
    className={cx("button", {
      positive: positive,
      negative: negative,
      neutral: !(positive || negative),
    })}
  >
    {icon && (
      <svg className={cx("icon", { padded: content })}>
        <use xlinkHref={`${feather}#${icon}`} />
      </svg>
    )}
    {content && <span>{`${content}`}</span>}
  </button>
);

/* PropTypes definition */
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["submit", "button"]),
  onClick: PropTypes.func,
  positive: PropTypes.bool,
  negative: PropTypes.bool,
  neutral: PropTypes.bool,
  icon: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
Button.defaultProps = {
  type: "button",
  onClick: () => {},
  positive: false,
  negative: false,
  icon: undefined,
  content: undefined,
};

/* Attached Design react components */
Button.Group = BtGroup;

export default Button;
