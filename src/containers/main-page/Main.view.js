import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Home from './home/Home.connect'
import TopLevel from "./topLevelPage/TopLevel.connect";
import NotFound from "../../components/NotFound";
import Summary from "./lowLevelPage/summary/Summary.connect";
import AssignPrivilege from "./lowLevelPage/assignPrivilege/AssignPrivilege.connect";
import AccessLevels from "./lowLevelPage/accessLevels/AccessLevels.connect";
import AccountStatus from "./lowLevelPage/accountStatus/AccountStatus.connect";
import ForgetStatus from "./lowLevelPage/forgetStatus/ForgetStatus.connect";

const MainView = ({mainData, loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    {console.log('Main selector - ', mainData)}
    <Switch>
      <ProtectedRouter path={match.path + "/Home"} component={Home} />
      <ProtectedRouter path={match.path + "/customer"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/marketing"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/promotions"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/transaction"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/financial"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/game"} component={TopLevel} />

      <ProtectedRouter path={match.path + "/Summary"} component={Summary} />
      <ProtectedRouter path={match.path + "/Assign Privilege"} component={AssignPrivilege} />
      <ProtectedRouter path={match.path + "/Access Levels"} component={AccessLevels} />
      <ProtectedRouter path={match.path + "/Forget Status"} component={ForgetStatus} />

      <Route component={NotFound} />
    </Switch>
    </>
  );
};

export default MainView;
