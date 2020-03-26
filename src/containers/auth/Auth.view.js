import React from "react";
import { Route, Switch } from "react-router-dom";

import SingIn from './Login.form'
import SingUp from './SingUp.form'
import ChangePass from './ChangePass.form'
import NotFound from "../../components/NotFound";

const AuthView = ({ user, match, singInAction, singUpAction, changePassAction, error }) => {

  const handleSingIn = ({ email, password }) => {
    singInAction(email, password, window.location.hostname);
  }

  const handleSingUp = ({ email, password }) => {
    singUpAction(email, password, window.location.hostname);
  }

  const handleChangePass = ({ password, confirmPass }) => {
    console.log('Auth view', password, confirmPass, user)
    changePassAction(user.email, user.password, password, confirmPass, window.location.hostname)
  }

  return (
    <>
      <Switch>
        <Route path={match.path + "/singin"} render={() => (<SingIn onSubmit={handleSingIn} errorLogin={error} />)} />
        <Route path={match.path + "/singup"} render={() => (<SingUp onSubmit={handleSingUp} />)} />
        <Route path={match.path + "/changepass"} render={() => (<ChangePass onSubmit={handleChangePass} />)} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default AuthView;