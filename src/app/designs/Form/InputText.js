import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/**
 * @function InputText InputText design react component
 * @param {*} props {title, onChange, size, content}
 */
const InputText = (props) => (
  <></>
);


/* PropTypes definition */
InputText.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
InputText.defaultProps = {
  onChange: () => {},
  size: 'M',
  content: undefined,
};

export default InputText;

