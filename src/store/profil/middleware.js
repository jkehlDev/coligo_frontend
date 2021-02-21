/**
 * @module ProfilMiddleware 
 * @description This module provide profil actions for redux middleware engine
 */
/* ACTION KEY */
export const EXECUTE = 'PROFIL_EXECUTE';
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
