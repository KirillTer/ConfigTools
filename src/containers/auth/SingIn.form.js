import React from "react";
import { reduxForm, Field } from "redux-form";
import { NavLink } from "react-router-dom";
import { Grid, Form, Segment, Button, Header, Image, Checkbox, Message } from 'semantic-ui-react'
import renderTextField from './renderTextField'
import logoImage from '../../assets/img_playtechOneLogo.svg';

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
  handleSubmit,
  errorLogin
}) => {
  return (
    <Grid textAlign="center" style={{ marginTop: '10rem'}}>
      <Grid.Column style={{ maxWidth: 400 }}>
        <Image src={logoImage} size='medium' centered style={{ marginBottom: '2rem'}}/>
        <Form size="large" onSubmit={handleSubmit} error>
          <Segment stacked>
            <Header as='h5' floated='left'>Username</Header>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              type="email"
            />
            <Header as='h5' floated='left'>Password</Header>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
            />
            <Button color="blue" fluid size="large" type="submit">
              Login
            </Button>
            <Checkbox label='Remember me' style={{ marginTop: '1rem', marginRight: 0,  display: 'block', maxWidth: 150, textAlign: 'left' }}/>
            <NavLink to={"/main/Home"} style={{ display: 'block', textAlign: 'right', top: -19, left: 190, position: 'relative', maxWidth: 150 }}>Forget password?</NavLink>
            {errorLogin && <Message
              error
              content={errorLogin}
            />}
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