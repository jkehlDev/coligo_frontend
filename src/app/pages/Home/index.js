import React from 'react';
import PropTypes from 'prop-types';
import SearchProjects from 'app/business/SearchProjects';

/* Externals react components */

/* Business react components */

/* Designs react components */

/**
 * @function Home Home page react component
 * @param {*} props {}
 */
const Home = (props) => (
  <>
    <SearchProjects />
  </>
);

/* PropTypes definition */
Home.propTypes = {
  props: PropTypes.object,
};

/* Props default value definition */
Home.defaultProps = {
  props: {},
};

export default Home;
