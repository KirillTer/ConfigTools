import React from "react";
import { Grid, Icon } from 'semantic-ui-react'
import { categories } from '../../../../helpers/categories'

const SummaryView = ({location}) => {

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  const pageName = categories.find(obj => obj.shortName === pathName)

  return (
    <Grid centered style={{ minHeight: 'calc(100vh - 5rem)',
    backgroundColor: '#F7F7F7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start' }}>
      {console.log('Low level - ', pathName)}
      <Grid.Row>
        <Grid.Column width={10}>
          <h1>{pathName}</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SummaryView;
