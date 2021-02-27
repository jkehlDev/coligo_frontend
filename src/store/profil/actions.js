/* eslint-disable no-unused-vars */
/**
 * @module ProfilActions
 * @description This module provide redux actions interface for profil process part
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
const execute = (callable) => (payload) => ({
  type: EXECUTE,
  execute: callable,
  payload,
});
// =====================================

/**
 * @name profilActionsInterface
 * @description Actions interface for profil process part
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
