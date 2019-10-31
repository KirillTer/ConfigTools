import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Search, Header, Accordion, Icon } from 'semantic-ui-react'
import { categories } from '../../../helpers/categories'

// const Components = [Jackpot, Games, Channels, Code];

const ExercisesView = withRouter(({history, shortcut, updateHistoryAction, addShortcutAction, location}) => {

  const [ activeIndex, setActiveIndex] = useState([])
  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex;
    const currentIndexPosition = activeIndex.indexOf(index);
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(index);
    }
    setActiveIndex([...newIndex]);
  };

  const handleAddShortcut = () => {
    addShortcutAction(pathName);
  }

  return (
    <Grid centered style={{ minHeight: 'calc(100vh - 5rem)',
                            backgroundColor: '#F7F7F7',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'start' }}>
      <Header as='h4' style={{ width: '100vw', height: '5rem', marginTop: '5rem' }}>
        <Search
          category
          loading={false}
          size='tiny'
          input={{ fluid: true }} 
          placeholder='Search Tools'
          style={{ width: '74rem', margin: '0 auto'}}
        />
      </Header>
      <Grid.Row>
        <Grid.Column style={{ margin: '0 4rem' }}>
          <div  style={{width: '7rem',
                height: '7rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '6rem',
                padding: '1rem',
                backgroundColor: 'white',
                fontSize: 10,
                textTransform: 'uppercase' }}>
            <Icon size='big' name='list alternate outline' style={{ display: 'block', margin: '0.5rem auto' }}/>
            <p style={{ textAlign: 'center' }}>Some thing</p>
          </div>
        </Grid.Column>
        <Grid.Column style={{ margin: '0 4rem' }}>
          <div  style={{width: '7rem',
                height: '7rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '6rem',
                padding: '1rem',
                backgroundColor: 'white',
                fontSize: 10,
                textTransform: 'uppercase' }}>
            <Icon size='huge' name='plus' style={{ display: 'block', margin: 0 }} onClick={handleAddShortcut}/>
          </div>
        </Grid.Column>
        <Grid.Column style={{ margin: '0 4rem' }}></Grid.Column>
        <Grid.Column style={{ margin: '0 4rem' }}></Grid.Column>
        <Grid.Column style={{ margin: '0 4rem' }}></Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={10}>
          <Accordion>
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <Accordion.Title
                    active={activeIndex.includes(category.id)}
                    index={category.id}
                    onClick={handleClick}
                  >
                    <Icon name='dropdown' />
                    <Icon size='large' style={{ verticalAlign: 'baseline', margin: '1rem 0.5rem' }} name={category.icon} />
                    <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>{category.longName}</span>
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex.includes(category.id)}>
                  {category.items.map((item) => {
                    return (
                      <div key={item.id}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>{item.category ? item.category : null}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {item.elem ? item.elem.map((el) => {
                          return (
                            <div key={el.id}
                              style={{width: '7rem',
                                      height: '7rem',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      borderRadius: '6rem',
                                      margin: '0.7rem 1rem',
                                      padding: '1rem',
                                      backgroundColor: 'white',
                                      fontSize: 10,
                                      textTransform: 'uppercase' }}>
                              <Icon size='big' name={el.icon} style={{ display: 'block', margin: '0.5rem auto' }}/>
                              <p style={{ textAlign: 'center' }}>{el.name}</p>
                            </div>
                          )
                        }) : null}
                        </div>
                      </div>
                    )
                  })}
                  </Accordion.Content>
                </div>
              )
            })}
          </Accordion>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
})

export default ExercisesView;
