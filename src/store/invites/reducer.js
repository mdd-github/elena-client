import { INVITES_GET_ALL, INVITES_GET_ALL_FAILED, INVITES_GET_ALL_SUCCEED } from './actions';

const initialState = {
	loaded: false,
	waitForResponse: false,
	all: [],
}

export const invitesReducer = (state = initialState, action) => {
	switch(action.type) {
		case INVITES_GET_ALL:
			return {
				...state,
				loaded: false,
				waitForResponse: true,
				all: [],
			};
		case INVITES_GET_ALL_SUCCEED:
			return {
				...state,
				loaded: true,
				waitForResponse: false,
				all: action.invites,
			};
		case INVITES_GET_ALL_FAILED:
			return {
				...state,
				loaded: false,
				waitForResponse: false,
				all: [],
			};
		default:
			return state;
	}
}