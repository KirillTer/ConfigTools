import {connect} from "react-redux";
import { SHORTCUT_ADD, SHORTCUT_UPDATE } from '../../../store/actionTypes'
import { getHistorySelector, getShortcutSelector } from "../../../store/selectors";
import ExercisesView from "./Home.view";


const mapStateToProps = (state) => {
  return {
    history: getHistorySelector(state),
    shortcut: getShortcutSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateHistoryAction: (page) => dispatch({
      type: SHORTCUT_UPDATE,
      payload: {page}
    }),
    addShortcutAction: (page) => dispatch({
      type: SHORTCUT_ADD,
      payload: {page}
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesView);
