import React from 'react';
import PropTypes from 'prop-types';

/* Externals react components */
import { Route, Switch } from 'react-router-dom';

/* Business components */
import RouteProtected from 'app/business/RouteProtected';

/* Pages components */
import Home from 'app/pages/Home';
import NotFound from 'app/pages/NotFound';

/**
 * @function App Application main react component
 * @param {*} props {}
 */
const App = (props) => (
  <>
    <header></header>
    <main>
      <Switch>
        {/* HOME PAGE */}
        <Route exact path="/" component={Home} />
        {/* 404 & REDIRECT TOWARDS HOMEPAGE */}
        <Route exact path="*" component={NotFound} />
        <RouteProtected></RouteProtected>
      </Switch>
    </main>
    <footer></footer>
  </>
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
