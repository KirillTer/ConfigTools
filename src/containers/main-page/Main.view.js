import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Home from '../home/Home.connect'
import Exercises from "../exercises/Exercises.connect";

const MainView = ({mainData, loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    {console.log('Main selector - ', mainData)}
    <Switch>
      <ProtectedRouter path={match.path + "/home"} component={Home} />
      <ProtectedRouter path={match.path + "/exercises"} component={Exercises} />
    </Switch>
    </>
  );
};

export default MainView;
