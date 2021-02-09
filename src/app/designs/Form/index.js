import React from "react";
import PropTypes from "prop-types";

/* Externals react components */

/* Business components */

/* Pages components */

/* Styles */
import styles from '../../styles.scss';

/**
 * @function Form Form application design react component
 * @param {*} props {handleSubmit}
 */
const Form = (props) => (
  <form className={styles.form} {...props}></form>
);

/* PropTypes definition */
Form.propTypes = {
  props : PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
  }).isRequired,
};

/* Props default value definition */
Form.defaultProps = {};

export default Form;
