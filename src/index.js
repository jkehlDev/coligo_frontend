import React from 'react';
import { render } from 'react-dom';

/* REDUX STORE IIMPLEMENTATION */
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';
/* LOCAL-STORAGE - ACCESSORS */
import local from './store/localStorage';

/* Design STYLES */
import 'styles/styles.scss';

/* MAIN COMPONENT */
import App from './app';

/* Redux Store initial state */
const store = configureStore(local.loadState());

const rootReactElement = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
