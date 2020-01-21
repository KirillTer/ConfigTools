import {connect} from "react-redux";
import { getBingoRoomSelector } from "../../../../store/selectors";
import BingoRoomConfigView from "./BingoRoomConfig.view";


const mapStateToProps = (state) => {
  return {
    items: getBingoRoomSelector(state)
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BingoRoomConfigView);
