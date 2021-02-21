/**
 * @module AppMiddleware 
 * @description This module provide application actions for redux middleware engine
 */
/* ACTION KEY */
export const EXECUTE = 'APP_EXECUTE';
// =====================================
// == ACTIONS EXPORTS PART
//
/**
 * @function searchProjects Search project action
 * @param {*} store 
 * @param {*} next 
 * @param {*} action 
 */
export const searchProjects = (store, next, action) => {};
//
// =====================================
/* REDUX MIDDLEWARE */
const middleware = (store) => (next) => (action) => {
  if (action.type === EXECUTE) {
    action.execute(store, next, action);
  } else {
    next(action);
  }
};
/* Middleware export */
export default middleware;
