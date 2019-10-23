import React, { useState }  from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon, Accordion } from "semantic-ui-react";
import { categories } from '../../helpers/categories'

const SideMenu = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeElementIndex, setActiveElementIndex] = useState(0);

    const handleItemClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeItemIndex === index ? -1 : index
        setActiveItemIndex(newIndex )
    }

    const handleCategoryClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeCategoryIndex === index ? -1 : index
        setActiveCategoryIndex(newIndex )
    }

    const handleElementClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeElementIndex === index ? -1 : index
        setActiveElementIndex(newIndex )
    }

    return (
        <Accordion>
            <Accordion.Title
            active={activeItemIndex === 0}
            index={0}
            onClick={handleItemClick}
            style={{ marginTop: '1rem', padding: 0}}
            >
                <Menu.Item as={Link} to='/main/home'>
                    <Icon name='home' style={{float: 'left', margin: '0 1rem 0 2rem'}}/>
                    Home
                </Menu.Item>
            </Accordion.Title>
        {categories.map((item) => {
            return (
                <>
                    <Accordion.Title
                    active={activeItemIndex === item.id}
                    index={item.id}
                    onClick={handleItemClick}
                    style={{padding: 0}}
                    >
                    <Menu.Item as={Link} to={`/main/${item.shortName}`} key={item.id}>
                        <Icon name={item.icon} style={{float: 'left', margin: '0 1rem 0 2rem'}}/>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.longName}</span>
                    </Menu.Item>
                    </Accordion.Title>
                    <Accordion.Content active={activeItemIndex === item.id} style={{padding: 0}}>
                    {item.items.map((category) => {
                        return ( category.category ?
                            <div key={category.id}>
                            <Accordion.Title
                                active={activeCategoryIndex === category.id}
                                index={category.id}
                                onClick={handleCategoryClick}
                                style={{margin: '0.5rem 0 0.5rem 4rem', padding: 0}}
                            >
                                <Icon name='dropdown' />
                                <span>{category.category}</span>
                            </Accordion.Title>
                            <Accordion.Content active={activeCategoryIndex === category.id} style={{margin: '0 0 0 0', padding: 0}}>
                                {category.elem.map((el) => {
                                    return (
                                        <div key={el.id}>
                                        <Accordion.Title
                                            active={activeElementIndex === el.id}
                                            index={el.id}
                                            onClick={handleElementClick}
                                            style={{margin: '0.5rem 0 0.5rem 5rem', padding: 0}}
                                        >
                                            <Icon name={el.icon} />
                                            <span>{el.name}</span>
                                        </Accordion.Title>
                                        </div>
                                    )})
                                }
                            </Accordion.Content>
                            </div>
                            :
                            <div>
                            {category.elem.map((el) => {
                                return (
                                    <div key={el.id}>
                                    <Accordion.Title
                                        active={activeElementIndex === el.id}
                                        index={el.id}
                                        onClick={handleElementClick}
                                        style={{margin: '0.5rem 0 0.5rem 5rem', padding: 0}}
                                    >
                                        <Icon name={el.icon} />
                                        <span>{el.name}</span>
                                    </Accordion.Title>
                                    </div>
                                )})
                            }
                            </div>
                        )})
                    }
                    </Accordion.Content>
                </>            
            )
        })}
    </Accordion>
    )
}

export default SideMenu