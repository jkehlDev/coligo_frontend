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
// == ACTIONS EXPORTS PART
//
/**
 * @function searchProjects Query data base with search values
 * and Call Update Store for ProjectsList state.
 * @param {*} store
 * @param {*} next
 * @param {*} action
 */
export const searchProjects = (store, next, _) => {
  const {
    app: {
      business: {
        searchProjects: {
          fields: { location, perimeter, archived },
        },
        searchProjectsPagination: {
          default: { offset, limit },
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
};

/**
 * @function loadPage Query target page with search values
 * and specific offset and limit parameters
 * and Call Update Store for ProjectsList state.
 * @param {*} store
 * @param {*} next
 * @param {*} action
 */
export const loadPage = (store, next, action) => {};
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
