import { AUTH_REFRESH_SESSION, AUTH_REFRESH_SESSION_FAILED, AUTH_REFRESH_SESSION_SUCCEED } from './actions';

const initialState = {
	authorized: false,
	token: '',
	role: 'guest',
}

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case AUTH_REFRESH_SESSION:
			return {
				...state,
				token: ''
			};
		case AUTH_REFRESH_SESSION_SUCCEED:
			return {
				...state,
				authorized: true,
				token: action.token,
				role: action.role,
			};
		case AUTH_REFRESH_SESSION_FAILED:
			return {
				...state,
				authorized: false,
				token: '',
				role: 'guest'
			};
		default:
			return state;
	}
}