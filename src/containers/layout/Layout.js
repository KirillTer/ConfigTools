import React, { useState, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Menu, Segment, Sidebar } from 'semantic-ui-react'

import TopHeader from "./header/TopHeader.connect";
import SideMenu from "./Menu";
// import Footer from "./Footer";
import MainView from "../main-page/Main.connect";

const Layout = ({match}) => {

  const [visible, setVisible] = useState(false);

  const handleDisplay = () => {
    setVisible(!visible)
  }

  return (
    <Grid>
      <Suspense fallback={(<h3>Loading</h3>)} >
        <Grid.Column width={16} style={{ paddingBottom: '5rem'}}>
          <TopHeader onDisplay={handleDisplay}/>
        </Grid.Column>

          <Sidebar.Pushable as={Segment} style={{ minHeight: 'calc(100vh - 5rem)', width: '100%', margin: '0', border: 'none'}}>
            <Sidebar
              as={Menu}
              animation='push'
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
                  </Switch>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>

        {/* <Grid.Column width={16} style={{ padding: '0 1rem 0 1rem'}}>
          <Footer />
        </Grid.Column> */}
      </Suspense>
    </Grid>
  );
};

export default Layout;
