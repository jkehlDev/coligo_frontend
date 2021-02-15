import React, { useState } from "react";

/* Externals react components */

/* Business react components */

/* Designs react components */
import { Button, Form } from "app/designs";
import InputDate from "app/designs/Form/InputDate";
import InputEmail from "app/designs/Form/InputEmail";

/**
 * @function Home Home page react component
 */
const Home = () => {
  const [email, setEmail] = useState("plop@plop.pop");
  const [emailValidation, setEmailValidation] = useState({state: false, tips:'Email déjà existant veuillez recommencer avec un autre'});
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");
  const [time, setTime] = useState("");
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
            content="plop3"
            positive
            icon="alert-circle"
            fontSize="XL"
          />
          <Button title="plop" negative icon="alert-octagon" fontSize="XXL" />
        </Button.Group>
        <Form fontSize="S">
          <InputEmail
            autoFocus
            required
            label="Field Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailValidation(undefined);
            }}            
            validation={emailValidation}
          />
          <InputDate
            label="Field Date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}            
          />
          <InputDate
            type="month"
            label="Field Month"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          />
          <InputDate
            type="week"
            required
            label="Field Week"
            value={week}
            onChange={(event) => {
              setWeek(event.target.value);
            }}
          />
          <InputDate
            type="time"
            required
            label="Field Time"
            value={time}
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
        </Form>
      </main>
      <footer></footer>
    </>
  );
};

// == Export
export default Home;
