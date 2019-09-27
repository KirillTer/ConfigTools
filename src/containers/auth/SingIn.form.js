import React from "react";
import { reduxForm, Field } from "redux-form";
import { Grid, Form, Segment, Button, Header, Icon } from 'semantic-ui-react'
import renderTextField from './renderTextField'

const validate = ({email, password}) => {
  const errors = {}
  if (!email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password required";
  } else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  }
  return errors
}

const SingInView = ({
  handleSubmit
}) => {
  return (
  <Grid textAlign="center" verticalAlign="middle" className="app">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" icon color="violet" textAlign="center">
          <Icon name="puzzle piece" color="violet" />
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Header as='h5'>Username</Header>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
            />
            <Header as='h5'>Password</Header>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
            />
            <Button color="blue" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: "login",
  validate
})(SingInView);