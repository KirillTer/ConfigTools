import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

const TopHeader = ({loginStatus, singOutAction}) => {
    const onLogout = () => {
        singOutAction();
    }

    return (
        <Header size='huge' textAlign='right' style={{ background: "#4c3c4c", padding: '1rem'}}>
            { loginStatus ?
            <Button inverted onClick={() => onLogout()}>Log out</Button>
            :
            <Button inverted as={RouterLink} to='/auth'>Log in</Button>
            }
        </Header>
    )
}

export default TopHeader