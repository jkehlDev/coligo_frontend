import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @function BtGroup Button Group design react component
 * @param {*} props {nowrap, vertical, align, nofill, children}
 */
const BtGroup = ({ nowrap, vertical, mainAlign, nofill, children }) => (
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
BtGroup.propTypes = {
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
BtGroup.defaultProps = {
  nowrap: false,
  vertical: false,
  nofill: false,
  mainAlign: 'center',
};

export default BtGroup;
