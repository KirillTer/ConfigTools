import React from 'react';
import { Header, Grid, Icon } from "semantic-ui-react";

const SideMenu = () => (
    <Grid.Column>
        <Grid.Row style={{ padding: "1rem 0 0 0.5rem", margin: 0 }}>
        {/* App Header */}
        <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <Header.Content>Config Tools</Header.Content>
        </Header>
        </Grid.Row>
    </Grid.Column>
)

export default SideMenu