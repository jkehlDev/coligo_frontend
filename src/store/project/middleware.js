/**
 * @module ProjectMiddleware
 * @description This module provide project actions for redux middleware engine
 */
/* ACTIONS Import */
import projectActions from 'store/project/actions';
/* ACTION KEY */
export const EXECUTE = 'PROJECT_EXECUTE';
// =====================================
// == ACTIONS EXPORTS

/**
 * @function getProjectById Search Project Item in Projects list with project ID
 * and Call Update Store for ProjectItem state.
 * @param {*} store
 * @param {*} next
 * @param {*} action
 */
export const getProjectFromListById = (store, next, action) => {
  const {
    project: {
      business: {
        ProjectsList: {
          fields: { projects },
        },
      },
    },
  } = store.getState();
  const { projectId } = action.payload;
  const projectItem = projects.find((project) => project.id === projectId);
  next(
    projectActions.store.business.projectItem.updateFields({ ...projectItem })
  );
};

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
