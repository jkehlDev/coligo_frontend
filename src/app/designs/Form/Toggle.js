import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/* SVG icon asset */
import icons from 'app/designs/images/icon-sprite.svg';

/**
 * @function Toggle Toggle design react component
 * @param {*} props
 */
const Toggle = (props) => {
  const { id, label, fontSize, value, onChange, autoFocus } = props;

  /* Set identifiant (id, name) in camel case format */
  const camelIdentifiant = useMemo(() => (id ? id : camelCase(label)), [
    id,
    label,
  ]);
  return (
    <div className="form--content--field--toggle" data-fontsize={fontSize}>
      {/* Input Label */}
      <label
        className="form--content--field--toggle--label"
        htmlFor={id}
        title={`${label} ${
          value
            ? labelsFr.designs.input.toggle.checked
            : labelsFr.designs.input.toggle.unchecked
        }`}
      >
        {`${label}`}
        {value ? (
          <svg className={cx('icon', 'checked')} aria-hidden="true">
            <use xlinkHref={`${icons}#toggle-right`} />
          </svg>
        ) : (
          <svg className={cx('icon', 'unchecked')} aria-hidden="true">
            <use xlinkHref={`${icons}#toggle-left`} />
          </svg>
        )}
        <input
          type="checkbox"
          id={camelIdentifiant}
          name={camelIdentifiant}
          value="toggle"
          title={`${label} ${
            value
              ? labelsFr.designs.input.toggle.checked
              : labelsFr.designs.input.toggle.unchecked
          }`}
          className="form--content--field--toggle--input"
          checked={value}
          onChange={(event) => {
            onChange(event);
          }}
          autoFocus={autoFocus}
        />
      </label>
    </div>
  );
};

/* PropTypes definition */
Toggle.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  fontSize: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

/* Props default value definition */
Toggle.defaultProps = {
  id: undefined,
  required: false,
  autoFocus: undefined,
  fontSize: 'M',
  onChange: () => {},
};

export default Toggle;
