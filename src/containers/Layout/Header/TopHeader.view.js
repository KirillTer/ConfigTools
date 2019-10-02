import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Header, Button, Icon } from "semantic-ui-react";

const TopHeader = ({loginStatus, singOutAction, onDisplay}) => {
    const onLogout = () => {
        singOutAction();
    }

    return (
        <Header size='huge' textAlign='right' style={{ background: '#1B1C1D', padding: '1rem'}}>
            <Button icon color='black' floated='left' style={{ fontSize: '1.5rem'}} onClick={() => onDisplay()}>
                <Icon name='bars' style={{ paddingTop: '1rem'}}/>
            </Button>
            { loginStatus ?
            <Button inverted onClick={() => onLogout()}>Log out</Button>
            :
            <Button inverted as={RouterLink} to='/auth'>Log in</Button>
            }
        </Header>
    )
}

export default TopHeader