/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from 'store/reducers/app';
import profil from 'store/reducers/profil';
import project from 'store/reducers/project';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app,
    profil,
    project,
  });

export default createRootReducer;
