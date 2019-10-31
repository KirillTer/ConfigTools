import {connect} from "react-redux";
import { LOGOUT_START } from '../../../store/actionTypes'
import { getLoginSelector } from "../../../store/selectors";
import TopHeader from './TopHeader.view';


const mapStateToProps = (state) => {
  return {
    loginStatus: getLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    singOutAction: () => dispatch({
      type: LOGOUT_START
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
