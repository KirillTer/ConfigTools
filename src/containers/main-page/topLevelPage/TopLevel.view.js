import React from "react";
import { Grid, Icon } from 'semantic-ui-react'
import { categories } from '../../../helpers/categories'

const TopLevelView = ({ location }) => {

  const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  const pageName = categories.find(obj => obj.title === pathName)

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
          <Icon size='large' style={{ verticalAlign: 'baseline', margin: '1rem 0.5rem' }} name={pageName.icon} />
          <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>{pageName.title}</span>
          {pageName.items.map((item) => {
            return (
              <div key={item.id}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '1rem 1rem' }}>{item.category ? item.category : null}</p>
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
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TopLevelView;
