/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from 'store/reducers/app';
import profil from 'store/reducers/profil';
import project from 'store/reducers/project';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app,
    profil,
    project,
  });

export default createRootReducer;

/**
 * @function resolveClear Resolve clear action on specific state in specific store
 * @param {*} path Target state path in target store
 * @param {*} oldState OldState for the target store
 * @param {*} initialState Initial state for the target store
 * @return Target store with cleared target state
 */
export const resolveClear = (path, oldState, initialState) => {
  function resolve(pathArr, index, parentObj, initialState) {
    if (pathArr.length > index + 1) {
      return {
        ...parentObj,
        [pathArr[index + 1]]: {
          ...resolve(
            pathArr,
            index + 1,
            parentObj[pathArr[index + 1]],
            initialState[pathArr[index + 1]]
          ),
        },
      };
    }
    return {
      ...initialState,
    };
  }
  return resolve(path.split('.'), -1, oldState, initialState);
};

/**
 * @function resolveUpdate Resolve update action on specific state in specific store
 * @param {*} action Update action to perform
 * @param {*} oldState Old state for target store
 * @returns Target store with updated target state
 */
export const resolveUpdate = (action, oldState) => {
  function resolve(pathArr, index, parentObj, payload) {
    if (pathArr.length > index + 1) {
      return {
        ...parentObj,
        [pathArr[index + 1]]: {
          ...resolve(
            pathArr,
            index + 1,
            parentObj[pathArr[index + 1]],
            payload
          ),
        },
      };
    }
    return {
      ...parentObj,
      ...payload,
    };
  }
  return resolve(action.path.split('.'), -1, oldState, action.payload);
};
