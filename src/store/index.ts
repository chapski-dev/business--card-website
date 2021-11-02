import { createStore, combineReducers } from 'redux';

import { CustomerReducers } from './Customer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const reducers = {
	CustomerReducers,
};

const store = createStore(
	combineReducers(reducers),
  composeEnhancers()
);

export default store;
