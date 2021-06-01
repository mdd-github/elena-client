import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { applicationReducer } from './application/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './auth/reducer';
import { personalReducer } from './personal/reducer';
import { compatibilityReducer } from './compatibility/reducer';
import { usersReducer } from './users/reducer';


const reducers = combineReducers({
	application: applicationReducer,
	auth: authReducer,
	personal: personalReducer,
	compatibility: compatibilityReducer,
	users: usersReducer,
});

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares)
const composedEnhancers = composeWithDevTools(middlewareEnhancer);

export const store = createStore(reducers, composedEnhancers);