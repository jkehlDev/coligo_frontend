import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/**
 * @function InputPassword InputPassword design react component
 * @param {*} props {title, type, onChange, content}
 */
const InputPassword = (props) => (
  <></>
);


/* PropTypes definition */
InputPassword.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
InputPassword.defaultProps = {
  onChange: () => {},
  size: 'M',
  content: undefined,
};

export default InputPassword;

