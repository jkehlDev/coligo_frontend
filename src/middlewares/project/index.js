import actions from './actions';
const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
      break;
  }
};

export default middleware;
