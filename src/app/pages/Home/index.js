import React, { useState } from "react";

/* Externals react components */

/* Business react components */

/* Designs react components */
import { Button, Form } from "app/designs";
import InputDate from "app/designs/Form/InputDate";

/**
 * @function Home Home page react component
 */
const Home = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <header></header>
      <main>
        <Button.Group align="centered">
          <Button
            title="plop"
            content="plop"
            icon="alert-triangle"
            fontSize="S"
          />
          <Button
            title="plop"
            content="plop2"
            positive
            icon="alert-circle"
            fontSize="M"
          />
          <Button
            title="plop"
            content="plop2"
            positive
            icon="alert-circle"
            fontSize="XL"
          />
          <Button title="plop" negative icon="alert-octagon" fontSize="XXL" />
        </Button.Group>
        <Form fontSize="M">
          <InputDate
            type="date"
            required
            label="S"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <InputDate type="month" label="S" value="" />
          <InputDate type="week" required label="S" value="" />
          <InputDate type="time" required label="S" value="" />
        </Form>
      </main>
      <footer></footer>
    </>
  );
};

// == Export
export default Home;
