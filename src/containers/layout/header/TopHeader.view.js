import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { history } from '../../../store/configureStore'
import { categories } from '../../../helpers/categories'
import { Header, Button, Icon, Label, Dropdown } from "semantic-ui-react";
import { useTranslation } from 'react-i18next';
import SearchComponent from '../Search'

const TopHeader = withRouter(({ loginStatus, singOutAction, getLanguages, onDisplay, location, currentLang, defaultLang, listLang }) => {
    const { i18n } = useTranslation();
    const [value, setValue] = useState()
    const pathName = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const pageName = categories.find(obj => obj.title === pathName)

    useEffect(() => {
        getLanguages(window.location.hostname);
    }, [getLanguages]);

    const trigger = (
        <span>
            <Icon name='user' inverted />
        </span>
    )

    const options = [
        { key: 'user', text: 'User name', icon: 'user', value: 'user' },
        { key: 'settings', text: 'Change password', icon: 'settings', value: 'settings' },
        { key: 'en', text: 'English', icon: 'user', value: 'en' },
        { key: 'it', text: 'Italy', icon: 'user', value: 'it' },
        loginStatus ?
            { key: 'auth', text: 'Log Out', icon: 'sign out', value: 'singout' }
            :
            { key: 'auth', text: 'Log In', icon: 'sign in', value: 'singin' }
    ]

    const onDropdownChange = (e, { value }) => {
        setValue(value)
        if (value === 'en') {
            i18n.changeLanguage(value);
        } else if (value === 'it') {
            i18n.changeLanguage(value);
        } else if (value === 'singout') {
            singOutAction();
        } else if (value === 'singin') {
            history.push(`/auth/singin`)
        }
    }

    return (
        <Header size='huge' textAlign='right' style={{
            background: '#2185D0',
            padding: '0.7rem',
            position: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: '1000'
        }}>
            {console.log('HEADER', currentLang, defaultLang, listLang)}
            <div>
                <Button icon floated='left' style={{ background: '#2185D0', fontSize: '1.5rem' }} onClick={() => onDisplay()}>
                    <Icon name='bars' inverted style={{ paddingTop: '0.1rem' }} />
                </Button>
                <Header as='h2' floated='left' style={{ color: 'white', margin: '1rem 0 0 0' }}>
                    {pageName ? pageName.title : pathName}
                </Header>
            </div>
            <div>
                <div style={{ fontSize: '1rem', margin: '0 2rem 0 0', display: 'inline-block', width: '18rem' }}>
                    <SearchComponent />
                </div>
                <div style={{ display: 'inline-block' }}>
                    <Icon name='mail' inverted style={{ margin: '0 1.1rem 0 0', zIndex: '-9000' }} />
                    <Label color='red' style={{ fontSize: '0.6rem', margin: '1rem 0 0 -1.6rem', zIndex: '9000' }}>
                        12
                    </Label>
                </div>
                <Dropdown
                    trigger={trigger}
                    options={options}
                    pointing='top right'
                    icon={null}
                    style={{ margin: '0 2rem 0 0.5rem' }}
                    value={value}
                    onChange={onDropdownChange}
                />
            </div>
        </Header>
    )
})

export default TopHeader