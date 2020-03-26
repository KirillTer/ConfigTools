import React from "react";
import { history } from '../../../../store/configureStore'
import { Grid, Form, Container, List, Button } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import Search from '../../../layout/Search'
import BingoRoomItem from './BingoRoomItem'

const BingoRoomConfigView = ({ location, items }) => {
  const { t } = useTranslation();
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
              <Button primary onClick={handleSubmit}>{t('Common.Create')}</Button>
            </Form.Group>
            <Search />
            <Container style={{ backgroundColor: 'white', margin: '3rem 0', border: '1px solid lightgrey', borderRadius: '0.3rem' }}>
              <List>
                <List.Item></List.Item>
                {items.map((item, index) => <List.Item key={index}><BingoRoomItem item={item} /></List.Item>)}
              </List>
            </Container>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BingoRoomConfigView;
