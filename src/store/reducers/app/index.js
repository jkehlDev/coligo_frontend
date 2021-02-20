/* State actions define */
import actionTypes from './actions';

/* State configuration */
import config from './config.json';


/* Reducer intiale storage state */
const initialState = {
  ...config,
};

/**
 * @function reducer App reducer implemantion
 * @param {*} oldState
 * @param {*} action {type, *}
 */
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.business.searchProjects.CLEAR_FIELDS:
      return {
        ...oldState,
        business: {
          ...oldState.business,
          searchProjects: { ...initialState.business.searchProjects },
        },
      };
    case actionTypes.business.searchProjects.UPDATE_FIELDS:
      return {
        ...oldState,
        business: {
          ...oldState.business,
          searchProjects: {
            ...oldState.business.searchProjects,
            ...action.payload,
          },
        },
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
