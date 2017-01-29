import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

import reducers from '../reducers';


export default (history, initialState) => {

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  const enhancers = applyMiddleware(createLogger(), routerMiddleware(history));

  return createStore(rootReducer, initialState, enhancers);
}