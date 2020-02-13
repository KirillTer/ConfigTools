import React, { useState }  from "react";
import { history } from '../../../../../store/configureStore'
import { Grid, Form, Button, Input, Divider, Modal, Header, Radio } from 'semantic-ui-react'

const NewBingoRoomView = ({location, createAction}) => {
  const [open, setOpen] = useState(false)
  const [bingoRoom, setBingoRoom] = useState({
    name: '',
    availability: 'standalone',
    type: '90',
    balance: 'noRestrictions',
    winningType: 'cash'
  })

  const options = [
    { key: 'm', text: '90 Balls', value: '90' },
    { key: 'f', text: '100 Balls', value: '100' },
    { key: 'o', text: '110 Balls', value: '110' },
  ]

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const handleChange = (e, { name, value }) => {
    console.log('handleChange', name, value)
    setBingoRoom({ ...bingoRoom, [name]: value })
  }

  const handleSubmit = () => {
    console.log('BingoRoom', bingoRoom)
    setOpen(true)
  }

  const handleSave = () => {
    console.log('Saved!', bingoRoom)
    setOpen(false)
    createAction(bingoRoom)
    history.push('/main/Bingo Room Config')
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
              name='name'
              control={Input}
              label='Lobby Display Name'
              placeholder='LobbyDisplayName'
              width='eight'
              size='small'
              style={{margin: '0.5rem 0 1rem 0'}}
              value={bingoRoom.name}
              onChange={handleChange}
            />
            <p style={{margin: '0.5rem 0'}}>Node - N/A</p>
            <p style={{margin: '0.5rem 0'}}>Key - N/A</p>
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>Availability</p>
              <Form.Radio
                name='availability'
                control={Radio}
                label='Standalone'
                value='standalone'
                checked={bingoRoom.availability === 'standalone'}
                onChange={handleChange}
              />
              <Form.Radio
                name='availability'
                control={Radio}
                label='Network'
                value='network'
                checked={bingoRoom.availability === 'network'}
                onChange={handleChange}
              />
            </Form.Group>
            <Divider style={{margin: '2rem 0'}}/>
            <Form.Select label='GameType' name='type' options={options} value={bingoRoom.type} onChange={handleChange} width='five' style={{margin: '0.5rem 0', height: '2.5rem'}} />
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>BalanceRestriction</p>
              <Form.Radio
                name='balance'
                label='NoRestrictions'
                control={Radio}
                value='noRestrictions'
                checked={bingoRoom.balance === 'noRestrictions'}
                onChange={handleChange}
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Radio
                name='balance'
                label='CashOnly'
                control={Radio}
                value='cashOnly'
                checked={bingoRoom.balance === 'cashOnly'}
                onChange={handleChange}
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
            </Form.Group>
            <Form.Group grouped>
              <p style={{margin: '2rem 0 0.5rem 0'}}>Free winning type</p>
              <Form.Radio
                name='winningType'
                label='Cash'
                control={Radio}
                value='cash'
                checked={bingoRoom.winningType === 'cash'}
                onChange={handleChange}
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Radio
                name='winningType'
                label='BingoBonus'
                control={Radio}
                type='radio'
                value='bingoBonus'
                checked={bingoRoom.winningType === 'bingoBonus'}
                onChange={handleChange}
                style={{margin: '0.5rem 0.5rem 0.5rem 0'}}
              />
              <Form.Radio
                name='winningType'
                label='OtherBonus'
                control={Radio}
                type='radio'
                value='otherBonus'
                checked={bingoRoom.winningType === 'otherBonus'}
                onChange={handleChange}
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
            <Header>LobbyDisplayName</Header>
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
            <Button 
              content='Cancel'
              onClick={() => setOpen(false)}
              style={{margin: '0 2rem', width: '6.1rem'}}
            />
            <Button
              primary
              content='Save'
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
