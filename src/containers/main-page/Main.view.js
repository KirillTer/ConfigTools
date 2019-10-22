import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

import ProtectedRouter from "../../components/ProtectedRoute";
import Home from './home/Home.connect'
import Customer from "./customer/Customer.connect";
import Marketing from "./marketing/Marketing.connect";
import Promotions from "./promotions/Promotions.connect";
import Transaction from "./transaction/Transaction.connect";
import Financial from "./financial/Financial.connect";
import Game from "./game/Games.connect";

const MainView = ({mainData, loadMain, match}) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  return (
    <>
    {console.log('Main selector - ', mainData)}
    <Switch>
      <ProtectedRouter path={match.path + "/home"} component={Home} />
      <ProtectedRouter path={match.path + "/customer"} component={Customer} />
      <ProtectedRouter path={match.path + "/marketing"} component={Marketing} />
      <ProtectedRouter path={match.path + "/promotions"} component={Promotions} />
      <ProtectedRouter path={match.path + "/transaction"} component={Transaction} />
      <ProtectedRouter path={match.path + "/financial"} component={Financial} />
      <ProtectedRouter path={match.path + "/game"} component={Game} />
    </Switch>
    </>
  );
};

export default MainView;
