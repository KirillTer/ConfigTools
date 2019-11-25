import React, { useState } from "react";
import _ from 'lodash'
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Grid, Header, Accordion, Icon, Modal } from 'semantic-ui-react'
import { categories } from '../../../helpers/categories'
import SearchComponent from '../../layout/Search'

const ExercisesView = withRouter(({ historyPath, shortcut1, shortcut2, shortcut3, shortcut4,
  addShortcutAction1, addShortcutAction2, addShortcutAction3, addShortcutAction4 }) => {

  const [activeIndex, setActiveIndex] = useState([])
  const [modalData, setModalData] = useState('')

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

  const callbackFunction = (childData) => {
    setModalData(childData)
  }

  const onApprove1 = () => {
    addShortcutAction1(modalData)
  }

  const onApprove2 = () => {
    addShortcutAction2(modalData)
  }

  const onApprove3 = () => {
    addShortcutAction3(modalData)
  }

  const onApprove4 = () => {
    addShortcutAction4(modalData)
  }

  return (
    <Grid centered style={{
      minHeight: 'calc(100vh - 5rem)',
      backgroundColor: '#F7F7F7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'start'
    }}>
      <Header as='h4' style={{ width: '100vw', height: '5rem', marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '17rem' }}>
          <SearchComponent />
        </div>
      </Header>
      <Grid.Row>
        <Grid.Column style={{ margin: '0 4rem' }}>
          <div style={{
            width: '7rem',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6rem',
            margin: '0.7rem 1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: 10,
            textTransform: 'uppercase'
          }}>
            {historyPath.page ? <NavLink to={`/main/${historyPath.page}`} style={{ color: 'black' }}>
              {categories.forEach(item => {
                item.items.forEach(el => {
                  if (_.find(el.elem, ['name', historyPath.page])) {
                    historyPath['icon'] = _.find(el.elem, ['name', historyPath.page]).icon
                  } else {
                    return
                  }
                })
              })}
              <Icon size='big' name={historyPath.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
              <p style={{ textAlign: 'center' }}>{historyPath.page}</p>
            </NavLink> : null}
          </div>
        </Grid.Column>
        <Grid.Column style={{ margin: '0 4rem' }}>
          <div style={{
            width: '7rem',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6rem',
            margin: '0.7rem 1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: 10,
            textTransform: 'uppercase'
          }}>{shortcut1 ? <NavLink to={`/main/${shortcut1.page}`} style={{ color: 'black' }}>
            {categories.forEach(item => {
              item.items.forEach(el => {
                if (_.find(el.elem, ['name', shortcut1.page])) {
                  shortcut1['icon'] = _.find(el.elem, ['name', shortcut1.page]).icon
                } else {
                  return
                }
              })
            })}
            <Icon size='big' name={shortcut1.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
            <p style={{ textAlign: 'center' }}>{shortcut1.page}</p>
          </NavLink> :
            <Modal
              size='mini'
              trigger={<Icon size='huge' name='plus' style={{ display: 'block', margin: '1rem auto' }} />}
              header='Add tool shortcut'
              content={<SearchComponent val='shortcut' parentCallback={callbackFunction} />}
              actions={['Cancel', { key: 'done', content: 'Add', positive: true, onClick: onApprove1 }]}
            />}
          </div>
        </Grid.Column>
        {shortcut2 ? <Grid.Column style={{ margin: '0 4rem' }}>
          <div style={{
            width: '7rem',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6rem',
            margin: '0.7rem 1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: 10,
            textTransform: 'uppercase'
          }}>{shortcut2.hasOwnProperty('page') ? <NavLink to={`/main/${shortcut2.page}`} style={{ color: 'black' }}>
            {categories.forEach(item => {
              item.items.forEach(el => {
                if (_.find(el.elem, ['name', shortcut2.page])) {
                  shortcut2['icon'] = _.find(el.elem, ['name', shortcut2.page]).icon
                } else {
                  return
                }
              })
            })}
            <Icon size='big' name={shortcut2.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
            <p style={{ textAlign: 'center' }}>{shortcut2.page}</p>
          </NavLink> :
            <Modal
              size='mini'
              trigger={<Icon size='huge' name='plus' style={{ display: 'block', margin: '1rem auto' }} />}
              header='Add tool shortcut'
              content={<SearchComponent val='shortcut' parentCallback={callbackFunction} />}
              actions={['Cancel', { key: 'done', content: 'Add', positive: true, onClick: onApprove2 }]}
            />}
          </div>
        </Grid.Column> : <Grid.Column style={{ margin: '0 4rem' }} />}
        {shortcut3 ? <Grid.Column style={{ margin: '0 4rem' }}>
          <div style={{
            width: '7rem',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6rem',
            margin: '0.7rem 1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: 10,
            textTransform: 'uppercase'
          }}>{shortcut3.hasOwnProperty('page') ? <NavLink to={`/main/${shortcut3.page}`} style={{ color: 'black' }}>
            {categories.forEach(item => {
              item.items.forEach(el => {
                if (_.find(el.elem, ['name', shortcut3.page])) {
                  shortcut3['icon'] = _.find(el.elem, ['name', shortcut3.page]).icon
                } else {
                  return
                }
              })
            })}
            <Icon size='big' name={shortcut3.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
            <p style={{ textAlign: 'center' }}>{shortcut3.page}</p>
          </NavLink> :
            <Modal
              size='mini'
              trigger={<Icon size='huge' name='plus' style={{ display: 'block', margin: '1rem auto' }} />}
              header='Add tool shortcut'
              content={<SearchComponent val='shortcut' parentCallback={callbackFunction} />}
              actions={['Cancel', { key: 'done', content: 'Add', positive: true, onClick: onApprove3 }]}
            />}
          </div>
        </Grid.Column> : <Grid.Column style={{ margin: '0 4rem' }} />}
        {shortcut4 ? <Grid.Column style={{ margin: '0 4rem' }}>
          <div style={{
            width: '7rem',
            height: '7rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '6rem',
            margin: '0.7rem 1rem',
            padding: '1rem',
            backgroundColor: 'white',
            fontSize: 10,
            textTransform: 'uppercase'
          }}>{shortcut4.hasOwnProperty('page') ? <NavLink to={`/main/${shortcut4.page}`} style={{ color: 'black' }}>
            {categories.forEach(item => {
              item.items.forEach(el => {
                if (_.find(el.elem, ['name', shortcut4.page])) {
                  shortcut4['icon'] = _.find(el.elem, ['name', shortcut4.page]).icon
                } else {
                  return
                }
              })
            })}
            <Icon size='big' name={shortcut4.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
            <p style={{ textAlign: 'center' }}>{shortcut4.page}</p>
          </NavLink> :
            <Modal
              size='mini'
              trigger={<Icon size='huge' name='plus' style={{ display: 'block', margin: '1rem auto' }} />}
              header='Add tool shortcut'
              content={<SearchComponent val='shortcut' parentCallback={callbackFunction} />}
              actions={['Cancel', { key: 'done', content: 'Add', positive: true, onClick: onApprove4 }]}
            />}
          </div>
        </Grid.Column> : <Grid.Column style={{ margin: '0 4rem' }} />}
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
                    <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>{category.title}</span>
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
                                  style={{
                                    width: '7rem',
                                    height: '7rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '6rem',
                                    margin: '0.7rem 1rem',
                                    padding: '1rem',
                                    backgroundColor: 'white',
                                    fontSize: 10,
                                    textTransform: 'uppercase'
                                  }}>
                                  <Icon size='big' name={el.icon} style={{ display: 'block', margin: '0.5rem auto' }} />
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
