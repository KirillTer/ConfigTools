import { connect } from "react-redux";
import { SHORTCUT1_ADD, SHORTCUT2_ADD, SHORTCUT3_ADD, SHORTCUT4_ADD } from '../../../store/actionTypes'
import { getHistorySelector, getShortcutSelector1, getShortcutSelector2, getShortcutSelector3, getShortcutSelector4 } from "../../../store/selectors";
import ExercisesView from "./Home.view";


const mapStateToProps = (state) => {
  return {
    historyPath: getHistorySelector(state),
    shortcut1: getShortcutSelector1(state),
    shortcut2: getShortcutSelector2(state),
    shortcut3: getShortcutSelector3(state),
    shortcut4: getShortcutSelector4(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShortcutAction1: (page) => dispatch({
      type: SHORTCUT1_ADD,
      payload: { page }
    }),
    addShortcutAction2: (page) => dispatch({
      type: SHORTCUT2_ADD,
      payload: { page }
    }),
    addShortcutAction3: (page) => dispatch({
      type: SHORTCUT3_ADD,
      payload: { page }
    }),
    addShortcutAction4: (page) => dispatch({
      type: SHORTCUT4_ADD,
      payload: { page }
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesView);
