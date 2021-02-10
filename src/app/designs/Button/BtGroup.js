import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* Styles */
import "./button.scss";

/**
 * @function BtGroup Button Group design react component
 * @param {*} props {nowrap, vertical, align, nofill, children}
 */
const BtGroup = ({ nowrap, vertical, align, nofill, children }) => (
  <div
    className={cx("button-group", {
      nowrap: nowrap,
      vertical: vertical,
      "align-centered": align === "centered",
      "align-start": align === "start",
      nofill: nofill,
    })}
  >
    {children}
  </div>
);

/* PropTypes definition */
BtGroup.propTypes = {
  nowrap: PropTypes.bool,
  vertical: PropTypes.bool,
  nofill: PropTypes.bool,
  align: PropTypes.oneOf(["centered", "start", "end"]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
BtGroup.defaultProps = {
  nowrap: false,
  vertical: false,
  nofill: false,
  align: "end",
};

export default BtGroup;
