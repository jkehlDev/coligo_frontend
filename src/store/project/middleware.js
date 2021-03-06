/**
 * @module ProjectMiddleware
 * @description This module provide project actions for redux middleware engine
 */
/* ACTIONS Import */
/* ACTION KEY */
export const EXECUTE = 'PROJECT_EXECUTE';
// =====================================
// == MIDDLEWARES ACTIONS PART
//
const middlewareAct = {};
//
// =====================================
/* REDUX MIDDLEWARE */
const middleware = (store) => (next) => (action) => {
  if (action.type === EXECUTE) {
    middlewareAct[action.refAction](store, next, action);
  } else {
    next(action);
  }
};
/* Middleware export */
export default middleware;
