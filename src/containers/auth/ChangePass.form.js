import React from "react";
import { reduxForm, Field } from "redux-form";
import { Grid, Form, Segment, Button, Header, Image } from 'semantic-ui-react'
import renderTextField from './RenderTextField'
import logoImage from '../../assets/img_playtechOneLogo.svg';

const validate = ({ password, confirmPassword }) => {
  const errors = {}
  if (!password) {
    errors.password = "Password required";
  } else if (password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  } else if (password.length > 15) {
    errors.password = "Password should be less then 15 characters";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Password required";
  } else if (confirmPassword.length < 6) {
    errors.confirmPassword = "Password should be at least 6 characters";
  } else if (confirmPassword.length > 15) {
    errors.confirmPassword = "Password should be less then 15 characters";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords doesn't much";
  }
  return errors
}

const ChangePassView = ({
  handleSubmit,
  // errorChangePass
}) => {
  return (
    <Grid textAlign="center" style={{ marginTop: '10rem' }}>
      <Grid.Column style={{ maxWidth: 400 }}>
        <Image src={logoImage} size='medium' centered style={{ marginBottom: '2rem' }} />
        <Form size="large" onSubmit={handleSubmit} error>
          <Segment stacked>
            <h2 style={{ textAlign: 'left' }}>Change Password</h2>
            <Header as='h5' floated='left'>New Password</Header>
            <Field
              name="password"
              component={renderTextField}
              label="New Password"
              type="password"
            />
            <p style={{ fontSize: '0.8rem', textAlign: 'left', marginTop: '-0.5rem' }}>Passwords are case sensitive and must be between 6 to 15 characters using characters Aa to Zz, 0 to 9 and _ Spaces are not permitted.</p>
            <Header as='h5' floated='left' style={{ marginTop: '1rem' }}>Confirm New Password</Header>
            <Field
              name="confirmPass"
              component={renderTextField}
              label="Confirm New Password"
              type="password"
            />
            <p style={{ fontSize: '0.8rem', textAlign: 'left', marginTop: '-0.5rem' }}>Once your password has been changed you will be asked to login again with new password.</p>
            <Button color="blue" fluid size="large" type="submit" style={{ marginTop: '2rem' }}>
              Submit
            </Button>
            {/* {errorChangePass && <Message
              error
              content={errorChangePass}
            />} */}
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: "changePass",
  validate
})(ChangePassView);