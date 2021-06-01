import { USERS_GET_ALL, USERS_GET_ALL_FAILED, USERS_GET_ALL_SUCCEED } from './actions';

const initialState = {
	loaded: false,
	waitForResponse: false,
	all: [],
}

export const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case USERS_GET_ALL:
			return {
				...state,
				loaded: false,
				waitForResponse: true,
				all: [],
			}
		case USERS_GET_ALL_SUCCEED:
			console.log(action);

			return {
				...state,
				loaded: true,
				waitForResponse: false,
				all: action.users,
			}
		case USERS_GET_ALL_FAILED:
			return {
				...state,
				loaded: false,
				waitForResponse: false,
				all: [],
			}
		default:
			return state;
	}
}