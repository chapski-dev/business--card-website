import { createStore, combineReducers } from 'redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { CustomerReducers } from './Customer';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const reducers = {
  CustomerReducers,
};

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(),
);

export default store;
