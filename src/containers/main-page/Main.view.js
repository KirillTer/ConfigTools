import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Exercises from '../exercises/Exercises.connect'
// import Auth from '../auth/Auth.connect'

const MainView = ({mainData, loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    {console.log('Main selector - ', mainData)}
    <Switch>
      <ProtectedRouter path={match.path + "/exercises"} component={Exercises} />
      {/* <Route path={match.path + "/auth"} component={Auth} /> */}
    </Switch>
    </>
  );
};

export default MainView;
