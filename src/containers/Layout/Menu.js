import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
import { categories } from '../../helpers/categories'

const SideMenu = () => (
    <>
        <Menu.Item as={Link} to='/main/home'>
            <Icon name='home' />
            Home
        </Menu.Item>
        {categories.map(({id, shortName, icon}) => {
            return (
                <Menu.Item as={Link} to={`/main/${shortName}`} key={id}>
                    <Icon name={icon} />
                    {shortName}
                </Menu.Item>
            )
        })}
    </>
)

export default SideMenu