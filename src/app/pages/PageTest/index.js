import React, { useState } from 'react';

/* Designs react components */
import { Button, Form } from 'app/designs';

/**
 * @function PageTest Page Test react designs components
 */
const PageTest = () => {
  const [email, setEmail] = useState('plop@plop.pop');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const [range, setRange] = useState(0.5);
  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');
  const [time, setTime] = useState('');

  const [emailValidation, setEmailValidation] = useState({
    state: false,
    tips: 'Email déjà existant veuillez recommencer avec un autre',
  });
  return (
    <>
      <Button.Group>
        <Button title="plop" content="plop" />
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
      <Form
        fontSize="M"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('submit');
        }}
        onCancel={() => {
          console.log('cancel');
        }}
        title="My Form"
      >
        <Form.InputEmail
          autoFocus
          required
          label="Field Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setEmailValidation(undefined);
          }}
          extValidityState={emailValidation}
        />
        <Form.Group>
          <Form.InputPassword
            required
            label="Field Password"
            autoComplete="off"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Form.InputPassword
            required
            label="Field Confirm Password"
            autoComplete="off"
            ruled={false}
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
            }}
            validator={(value) => ({ state: password === value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.InputText
            label="Field Text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <Form.InputRange
            id="rangeid"
            label="Field Range"
            value={range}
            onChange={(event) => {
              setRange(parseFloat(event.target.value));
            }}
          />
          <Form.Toggle
            label="FieldToggle"
            value={toggle}
            onChange={(event) => {
              setToggle(event.target.checked);
            }}
          />
        </Form.Group>
        <Form.TextArea
          label="Field Text Area"
          value={textarea}
          onChange={(event) => {
            setTextarea(event.target.value);
          }}
        />
        <Form.Group>
          <Form.InputDate
            label="Field Date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <Form.InputDate
            type="month"
            label="Field Month"
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
            }}
          />
          <Form.InputDate
            type="week"
            required
            label="Field Week"
            value={week}
            onChange={(event) => {
              setWeek(event.target.value);
            }}
          />
          <Form.InputDate
            type="time"
            required
            label="Field Time"
            value={time}
            onChange={(event) => {
              setTime(event.target.value);
            }}
          />
        </Form.Group>
      </Form>
    </>
  );
};

// == Export
export default PageTest;
