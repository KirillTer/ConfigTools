import React from 'react';
import { Menu, Icon } from "semantic-ui-react";

const SideMenu = () => (
    <>
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name="code" />
            Code
        </Menu.Item>
    </>
)

export default SideMenu