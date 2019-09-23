import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import MainView from "./main-page/Main.connect";
import AuthView from "./auth/Auth.connect";

const Layout = () => {

  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/auth"/>)}/>
          <Route path="/main" component={MainView} />
          <Route path="/auth" component={AuthView} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </>
  );
};

export default Layout;
