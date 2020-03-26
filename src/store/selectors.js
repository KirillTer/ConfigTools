import { createSelector } from 'reselect'

const stateMainSelector = state => state.curriedMainReducer;
export const getMainSelector = createSelector(stateMainSelector, state => state.main);
export const getCurrentLanguageSelector = createSelector(stateMainSelector, state => state.current_language);
export const getDefaultLanguageSelector = createSelector(stateMainSelector, state => state.default_language);
export const getAvailableListLanguageSelector = createSelector(stateMainSelector, state => state.available_languages_list);

const stateAuthSelector = state => state.curriedAuthReducer;
export const getUserSelector = createSelector(stateAuthSelector, state => state.user);
export const getLoginSelector = createSelector(stateAuthSelector, state => state.logined);
export const getLoginErrorSelector = createSelector(stateAuthSelector, state => state.error);

const stateShortcutSelector = state => state.curriedShortcutReducer;
export const getHistorySelector = createSelector(stateShortcutSelector, state => state.historyState);
export const getShortcutSelector1 = createSelector(stateShortcutSelector, state => state.shortcut1);
export const getShortcutSelector2 = createSelector(stateShortcutSelector, state => state.shortcut2);
export const getShortcutSelector3 = createSelector(stateShortcutSelector, state => state.shortcut3);
export const getShortcutSelector4 = createSelector(stateShortcutSelector, state => state.shortcut4);

const stateBingoRoomSelector = state => state.curriedBingoRoomReducer;
export const getBingoRoomSelector = createSelector(stateBingoRoomSelector, state => state.bingoRoom);
