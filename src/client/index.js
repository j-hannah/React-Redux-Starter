import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { hydrate } from 'emotion';
import Routes from '../routes';
import reducers from '../reducers';

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);
hydrate(window._emotion);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
