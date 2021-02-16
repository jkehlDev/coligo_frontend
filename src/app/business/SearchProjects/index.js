import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Externals react components */

/* Business react components */

/* Designs react components */
import { Form } from '../../designs';

/**
 * @function SearchProjects Search projects business react component
 * @param {*} props {path, exact, sensitive, strict, component, isAllowed, redirectTo}
 */
const SearchProjects = ({}) => <Form></Form>;

/* PropTypes definition */
SearchProjects.propTypes = {};

/* Props default value definition */
SearchProjects.defaultProps = {};

/* HOC Redux container implementation */
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
