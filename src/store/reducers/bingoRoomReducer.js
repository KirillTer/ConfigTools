import {FEATCH_BINGO_ROOM_SUCCESS, CREATE_BINGO_ROOM_SUCCESS, EDIT_BINGO_ROOM_SUCCESS, DELETE_BINGO_ROOM_SUCCESS} from '../actionTypes'

const initialState = {
  bingoRoom: [
    {
      name:"111",
      availability:"standalone",
      type:"90",
      balance:"noRestrictions",
      winningType:"cash",
    }
  ]
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FEATCH_BINGO_ROOM_SUCCESS:
      console.log('FEATCH_BINGO_ROOM_SUCCESS')
      state.bingoRoom = payload;
      return;
    case CREATE_BINGO_ROOM_SUCCESS:
      console.log('CREATE_BINGO_ROOM_SUCCESS')
      state.bingoRoom = [...state.bingoRoom, payload];
      return;
    case EDIT_BINGO_ROOM_SUCCESS:
      console.log('EDIT_BINGO_ROOM_SUCCESS')
      state.bingoRoom = payload;
      return;
    case DELETE_BINGO_ROOM_SUCCESS:
      console.log('DELETE_BINGO_ROOM_SUCCESS')
      state.bingoRoom = payload;
      return;
    default: return state
  }
}
