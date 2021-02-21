/* eslint-disable no-unused-vars */
/**
 * @module ProjectActions
 * @description This module provide redux actions interface for project process part
 */

// =====================================
/* MIDDLEWARE ACTIONS IMPORT */
import { EXECUTE } from './middleware';
/* STORE CONFIGURATION IMPORT */
import config from './config.json';
/* STATE ACTIONS TYPES */
import { CLEAR_STATE, UPDATE_STATE } from './reducer';
/* CLEARING STATE ACTION */
const clearFields = (path) => () => ({ type: CLEAR_STATE, path });
/* UPDATING STATE ACTION */
const updateFields = (path) => (payload) => ({
  type: UPDATE_STATE,
  path,
  payload,
});
/* EXECUTE MIDDLEWARE ACTION */
const execute = (callable) => () => ({ type: EXECUTE, execute: callable });
// =====================================


/**
 * @name projectActionsInterface
 * @description Actions interface for project process part
 */
const actions = {
  store: {
    business: {},
  },
  execute: {
    business: {},
  },
};
/* MODULE EXPORT */
export default actions;
