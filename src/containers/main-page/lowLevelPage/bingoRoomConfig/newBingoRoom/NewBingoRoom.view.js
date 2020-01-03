import React, { useState }  from "react";
import { Grid, Form, Button, Input, Divider, Modal, Header } from 'semantic-ui-react'

const NewBingoRoomView = ({location}) => {
  const [open, setOpen] = useState(true)

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const handleSubmit = () => {
    setOpen(true)
  }

  const handleSave = () => {
    console.log('Saved!')
    setOpen(false)
  }

  return (
    <Grid centered style={{
      minHeight: 'calc(100vh - 5rem)',
      backgroundColor: '#F7F7F7',
    }}>
      <Grid.Row>
        <Grid.Column width={8}>
          <h1 style={{margin: '2rem 0'}}>{pathName}</h1>
          <Form>
            <Form.Field
              id='name'
              control={Input}
              label='Lobby display name'
              placeholder='Lobby display name'
              width='eight'
              size='small'
              style={{margin: '0.5rem 0 1rem 0'}}
            />
            <p style={{margin: '0.5rem 0'}}>Node - N/A</p>
            <p style={{margin: '0.5rem 0'}}>Key - N/A</p>
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>Availability</p>
              <Form.Field
                label='Standalone'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Field
                label='Network'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
            </Form.Group>
            <Divider style={{margin: '2rem 0'}}/>
            <Form.Field label='Game type' control='select' width='five' style={{margin: '0.5rem 0', height: '2.5rem'}}>
              <option value='90'>90 Balls</option>
              <option value='100'>100 Balls</option>
              <option value='110'>110 Balls</option>
            </Form.Field>
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>Balance restriction</p>
              <Form.Field
                label='No  restrictions'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Field
                label='Cash only'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
            </Form.Group>
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>Free winning type</p>
              <Form.Field
                label='Cash'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Field
                label='Bingo bonus'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Field
                label='Other bonus'
                control='input'
                type='radio'
                name='htmlRadios'
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
            </Form.Group>
            <Form.Group style={{
              margin: '7rem 0',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <Button style={{marginRight: '2rem'}}>Discard</Button>
              <Button primary type='submit' onClick={handleSubmit}>Create</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Modal size='small' open={open} onClose={() => setOpen(false)}>
        <Modal.Content style={{padding: '2rem'}}>
          <Modal.Description>
            <Header>Lobby Display Name</Header>
            <div>
              <span>Language:</span>
              <Input style={{width: '43rem', margin: '1rem 0 0 1.8rem'}}/>
            </div>
            <div style={{margin: '1rem 0'}}>
              <span>Language A:</span>
              <Input style={{width: '43rem', margin: '0.5rem 0 0 1rem'}}/>
            </div>
            <div style={{margin: '1rem 0'}}>
              <span>Language B:</span>
              <Input style={{width: '43rem', margin: '0.5rem 0 0 1rem'}}/>
            </div>
            <div style={{margin: '1rem 0'}}>
              <span>Language C:</span>
              <Input style={{width: '43rem', margin: '0.5rem 0 0 1rem'}}/>
            </div>
          </Modal.Description>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '2rem 0 0 0'
          }}>
            <Button onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              primary
              content="Save"
              onClick={handleSave}
              style={{margin: '0 2rem', width: '6.1rem'}}
            />
          </div>
        </Modal.Content>
      </Modal>
    </Grid>
  );
};

export default NewBingoRoomView;
