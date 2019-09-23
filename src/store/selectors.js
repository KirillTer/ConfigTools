import { createSelector } from 'reselect'

const stateMainSelector = state => state.mainReducer;
export const getMainSelector = createSelector(stateMainSelector, state => state.main);

const stateAuthSelector = state => state.signinReducer;
export const getAuthSelector = createSelector(stateAuthSelector, state => state.user);

