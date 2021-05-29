import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { applicationReducer } from './application/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './auth/reducer';
import { personalReducer } from './personal/reducer';


const reducers = combineReducers({
	application: applicationReducer,
	auth: authReducer,
	personal: personalReducer,
});

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares)
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(reducers, composedEnhancers);