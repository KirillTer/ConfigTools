import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'

import TopHeader from "./Header/TopHeader.connect";
import SideMenu from "./Menu";
// import Footer from "./Footer";
import NotFound from "../../components/NotFound";
import MainView from "../main-page/Main.connect";

const Layout = ({match}) => {

  const [visible, setVisible] = useState(false);

  const handleDisplay = () => {
    console.log('Header clicked - ', !visible);
    setVisible(!visible)
  }

  return (
    <Grid>
      <Grid.Column width={16} style={{ paddingBottom: '5rem'}}>
        <TopHeader onDisplay={handleDisplay}/>
      </Grid.Column>

        <Sidebar.Pushable as={Segment} style={{ minHeight: 'calc(100vh - 5rem)', width: '100%', margin: '0', border: 'none'}}>
          <Sidebar
            as={Menu}
            animation='push'
            // icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
          >
            <SideMenu />
          </Sidebar>

          <Sidebar.Pusher style={{ width: '100%' }}>
            <Segment basic>
              <Switch>
                <Route path={match.path} component={MainView} />
                <Route component={NotFound} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      {/* <Grid.Column width={16} style={{ padding: '0 1rem 0 1rem'}}>
        <Footer />
      </Grid.Column> */}
    </Grid>
  );
};

export default Layout;
