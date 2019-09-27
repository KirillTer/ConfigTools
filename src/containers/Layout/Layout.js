import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from 'semantic-ui-react'

import TopHeader from "./Header/TopHeader.connect";
import Menu from "./Menu";
import Footer from "./Footer";
import NotFound from "../../components/NotFound";
import MainView from "../main-page/Main.connect";

const Layout = ({match}) => {
  return (
    <Grid>
      <Grid.Row  columns={2}>
        <Grid.Column width={2} style={{ background: "#4c3c4c", fontSize: "1rem" }}>
          <Menu />
        </Grid.Column>

        <Grid.Column width={14} style={{ padding: 0 }}>
          <TopHeader />
          <Switch>
            <Route path={match.path} component={MainView} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Layout;
