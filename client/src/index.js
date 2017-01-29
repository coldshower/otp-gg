import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import initialState from './store/initialState';

import LoginForm from './components/loginForm/component';

const store = configureStore(browserHistory, initialState);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginForm} />
    </Router>
  </Provider>, 
  document.getElementById('app')
);