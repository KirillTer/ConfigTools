import React from "react";
import { Grid } from 'semantic-ui-react'

const BingoRoomItem = ({item}) => {

  return (
    <Grid>
      <h3 style={{margin: '2rem'}}>{item.name + '    ' + item.availability + '    ' + item.type}</h3>
    </Grid>
  );
};

export default BingoRoomItem;
