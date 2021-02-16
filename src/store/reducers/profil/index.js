/* State actions define */
import actions from './actions';

/* Reducer intiale storage state */
const initialState = {
  /* Sub states initial value */

  /* Global state intial value */
  init: {},
};

/**
 * @function reducer Profil reducer implemantion
 * @param {*} oldState
 * @param {*} action {type, *}
 */
const reducer = (oldState = initialState.init, action = {}) => {
  switch (action.type) {
    default:
      return { ...oldState };
  }
};

export default reducer;
