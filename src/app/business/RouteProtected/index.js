import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/* Externals react components */
import { Redirect, Route } from 'react-router-dom';

/**
 * @function ProtectedRoute Route protected business react component
 * @param {*} props 
 */
const RouteProtected = ({
  path,
  component: Component,
  allowed,
  exact,
  sensitive,
  strict,
  redirectTo,
}) => (
  <Route exact={exact} path={path} sensitive={sensitive} strict={strict}>
    {allowed ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: redirectTo, state: { isRedirect: true } }} />
    )}
  </Route>
);

/* PropTypes definition */
RouteProtected.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  allowed: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  sensitive: PropTypes.bool.isRequired,
  strict: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

/* HOC Redux container implementation */
/**
 * @function mapStateToProps
 * @param {*} state Current redux state
 * @param {*} ownProps OwnProps
 */
const mapStateToProps = (state, ownProps) => ({
  exact: ownProps.exact
    ? ownProps.exact
    : state.app.business.routeProtected.default.exact,
  sensitive: ownProps.sensitive
    ? ownProps.sensitive
    : state.app.business.routeProtected.default.sensitive,
  strict: ownProps.strict
    ? ownProps.strict
    : state.app.business.routeProtected.default.strict,
  redirectTo: ownProps.redirectTo
    ? ownProps.redirectTo
    : state.app.business.routeProtected.default.redirectTo,
});
/**
 * @function mapDispatchToProps
 * @param {*} dispatch
 * @param {*} _ OwnProps (notuse)
 */
const mapDispatchToProps = (dispatch, _) => ({});

/* Export business component */
export default connect(mapStateToProps, mapDispatchToProps)(RouteProtected);
