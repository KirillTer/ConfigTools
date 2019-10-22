import React from "react";
import { Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react'

const UnAuthorized = () => {
  return (
  <Grid centered>
    <Grid.Row>
      <Grid.Column>
        <h1>You are UnAuthorized. Go to <Link to='/auth/singin'>Login</Link></h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  )
};

export default UnAuthorized;