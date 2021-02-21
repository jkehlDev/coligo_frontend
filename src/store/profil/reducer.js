/**
 * @module ProfilReducer
 * @description Profil store reducer
 */
// =====================================
/* Global reducer action and configuration import */
import { resolveClear, resolveUpdate } from 'store/combineReducers';
import config from './config.json';
// =====================================
/* ACTION TYPE CONFIGURATION */
export const CLEAR_ALL = 'PROFIL_CLEAR_ALL';
export const CLEAR_STATE = 'PROFIL_CLEAR_STATE';
export const UPDATE_STATE = 'PROFIL_UPDATE_STATE';
// =====================================
/* Initiale storage state */
const initialState = {
  ...config,
};
/**
 * @function reducer Profil reducer implemantion
 * @param {*} oldState
 * @param {*} action {type, *}
 */
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        ...initialState,
      };
    case CLEAR_STATE:
      return {
        ...resolveClear(action.path, oldState, initialState),
      };
    case UPDATE_STATE:
      return {
        ...resolveUpdate(action, oldState),
      };
    default:
      return { ...oldState };
  }
};

/* Reducer export */
export default reducer;
