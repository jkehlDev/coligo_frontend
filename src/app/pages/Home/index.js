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
        <Button title="plop" content="plop" icon="alert-triangle"/>
        <Button title="plop" content="plop2" positive icon="alert-circle"/>
        <Button title="plop" negative icon="alert-octagon"/>
      </Button.Group>
    </main>
    <footer></footer>
  </>
);

// == Export
export default Home;
