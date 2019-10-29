import React from 'react';
import { withRouter } from "react-router-dom";
import { categories } from '../../../helpers/categories'
import { Header, Button, Icon, Search, Label,Dropdown } from "semantic-ui-react";

const TopHeader = withRouter(({loginStatus, singOutAction, onDisplay, location}) => {

    const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const pageName = categories.find(obj => obj.shortName === pathName)

    const trigger = (
        <span>
          <Icon name='user' inverted/>
        </span>
    )
    
    const options = [
        { key: 'user', text: 'user name', icon: 'user' },
        { key: 'settings', text: 'Change password', icon: 'settings' },
        loginStatus ?
        { key: 'auth', text: 'Log Out', icon: 'sign out'}
        :
        { key: 'auth', text: 'Log In', icon: 'sign in'}
            // <Button inverted onClick={() => onLogout()}>Log out</Button>
            // :
            // <Button inverted as={RouterLink} to='/auth'>Log in</Button>
            
    ]

    // const onLogout = () => {
    //     singOutAction();
    // }

    return (
        <Header size='huge' textAlign='right' style={{  background: '#2185D0',
                                                        padding: '0.7rem',
                                                        position: 'fixed',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        top: '0',
                                                        left: '0',
                                                        width: '100%',
                                                        zIndex: '1000' }}>
            <div>
            <Button icon floated='left' style={{ background: '#2185D0', fontSize: '1.5rem'}} onClick={() => onDisplay()}>
                <Icon name='bars' inverted style={{ paddingTop: '0.1rem'}}/>
            </Button>
            <Header as='h2' floated='left' style={{ color: 'white', margin: '1rem 0 0 0' }}>
                {pageName ? pageName.longName : 'Home'}
            </Header>
            </div>
            <div>
            <div style={{ fontSize: '1rem', margin: '0 2rem 0 0', display: 'inline-block'}}>
                <Search
                    category
                    loading={false}
                    placeholder='Search Tools'
                />
            </div>
            <div style={{ display: 'inline-block'}}>
            <Icon name='mail' inverted style={{ margin: '0 1.1rem 0 0', zIndex: '-9000' }}/>
            <Label color='red' style={{ fontSize: '0.6rem', margin: '1rem 0 0 -1.6rem', zIndex: '9000'}}>
                12
            </Label>
            </div>
            <Dropdown
                trigger={trigger}
                options={options}
                pointing='top right'
                icon={null}
                style={{ margin: '0 2rem 0 0.5rem'}}
            />
            </div>
        </Header>
    )
})

export default TopHeader