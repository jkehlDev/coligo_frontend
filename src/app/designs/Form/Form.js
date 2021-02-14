import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

/* Attached Design components */
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import InputEmail from "./InputEmail";
import InputDate from "./InputDate";
import TextArea from "./TextArea";

/**
 * @function Form Form design react component
 * @param {*} props {onSubmit, fontSize, children}
 */
const Form = ({ onSubmit, fontSize, children }) => (
  <section className="form--section">
  <h1 className="form--section--title">My form</h1>
  <form className="form--content" onSubmit={onSubmit} data-fontsize={`${fontSize}`}>
    {children}
  </form>
  </section> 
);

/* PropTypes definition */
Form.propTypes = {
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
  fontSize: "M",
};

/* Attached Design react components */
Form.InputText = InputText;
Form.InputPassword = InputPassword;
Form.InputEmail = InputEmail;
Form.InputDate = InputDate;
Form.TextArea = TextArea;

export default Form;
