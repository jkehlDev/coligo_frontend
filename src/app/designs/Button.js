import React from "react";
import PropTypes from "prop-types";

/* Externals react components */

/* Business components */

/* Pages components */

/* Styles */
import styles from '../../styles.scss';

/**
 * @function Button Button design react component
 * @param {*} props {}
 */
const Button = (props) => (
  <button className={styles.button}></button>
);

/* PropTypes definition */
Button.propTypes = {
  props: PropTypes.object,
};

/* Props default value definition */
Button.defaultProps = {
  props: {},
};

export default Button;
