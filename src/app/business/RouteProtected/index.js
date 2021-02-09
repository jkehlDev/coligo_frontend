import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* Externals react components */
import { Redirect, Route } from "react-router-dom";

/* Business react components */

/* Designs react components */

/**
 * @function ProtectedRoute Route protected business react component
 * @param {*} props {path, exact, sensitive, strict, component, isAllowed, redirectTo}
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
  component: PropTypes.any.isRequired,
  allowed: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  sensitive: PropTypes.bool.isRequired,
  strict: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

/* Props default value definition */
RouteProtected.defaultProps = {};

/* HOC Redux container implementation */
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
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RouteProtected);
