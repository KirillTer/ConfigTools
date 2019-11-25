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
import BetHistory from "./lowLevelPage/betHistory/BetHistory.connect";
import Promotions from "./lowLevelPage/promotions/Promotions.connect";
import Bonuses from "./lowLevelPage/bonuses/Bonuses.connect";
import BonusOptOut from "./lowLevelPage/bonusOptOut/BonusOptOut.connect";
import ListAdjustments from "./lowLevelPage/listAdjustments/ListAdjustments.connect";
import PromotionHistory from "./lowLevelPage/promotionHistory/PromotionHistory.connect";
import LoyaltyLevels from "./lowLevelPage/loyaltyLevels/LoyaltyLevels.connect";
import Adjustment from "./lowLevelPage/adjustment/Adjustment.connect";
import CreditChatGame from "./lowLevelPage/creditChatGame/CreditChatGame.connect";
import Statement from "./lowLevelPage/statement/Statement.connect";
import EditChatName from "./lowLevelPage/editChatName/EditChatName.connect";
import Syndicates from "./lowLevelPage/syndicates/Syndicates.connect";
import ChatStatus from "./lowLevelPage/chatStatus/ChatStatus.connect";
import StuckGames from "./lowLevelPage/stuckGames/StuckGames.connect";
import IMSGameplay from "./lowLevelPage/iMSGameplay/IMSGameplay.connect";

const MainView = ({ location, match, loadMain, updateHistoryAction }) => {

  useEffect(() => {
    loadMain();
  }, [loadMain]);

  useEffect(() => {
    if (location.pathname !== "/main/Home") {
      updateHistoryAction(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    }
  });

  return (
    <Switch>
      <ProtectedRouter path={match.path + "/Home"} component={Home} />
      <ProtectedRouter path={match.path + "/customer"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/marketing"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/promotion"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/transaction"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/financial"} component={TopLevel} />
      <ProtectedRouter path={match.path + "/game"} component={TopLevel} />

      <ProtectedRouter path={match.path + "/Summary"} component={Summary} />
      <ProtectedRouter path={match.path + "/Assign Privilege"} component={AssignPrivilege} />
      <ProtectedRouter path={match.path + "/Access Levels"} component={AccessLevels} />
      <ProtectedRouter path={match.path + "/Account Status"} component={AccountStatus} />
      <ProtectedRouter path={match.path + "/Forget Status"} component={ForgetStatus} />
      <ProtectedRouter path={match.path + "/Bet History"} component={BetHistory} />
      <ProtectedRouter path={match.path + "/Promotions"} component={Promotions} />
      <ProtectedRouter path={match.path + "/Bonuses"} component={Bonuses} />
      <ProtectedRouter path={match.path + "/Bonus Opt Out"} component={BonusOptOut} />
      <ProtectedRouter path={match.path + "/List Adjustments"} component={ListAdjustments} />
      <ProtectedRouter path={match.path + "/Promotion History"} component={PromotionHistory} />
      <ProtectedRouter path={match.path + "/Loyalty Levels"} component={LoyaltyLevels} />
      <ProtectedRouter path={match.path + "/Adjustment"} component={Adjustment} />
      <ProtectedRouter path={match.path + "/Credit Chat Game"} component={CreditChatGame} />
      <ProtectedRouter path={match.path + "/Statement"} component={Statement} />
      <ProtectedRouter path={match.path + "/Edit Chat Name"} component={EditChatName} />
      <ProtectedRouter path={match.path + "/Syndicates"} component={Syndicates} />
      <ProtectedRouter path={match.path + "/Chat Status"} component={ChatStatus} />
      <ProtectedRouter path={match.path + "/Stuck Games"} component={StuckGames} />
      <ProtectedRouter path={match.path + "/IMS Gameplay"} component={IMSGameplay} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default MainView;
