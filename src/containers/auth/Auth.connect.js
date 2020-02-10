import { connect } from "react-redux";
import { LOGIN_START, SINGUP_START } from '../../store/actionTypes'
import { getUserSelector, getLoginErrorSelector } from "../../store/selectors";
import AuthView from "./Auth.view";


const mapStateToProps = (state) => {
  return {
    user: getUserSelector(state),
    error: getLoginErrorSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    singInAction: (email, password, domain) => dispatch({
      type: LOGIN_START,
      payload: { email, password, domain }
    }),
    singUpAction: (email, password, domain) => dispatch({
      type: SINGUP_START,
      payload: { email, password, domain }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthView);
