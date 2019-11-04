import React from "react";
import { Grid } from 'semantic-ui-react'

const LoyaltyLevelsView = ({location}) => {

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  return (
    <Grid centered style={{ minHeight: 'calc(100vh - 5rem)',
    backgroundColor: '#F7F7F7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start' }}>
      <Grid.Row>
        <Grid.Column width={10}>
          <h1>{pathName}</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoyaltyLevelsView;
