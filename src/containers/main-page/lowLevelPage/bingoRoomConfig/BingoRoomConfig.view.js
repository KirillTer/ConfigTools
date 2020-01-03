import React from "react";
import { history } from '../../../../store/configureStore'
import { Grid, Form, TextArea, Button } from 'semantic-ui-react'
import Search from '../../../layout/Search'

const BingoRoomConfigView = ({location}) => {

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const handleSubmit = () => {
    console.log('Submit')
    history.push('/main/New Bingo Room')
  }

  return (
    <Grid centered style={{
      minHeight: 'calc(100vh - 5rem)',
      backgroundColor: '#F7F7F7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start'
    }}>
      <Grid.Row>
        <Grid.Column width={10}>
          <Form>
            <Form.Group inline style={{ justifyContent: 'space-between' }}>
              <h1>{pathName}</h1>
              <Button primary content='Create' onClick={handleSubmit}>Create</Button>
            </Form.Group>
            <Search />
            <Form.Field
              control={TextArea}
              placeholder='Please select a group to display content'
              style={{ marginTop: '1rem', height: '40rem' }}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BingoRoomConfigView;
