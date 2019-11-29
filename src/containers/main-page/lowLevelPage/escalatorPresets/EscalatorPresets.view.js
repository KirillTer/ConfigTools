import React, { useState } from "react";
import { Grid, Form, Checkbox, TextArea, Radio, Button, Input, Select } from 'semantic-ui-react'

const EscalatorPresetsView = ({ location }) => {
  const [value, setValue] = useState('male')
  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const handleChange = (e, { val }) => {
    console.log('Change!', val)
    setValue(val)
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
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                control={Input}
                label='Last name'
                placeholder='Last name'
              />
              <Form.Field
                control={Select}
                label='Gender'
                options={options}
                placeholder='Gender'
              />
            </Form.Group>
            <Form.Group inline>
              <label>Quantity</label>
              <Form.Field
                control={Radio}
                label='One'
                value='1'
                checked={value === '1'}
                onChange={handleChange}
              />
              <Form.Field
                control={Radio}
                label='Two'
                value='2'
                checked={value === '2'}
                onChange={handleChange}
              />
              <Form.Field
                control={Radio}
                label='Three'
                value='3'
                checked={value === '3'}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label='About'
              placeholder='Tell us more about you...'
            />
            <Form.Field
              control={Checkbox}
              label='I agree to the Terms and Conditions'
            />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default EscalatorPresetsView;
