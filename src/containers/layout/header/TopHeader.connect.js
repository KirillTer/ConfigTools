import { connect } from "react-redux";
import { LOGOUT_START, LOAD_LANGUAGE_START } from '../../../store/actionTypes'
import { getLoginSelector, getCurrentLanguageSelector, getDefaultLanguageSelector, getAvailableListLanguageSelector } from "../../../store/selectors";
import TopHeader from './TopHeader.view';


const mapStateToProps = (state) => {
  return {
    loginStatus: getLoginSelector(state),
    currentLang: getCurrentLanguageSelector(state),
    defaultLang: getDefaultLanguageSelector(state),
    listLang: getAvailableListLanguageSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    singOutAction: () => dispatch({
      type: LOGOUT_START
    }),
    getLanguages: (domain) => dispatch({
      type: LOAD_LANGUAGE_START,
      payload: { domain }
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
