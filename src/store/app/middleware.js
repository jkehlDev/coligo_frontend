/**
 * @module AppMiddleware
 * @description This module provide application actions for redux middleware engine
 */
/* Projects Connector Import */
import projectConnector from 'connectors/projects';
/* ACTIONS Import */
import appActions from 'store/app/actions';
import projectActions from 'store/project/actions';
/* ACTION KEY */
export const EXECUTE = 'APP_EXECUTE';
// =====================================
// == MIDDLEWARES ACTIONS PART
//
const middlewareAct = {
  /**
   * @function searchProjects Query data base with search values
   * and Call Update Store for ProjectsList state.
   * @param {import('redux').Store} store
   * @param {*} next
   * @param {*} action
   */
  searchProjects: (store, next, _) => {
    const {
      app: {
        business: {
          searchProjects: {
            fields: { location, perimeter, archived },
            pagination: {
              default: { offset, limit },
            },
          },
        },
      },
    } = store.getState();
    projectConnector
      .getProjects({ location, perimeter, archived }, offset, limit)
      .next((response) => {
        const { projects, offsetMax } = response;
        store.dispatch(
          projectActions.store.business.projectsList.updateFields({ projects })
        );
        store.dispatch(
          appActions.store.business.searchProjectsPagination.clearFields()
        );
        store.dispatch(
          appActions.store.business.searchProjectsPagination.updateFields({
            maxPage: offsetMax % limit,
          })
        );
      })
      .catch((error) => {
        console.error(error.message);
        //TODO MANAGE ERROR
      })
      .finally(() => {
        store.dispatch(appActions.store.setLoaderOff());
      });
    next(appActions.store.setLoaderOn());
  },
  /**
   * @function searchProjectsPaginationLoadPage Query target page result with search values
   * and specific offset and limit parameters
   * and Call Update Store for ProjectsList state.
   * @param {import('redux').Store} store
   * @param {*} next
   * @param {*} action
   */
  searchProjectsPaginationLoadPage: (store, next, action) => {},
};

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
