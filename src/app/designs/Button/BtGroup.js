import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/**
 * @function BtGroup Button Group design react component
 * @param {*} props {nowrap, vertical, align, nofill, children}
 */
const BtGroup = ({ nowrap, vertical, align, nofill, fontSize, children }) => (
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
  fontSize: PropTypes.string,
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
  fontSize: "M",
};

export default BtGroup;
