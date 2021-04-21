/**
 * @module ProfilMiddleware 
 * @description This module provide profil actions for redux middleware engine
 */
/* ACTION KEY */
export const EXECUTE = 'PROFIL_EXECUTE';
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
