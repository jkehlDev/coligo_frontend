import React from "react";
import PropTypes from "prop-types";

/* Externals react components */
import { Route, Switch } from "react-router-dom";

/* Business components */
import RouteProtected from "./business/RouteProtected";

/* Pages components */
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

/**
 * @function App Application main react component
 * @param {*} props {}
 */
const App = (props) => (
  <Switch>
    {/* HOME PAGE */}
    <Route exact path="/" component={Home} />
    {/* 404 & REDIRECT TOWARDS HOMEPAGE */}
    <Route exact path="*" component={NotFound} />
    <RouteProtected></RouteProtected>
  </Switch>
);

/* PropTypes definition */
App.propTypes = {
  props: PropTypes.object,
};

/* Props default value definition */
App.defaultProps = {
  props: {},
};

export default App;
