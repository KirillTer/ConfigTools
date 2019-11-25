import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon, Accordion } from "semantic-ui-react";
import { categories } from '../../helpers/categories'

const SideMenu = () => {

    const [activeItemIndex, setActiveItemIndex] = useState([]);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState([]);

    const handleItemClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeItemIndex;
        const currentIndexPosition = activeItemIndex.indexOf(index);
        if (currentIndexPosition > -1) {
            newIndex.splice(currentIndexPosition, 1);
        } else {
            newIndex.push(index);
        }
        setActiveItemIndex([...newIndex]);
    }

    const handleCategoryClick = (e, titleProps) => {
        const { index } = titleProps;
        const newIndex = activeCategoryIndex;
        const currentIndexPosition = activeCategoryIndex.indexOf(index);
        if (currentIndexPosition > -1) {
            newIndex.splice(currentIndexPosition, 1);
        } else {
            newIndex.push(index);
        }
        setActiveCategoryIndex([...newIndex]);
    }

    return (
        <Accordion style={{ marginBottom: '2rem' }}>
            <Accordion.Title
                active={activeItemIndex === 0}
                index={0}
                onClick={handleItemClick}
                style={{ marginTop: '1rem', padding: 0 }}
            >
                <Menu.Item as={Link} to='/main/Home'>
                    <Icon name='home' style={{ float: 'left', margin: '0 1rem 0 2rem' }} />
                    Home
                </Menu.Item>
            </Accordion.Title>
            {categories.map((item) => {
                return (
                    <div key={item.id}>
                        <Accordion.Title
                            active={activeItemIndex.includes(item.id)}
                            index={item.id}
                            onClick={handleItemClick}
                            style={{ padding: 0 }}
                        >
                            <Menu.Item as={Link} to={`/main/${item.shortName}`}>
                                <Icon name={item.icon} style={{ float: 'left', margin: '0 1rem 0 2rem' }} />
                                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.title}</span>
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeItemIndex.includes(item.id)} style={{ padding: 0 }}>
                            {item.items.map((category) => {
                                return (category.category ?
                                    <div key={category.id}>
                                        <Accordion.Title
                                            active={activeCategoryIndex.includes(category.id)}
                                            index={category.id}
                                            onClick={handleCategoryClick}
                                            style={{ margin: '0.5rem 0 0.5rem 4rem', padding: 0 }}
                                        >
                                            <Icon name='dropdown' />
                                            <span>{category.category}</span>
                                        </Accordion.Title>
                                        <Accordion.Content active={activeCategoryIndex.includes(category.id)} style={{ margin: '0 0 0 0', padding: 0 }}>
                                            {category.elem.map((el) => {
                                                return (
                                                    <div key={el.id}>
                                                        <Accordion.Title
                                                            index={el.id}
                                                            as={Link} to={`/main/${el.name}`}
                                                            style={{ margin: '0.5rem 0 0.5rem 5rem', padding: 0 }}
                                                        >
                                                            <Icon name={el.icon} />
                                                            <span>{el.name}</span>
                                                        </Accordion.Title>
                                                    </div>
                                                )
                                            })
                                            }
                                        </Accordion.Content>
                                    </div>
                                    :
                                    <div key={category.id}>
                                        {category.elem.map((el) => {
                                            return (
                                                <div key={el.id}>
                                                    <Accordion.Title
                                                        index={el.id}
                                                        as={Link} to={`/main/${el.name}`}
                                                        style={{ margin: '0.5rem 0 0.5rem 5rem', padding: 0 }}
                                                    >
                                                        <Icon name={el.icon} />
                                                        <span>{el.name}</span>
                                                    </Accordion.Title>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                )
                            })
                            }
                        </Accordion.Content>
                    </div>
                )
            })}
        </Accordion>
    )
}

export default SideMenu