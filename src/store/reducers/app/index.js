/* State actions define */
import actions from "./actions";

/* State configuration */
import config from "./config.json";

/* Reducer intiale storage state */
const initialState = {
  ...JSON.parse(config),
};

/**
 * @function reducer App reducer implemantion
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
