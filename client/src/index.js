import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './redux/configureStore';
import initialState from './initialState.js';

const store = configureStore(browserHistory, initialState);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={} />
    </Router>
  </Provider>, 
  document.getElementById('app')
);