import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Home from '../home/Home.connect'
import Jackpot from "./jackpot/Jackpot.connect";
import Games from "./games/Games.connect";
import Channels from "./channels/Channels.connect";
import Code from "./code/Code.connect";

const MainView = ({mainData, loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    {console.log('Main selector - ', mainData)}
    <Switch>
      <ProtectedRouter path={match.path + "/home"} component={Home} />
      <ProtectedRouter path={match.path + "/jackpot"} component={Jackpot} />
      <ProtectedRouter path={match.path + "/games"} component={Games} />
      <ProtectedRouter path={match.path + "/channels"} component={Channels} />
      <ProtectedRouter path={match.path + "/code"} component={Code} />
    </Switch>
    </>
  );
};

export default MainView;
