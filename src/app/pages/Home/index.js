import React from "react";

/* Externals react components */

/* Business react components */

/* Designs react components */
import { Button } from "app/designs";

/**
 * @function Home Home page react component
 */
const Home = () => (
  <>
    <header></header>
    <main>
      <Button.Group align="centered">
        <Button title="plop" content="plop" icon="alert-triangle" size="S"/>
        <Button title="plop" content="plop2" positive icon="alert-circle" size="M"/>
        <Button title="plop" content="plop2" positive icon="alert-circle" size="XL"/>
        <Button title="plop" negative icon="alert-octagon"  size="XXL"/>
      </Button.Group>
    </main>
    <footer></footer>
  </>
);

// == Export
export default Home;
