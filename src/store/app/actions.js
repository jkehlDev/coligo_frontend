/* eslint-disable no-unused-vars */
/**
 * @module AppActions
 * @description This module provide redux actions interface for application process part
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
const execute = (refAction) => (payload) => ({
  type: EXECUTE,
  refAction,
  payload,
});
// =====================================

/**
 * @name appActionsInterface
 * @description Actions interface for application process part
 */
const actions = {
  store: {
    setLoaderOn: () =>
      updateFields(config.display.storePath)({ loading: true }),
    setLoaderOff: () =>
      updateFields(config.display.storePath)({ loading: false }),
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
        search: execute('searchProjects'),
      },
      searchProjectsPagination: {
        loadPage: execute('searchProjectsPaginationLoadPage'),
      },
    },
  },
};
/* MODULE EXPORT */
export default actions;
