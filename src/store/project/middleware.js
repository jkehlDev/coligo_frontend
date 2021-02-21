/**
 * @module ProjectMiddleware 
 * @description This module provide project actions for redux middleware engine
 */
/* ACTION KEY */
export const EXECUTE = 'PROJECT_EXECUTE';
// =====================================
// == ACTIONS EXPORTS

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
