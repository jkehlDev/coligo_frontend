/* eslint-disable no-unused-vars */
/**
 * @module AppActions 
 * @description This module provide redux actions interface for application process part
 */

// =====================================
/* MIDDLEWARE ACTIONS IMPORT */
import { EXECUTE, searchProjects } from './middleware';
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
 * @name appActionsInterface
 * @description Actions interface for application process part
 */
const actions = {
  store: {
    business: {
      searchProjects: {
        clearFields: clearFields(
          config.business.searchProjects.fields.storePath
        ),
        updateFields: updateFields(
          config.business.searchProjects.fields.storePath
        ),
      },
    },
  },
  execute: {
    business: {
      searchProjects: {
        search: execute(searchProjects),
      },
    },
  },
};
/* MODULE EXPORT */
export default actions;
