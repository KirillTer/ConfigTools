import {connect} from "react-redux";
import { CREATE_BINGO_ROOM_START } from '../../../../../store/actionTypes'
import NewBingoRoomView from "./NewBingoRoom.view";


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    createAction: (newBingoRoom) => dispatch({
      type: CREATE_BINGO_ROOM_START,
      payload: newBingoRoom
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBingoRoomView);
