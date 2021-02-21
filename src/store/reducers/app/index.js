/* State configuration */
import { resolveClear, resolveUpdate } from 'store/reducers';
import config from './config.json';

/* Reducer intiale storage state */
const initialState = {
  ...config,
};

export const CLEAR_ALL = 'APP_CLEAR_ALL';
export const CLEAR_STATE = 'APP_CLEAR_STATE';
export const UPDATE_STATE = 'APP_UPDATE_STATE';

/**
 * @function reducer App reducer implemantion
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

export default reducer;
