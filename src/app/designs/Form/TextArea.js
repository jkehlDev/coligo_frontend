import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @function TextArea TextArea design react component
 * @param {*} props {title, onChange, size, content}
 */
const TextArea = (props) => <></>;

/* PropTypes definition */
TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
TextArea.defaultProps = {
  onChange: () => {},
  size: 'M',
  content: undefined,
};

export default TextArea;
