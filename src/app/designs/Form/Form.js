import React from 'react';
import PropTypes from 'prop-types';

/* Attached Design components */
import InputText from './InputText';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import InputDate from './InputDate';
import InputRange from './InputRange';
import TextArea from './TextArea';
import FormGroup from './FormGroup';

/**
 * @function Form Form design react component
 * @param {*} props {onSubmit, fontSize, children}
 */
const Form = ({ title, onSubmit, fontSize, children }) => {
  return (
    <form
      className="form"
      title={title}
      onSubmit={onSubmit}
      data-fontsize={`${fontSize}`}
    >
      <fieldset className="form--content">
        <legend className="form--legend">{title}</legend>
        {children}
      </fieldset>
    </form>
  );
};

/* PropTypes definition */
Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  fontSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

/* Props default value definition */
Form.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
  fontSize: 'M',
};

/* Attached Design react components */
Form.InputText = InputText;
Form.InputPassword = InputPassword;
Form.InputEmail = InputEmail;
Form.InputDate = InputDate;
Form.InputRange = InputRange;
Form.TextArea = TextArea;
Form.Group = FormGroup;

export default Form;
