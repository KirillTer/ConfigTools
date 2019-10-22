import React from "react";
import { Grid, Header, Image } from 'semantic-ui-react'

const TransactionView = () => {
  return (
    <Grid columns='4' centered>
      <Header as='h2' style={{ marginTop: 50 }}>Transaction Data</Header>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TransactionView;
