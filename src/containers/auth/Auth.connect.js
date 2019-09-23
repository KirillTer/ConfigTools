import {connect} from "react-redux";
import { SINGIN_START, SINGUP_START } from '../../store/actionTypes'
import { getAuthSelector } from "../../store/selectors";
import AuthView from "./Auth.view";


const mapStateToProps = (state) => {
  return {
    auth: getAuthSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    singInAction: (email, password) => dispatch({
      type: SINGIN_START,
      payload: {email, password}
    }),
    singUpAction: (email, password) => dispatch({
      type: SINGUP_START,
      payload: {email, password}
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
