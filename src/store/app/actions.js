/* eslint-disable no-unused-vars */
/**
 * @module AppActions
 * @description This module provide redux actions interface for application process part
 */

// =====================================
/* MIDDLEWARE ACTIONS IMPORT */
import { EXECUTE, searchProjects, loadPage } from './middleware';
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
const execute = (callable) => (payload) => ({
  type: EXECUTE,
  execute: callable,
  payload,
});
// =====================================

/**
 * @name appActionsInterface
 * @description Actions interface for application process part
 */
const actions = {
  store: {
    setLoaderOn: () => updateFields('')({ loading: true }),
    setLoaderOff: () => updateFields('')({ loading: false }),
    business: {
      searchProjects: {
        clearFields: clearFields(
          config.business.searchProjects.fields.storePath
        ),
        updateFields: updateFields(
          config.business.searchProjects.fields.storePath
        ),
      },
      searchProjectsPagination: {
        clearFields: clearFields(
          config.business.searchProjectsPagination.fields.storePath
        ),
        updateFields: updateFields(
          config.business.searchProjectsPagination.fields.storePath
        ),
      },
    },
  },
  execute: {
    business: {
      searchProjects: {
        search: execute(searchProjects),
      },
      searchProjectsPagination: {
        loadPage: execute(loadPage),
      },
    },
  },
};
/* MODULE EXPORT */
export default actions;
