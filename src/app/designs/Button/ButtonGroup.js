import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @function ButtonGroup Button Group design react component
 * @param {*} props {nowrap, vertical, align, nofill, children}
 */
const ButtonGroup = ({ nowrap, vertical, mainAlign, nofill, children }) => (
  <div
    className={cx('button-group', {
      nowrap: nowrap,
      vertical: vertical,
      nofill: nofill,
    }, mainAlign)}
  >
    {children}
  </div>
);

/* PropTypes definition */
ButtonGroup.propTypes = {
  nowrap: PropTypes.bool,
  vertical: PropTypes.bool,
  nofill: PropTypes.bool,
  mainAlign: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
ButtonGroup.defaultProps = {
  nowrap: false,
  vertical: false,
  nofill: false,
  mainAlign: 'center',
};

export default ButtonGroup;
