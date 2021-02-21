import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* Label dictionnary */
import labelsFr from 'labels_fr.json';

/* Attached Design components */
import InputText from './InputText';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import InputDate from './InputDate';
import InputRange from './InputRange';
import TextArea from './TextArea';
import Toggle from './Toggle';
import FormGroup from './FormGroup';
import Button from '../Button/Button';

/* Tools */
import { findByType, removeByType } from './tools';

const DefaultButtons = ({ onCancel }) => (
  <div className="form--buttons">
    <input
      type="submit"
      className="button form--submit"
      value={labelsFr.designs.form.submit.label}
      title={labelsFr.designs.form.submit.title}
    />
    {onCancel && (
      <input
        type="button"
        className="button form--cancel"
        onClick={onCancel}
        value={labelsFr.designs.form.cancel.label}
        title={labelsFr.designs.form.cancel.title}
      />
    )}
  </div>
);
Button.displayName = 'FormButton';
const FormButton = (props) => (
  <Button
    {...props}
    className={cx({
      'form--submit': props.type === 'submit',
      'form--button': props.type === 'button',
    })}
    noColor
    fontSize="M"
  />
);
const CustomButtons = ({ buttons }) => (
  <div className="form--buttons">{buttons}</div>
);

/**
 * @function Form Form design react component
 * @param {*} props {onSubmit, fontSize, children}
 */
const Form = ({ title, onSubmit, onCancel, fontSize, children }) => {
  const fields = useMemo(() => removeByType(children, Button), [children]);
  const buttons = useMemo(() => findByType(children, Button), [children]);
  const hasButton = useMemo(() => buttons.length > 0, [buttons]);
  return (
    <form
      className="form"
      title={title}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
      data-fontsize={`${fontSize}`}
    >
      <fieldset className="form--content">
        <legend className="form--legend">{title}</legend>
        {fields}
        {hasButton ? (
          <CustomButtons buttons={buttons} />
        ) : (
          <DefaultButtons onCancel={onCancel} />
        )}
      </fieldset>
    </form>
  );
};

/* PropTypes definition */
Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  fontSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
Form.defaultProps = {
  onSubmit: () => console.log('default submit action'),
  onCancel: undefined,
  fontSize: 'M',
};

/* Attached Design react components */
Form.InputText = InputText;
Form.InputPassword = InputPassword;
Form.InputEmail = InputEmail;
Form.InputDate = InputDate;
Form.InputRange = InputRange;
Form.TextArea = TextArea;
Form.Toggle = Toggle;
Form.Group = FormGroup;

Form.Button = FormButton;

export default Form;
