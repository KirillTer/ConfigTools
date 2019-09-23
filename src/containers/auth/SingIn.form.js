import React from "react";
import { reduxForm, Field } from "redux-form";
import { Grid, Form, Segment, Button } from 'semantic-ui-react'
import ErrorField from '../../components/ErrorField'

const validate = ({email, password}) => {
  const errors = {}
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Required";
  } else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  }
  return errors
}

const SingInView = ({
  handleSubmit
}) => {
  return (
    <>
      <h1>Sing In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={ErrorField}
            label="Email"
            type="email"
          />
        </div>
        <div>
          <Field
            name="password"
            component={ErrorField}
            label="Password"
            type="password"
          />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default reduxForm({
  form: "login",
  validate
})(SingInView);