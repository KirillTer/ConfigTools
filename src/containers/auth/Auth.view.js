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
      <h2>Auth page</h2>
      <NavLink to={match.path + "/singin"}>Sing In</NavLink>
      <br />
      <NavLink to={match.path + "/singup"}>Sing Up</NavLink>
      <Switch>
        <Route path={match.path + "/singin"} render={() => (<SingIn onSubmit={handleSingIn} errorLogin={error} />)} />
        <Route path={match.path + "/singup"} render={() => (<SingUp onSubmit={handleSingUp} />)} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AuthView;