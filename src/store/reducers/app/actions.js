import { CLEAR_STATE, UPDATE_STATE } from './index';
import config from './config.json';

function clearFields(path) {
  return () => ({
    type: CLEAR_STATE,
    path,
  });
}

function updateFields(path) {
  return (payload) => ({
    type: UPDATE_STATE,
    path,
    payload,
  });
}

const actions = {
  business: {
    searchProjects: {
      clearFields: clearFields(config.business.searchProjects.fields.storePath),
      updateFields: updateFields(config.business.searchProjects.fields.storePath),
    },
  },
};

export default actions;
