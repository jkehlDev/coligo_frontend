import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/**
 * @function InputEmail InputEmail design react component
 * @param {*} props {title, onChange, size, content}
 */
const InputEmail = (props) => (
  <></>
);


/* PropTypes definition */
InputEmail.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
InputEmail.defaultProps = {
  onChange: () => {},
  size: 'M',
  content: undefined,
};

export default InputEmail;

