import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Attached Design components */
import BtGroup from './ButtonGroup';

/* SVG icon asset */
import icons from 'app/designs/images/icon-sprite.svg';

/**
 * @function Button Button design react component
 * @param {*} props {title, type, onClick, positive, negative, neutral, icon, size, content}
 */
const Button = ({
  title,
  type,
  className,
  onClick,
  positive,
  negative,
  noColor,
  icon,
  fontSize,
  content,
}) => (
  <button
    title={`${title}`}
    aria-label={icon ? `${title}` : ''}
    type={`${type}`}
    onClick={onClick}
    className={cx(
      'button',
      {
        positive: positive,
        negative: negative,
        neutral: !(positive || negative || noColor),
      },
      className
    )}
    data-fontsize={`${fontSize}`}
  >
    {icon && (
      <svg className={cx('icon', { padded: content })} aria-hidden="true">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    )}
    {content && <span>{`${content}`}</span>}
  </button>
);

/* PropTypes definition */
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  positive: PropTypes.bool,
  negative: PropTypes.bool,
  neutral: PropTypes.bool,
  noColor: PropTypes.bool,
  icon: PropTypes.string,
  fontSize: PropTypes.string,
  content: PropTypes.string,
};

/* Props default value definition */
Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  positive: false,
  negative: false,
  noColor: false,
  icon: undefined,
  fontSize: 'M',
  content: undefined,
};

/* Attached Design react components */
Button.Group = BtGroup;

export default Button;
