import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * @function FormGroup Form Group design react component
 * @param {*} props {nowrap, vertical, align, nofill, children}
 */
const FormGroup = ({ nowrap, mainAlign, children }) => (
  <div
    className={cx(
      'form-group',
      {
        nowrap: nowrap,
      },
      mainAlign
    )}
  >
    {children}
  </div>
);

/* PropTypes definition */
FormGroup.propTypes = {
  nowrap: PropTypes.bool,
  mainAlign: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
FormGroup.defaultProps = {
  nowrap: false,
  mainAlign: 'center',
};

export default FormGroup;
