const actionTypes = {
  /* Actions type implementation */
  business: {
    searchProjects: {
      CLEAR_FIELDS: 'CLEAR_FIELDS',
      UPDATE_FIELDS: 'UPDATE_FIELDS',
    },
  },
  /* Actions object implementation */
};
export const searchProjects = {
  clearFields: (payload) => ({
    type: actionTypes.business.searchProjects.UPDATE_FIELDS,
    payload,
  }),
  updateFields: (payload) => ({
    type: actionTypes.business.searchProjects.UPDATE_FIELDS,
    payload,
  }),
};

export default actionTypes;
