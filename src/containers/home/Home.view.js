import React from "react";
// import { Grid } from 'semantic-ui-react'
// import { categories } from '../../helpers/categories'
import Jackpot from "../main-page/jackpot/Jackpot.connect";
import Games from "../main-page/games/Games.connect";
import Channels from "../main-page/channels/Channels.connect";
import Code from "../main-page/code/Code.connect";

// const Components = [Jackpot, Games, Channels, Code];

const ExercisesView = () => {
  return (
    <div style={{ marginBottom: 50 }}>
      <Jackpot />
      <Games />
      <Channels />
      <Code />    
    </div>
  );
};

export default ExercisesView;
