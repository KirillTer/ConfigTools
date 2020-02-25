import React from "react";
import { Grid, Form, TextArea, Select } from 'semantic-ui-react'
import Search from '../../../layout/Search'

const EscalatorPresetsView = ({ location }) => {

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const handleSubmit = () => {
    console.log('Submit')
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
          <h1>{pathName}</h1>
          <Form>
            <Form.Group inline style={{ justifyContent: 'space-between' }}>
              <Form.Field
                control={Select}
                options={options}
                label={'Group'}
                placeholder='Select a group to display content'
              />
              <Form.Button content='Create' onClick={handleSubmit} style={{ marginRight: '-1rem' }} />
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

export default EscalatorPresetsView;
