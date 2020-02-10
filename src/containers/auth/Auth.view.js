import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import SingIn from './Login.form'
import SingUp from './SingUp.form'
import NotFound from "../../components/NotFound";

const AuthView = ({ user, match, singInAction, singUpAction, error }) => {

  const handleSingIn = ({ email, password }) => {
    console.log('Handle Sing IN     Email - ', email, '   Password - ', password);
    singInAction(email, password);
  }

  const handleSingUp = ({ email, password }) => {
    console.log('Handle Sing UP     Email - ', email, '   Password - ', password);
    singUpAction(email, password);
  }

  return (
    <>
      <Switch>
        <Route path={match.path + "/singin"} render={() => (<SingIn onSubmit={handleSingIn} errorLogin={error} />)} />
        <Route path={match.path + "/singup"} render={() => (<SingUp onSubmit={handleSingUp} />)} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AuthView;