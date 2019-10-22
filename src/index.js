import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
// import "./configFireBase";

import Layout from "./containers/Layout/Layout";
import AuthView from "./containers/auth/Auth.connect";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/auth"/>)}/>
        <Route path="/main" component={Layout} />
        <Route path="/auth" component={AuthView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
