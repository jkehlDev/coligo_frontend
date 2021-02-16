import React from 'react';
import PropTypes from 'prop-types';
import camelCase from 'camelcase';
import cx from 'classnames';
import passwordValidator from 'password-validator';

/* Attached Design components */
import GenericInput from './GenericInput';

/* Password valitation rules config */
import rules from 'app/designs/passwordRules.json';

/* Tools */
const schema = new passwordValidator();
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

function getRulesErr(schema, value) {
  return schema
    .validate(value, { list: true })
    .map((err) => rules.condition[err]);
}
function isValidPassword(value) {
  const state = schema.validate(value);
  if (state) {
    return {
      state,
    };
  } else {
    const rulesErr = getRulesErr(schema, value);
    return {
      state,
      tips: `Mot de passe invalide, les critères suivants ne sont pas respectés: ${rulesErr
        .map((rule) => rule.msg)
        .join(', ')}.`,
      structuredTips: (
        <>
          Mot de passe invalide, les critères suivants ne sont pas respectés:
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
  validation,
  validate,
}) => {
  const strength = getPasswordStrength(value);
  const id = camelCase(label);
  const genInputProps = {
    type: 'password',
    id,
    name: id,
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
    validation,
    validate,
  };
  return (
    <>
      <GenericInput {...genInputProps}>
        <details>
          <summary
            className={cx('password-strength', strength.class)}
          >{`Force du mot de passe: ${strength.quality} (${strength.value} bits)`}</summary>
          <article title="Règles saisie du mot de passe">
            <h1 data-fontsize="M">Règles saisie du mot de passe :</h1>
            <ul data-fontsize="M">
              {Object.values(rules.condition).map((rule) => (
                <li key={rule.id}>{rule.msg}</li>
              ))}
            </ul>
          </article>
        </details>
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  validation: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    tips: PropTypes.string,
    structuredTips: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }),
  validate: PropTypes.func,
};

/* Props default value definition */
InputPassword.defaultProps = {
  autoComplete: undefined,
  autoFocus: false,
  required: true,
  minLength: 10,
  maxLength: 30,
  size: 25,
  fontSize: 'M',
  onChange: undefined,
  validation: undefined,
  validate: (value) => isValidPassword(value),
};

export default InputPassword;
