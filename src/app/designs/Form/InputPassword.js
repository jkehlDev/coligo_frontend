import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';
import passwordValidator from 'password-validator';

/* Label dictionnary */
import labelsFr from 'app/designs/labels_fr.json';

/* Attached Design components */
import GenericInput from './GenericInput';

/* Password valitation rules config */
import rules from 'app/designs/passwordRules.json';

/* SVG icon asset */
import icons from 'app/designs/icon-sprite.svg';

/* Tools */
/* Validation Rules Schema */
const schema = new passwordValidator();
// --------------------
schema
  .is()
  .min(rules.condition.min.value) // Minimum length 8
  .is()
  .max(rules.condition.max.value) // Maximum length 100
  .has()
  .uppercase(rules.condition.uppercase.value) // Must have uppercase letters
  .has()
  .lowercase(rules.condition.lowercase.value) // Must have lowercase letters
  .has()
  .digits(rules.condition.digits.value) // Must have at least 2 digits
  .has()
  .symbols(rules.condition.symbols.value) // Must have at least 2 symbols
  .has()
  .not()
  .spaces(); // Should not have spaces
// --------------------

/* Obtain validation rule execution */
function getRulesErr(schema, password) {
  return schema
    .validate(password, { list: true })
    .map((err) => rules.condition[err]);
}

/* Obtain Password validation state */
function isValidPassword(password) {
  const state = schema.validate(password);
  if (state) {
    return {
      state,
    };
  } else {
    const rulesErr = getRulesErr(schema, password);
    return {
      state,
      tips: `${
        labelsFr.designs.password.validator.default_invalid
      } ${rulesErr.map((rule) => rule.msg).join(', ')}.`,
      structuredTips: (
        <>
          {`${labelsFr.designs.password.validator.default_invalid}`}
          <ul>
            {rulesErr.map((rule) => (
              <li key={rule.id}>{rule.msg}</li>
            ))}
          </ul>
        </>
      ),
      rulesErr,
    };
  }
}
/* Obtain Password Strength bits value */
function getPasswordStrength(password) {
  const charsetLenght = rules.CHARSETS.join('').length;
  const value = Math.ceil(Math.log2(Math.pow(charsetLenght, password.length)));
  const evaluate = rules.strength.find((elmt) => elmt.step > value);
  return { ...evaluate, value };
}

/**
 * @function InputPassword InputPassword design react component
 * @param {*} props
 */
const InputPassword = ({
  label,
  autoComplete,
  autoFocus,
  required,
  minLength,
  maxLength,
  size,
  fontSize,
  placeholder,
  value,
  onChange,
  extValidityState,
  validator,
  ruled,
}) => {
  const [togglePassword, setTogglePassword] = useState(true);
  const type = useMemo(() => (togglePassword ? 'password' : 'text'), [
    togglePassword,
  ]);
  const passwordState = useMemo(() => isValidPassword(value).state, [value]);

  /* Obtain eye/eye-off icon name */
  const iconEye = useMemo(() => (togglePassword ? 'eye-off' : 'eye'), [
    togglePassword,
  ]);

  /* Obtain lock/unlock icon name */
  const iconLock = useMemo(() => (passwordState ? 'lock' : 'unlock'), [
    passwordState,
  ]);

  /* Set password Strength */
  const strength = useMemo(() => getPasswordStrength(value), [value]);

  /* Set identifiant (id, name) in camel case format */
  const camelIdentifiant = useMemo(() => camelCase(label), [label]);

  /* Build GenericInput props */
  const genInputProps = useMemo(
    () => ({
      type,
      id: camelIdentifiant,
      name: camelIdentifiant,
      label,
      autoComplete,
      autoFocus,
      inputClassName: '',
      min: undefined,
      minLength,
      max: undefined,
      maxLength,
      placeholder,
      fontSize,
      required,
      size,
      value,
      onChange,
      extValidityState,
      validator,
      // Input option : User abality to hide or show password value
      inputOption: (
        <svg
          className={cx(
            'form--content--field--box--input--password--eye-icon',
            strength.class
          )}
          onClick={() => {
            setTogglePassword(!togglePassword);
          }}
          aria-hidden="true"
        >
          <use xlinkHref={`${icons}#${iconEye}`} />
        </svg>
      ),
    }),
    [
      autoComplete,
      autoFocus,
      camelIdentifiant,
      extValidityState,
      fontSize,
      iconEye,
      label,
      maxLength,
      minLength,
      onChange,
      placeholder,
      required,
      size,
      strength.class,
      togglePassword,
      type,
      validator,
      value,
    ]
  );
  return (
    <>
      <GenericInput {...genInputProps}>
        {/* If ruled Input password - render rules details and password strength */}
        {ruled && (
          <details
            className="form--content--field--box--input--password--description"
            title={`${
              passwordState
                ? `${labelsFr.designs.password.details.info_quality} ${strength.quality} (${strength.value} bits)`
                : `${labelsFr.designs.password.details.invalid}`
            }`}
          >
            <summary className="password-rules">
              <svg
                className={cx(
                  'password-icon',
                  ` ${passwordState ? strength.class : ''}`
                )}
                aria-hidden="true"
              >
                <use xlinkHref={`${icons}#${iconLock}`} />
              </svg>
              {` ${passwordState ? strength.quality : ''} - ${
                labelsFr.designs.password.details.summary_title
              } :`}
            </summary>
            <article
              title={`${labelsFr.designs.password.details.summary_title}`}
            >
              <h1 data-fontsize="M">{`${labelsFr.designs.password.details.summary_title} : `}</h1>
              <ul data-fontsize="M">
                {Object.values(rules.condition).map((rule) => (
                  <li key={rule.id}>{rule.msg}</li>
                ))}
              </ul>
            </article>
          </details>
        )}
      </GenericInput>
    </>
  );
};

/* PropTypes definition */
InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.oneOf(['off', 'current-password', 'new-password'])
    .isRequired,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  placeholder: PropTypes.string,
  ruled: PropTypes.bool,
  extValidityState: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
    structuredTips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }),
  validator: PropTypes.func,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

/* Props default value definition */
InputPassword.defaultProps = {
  autoComplete: undefined,
  autoFocus: false,
  required: true,
  minLength: 10,
  maxLength: 30,
  size: 30,
  fontSize: 'M',
  ruled: true,
  extValidityState: undefined,
  validator: (value) => isValidPassword(value),
  onChange: undefined,
};

export default InputPassword;
