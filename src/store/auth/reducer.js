import {
	AUTH_LOGIN, AUTH_LOGIN_FAILED,
	AUTH_LOGIN_MOUNT, AUTH_LOGIN_SUCCEED, AUTH_LOGIN_UNMOUNT, AUTH_LOGOUT,
	AUTH_REFRESH_SESSION,
	AUTH_REFRESH_SESSION_FAILED,
	AUTH_REFRESH_SESSION_SUCCEED, AUTH_REGISTER, AUTH_REGISTER_FAILED,
	AUTH_REGISTER_MOUNT, AUTH_REGISTER_SUCCEED, AUTH_REGISTER_UNMOUNT,
} from './actions';

const initialState = {
	authorized: false,
	token: '',
	role: 'guest',

	registerState: null,
	loginState: null,
};

const registerInitialState = {
	waitForResponse: false,
	success: false,
	errorCode: 0,
	errorMessage: '',
};

const loginInitialState = {
	waitForResponse: false,
	success: false,
	errorCode: 0,
	errorMessage: '',
}

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case AUTH_REFRESH_SESSION:
			return {
				...state,
				token: '',
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
				role: 'guest',
			};

		case AUTH_REGISTER_MOUNT:
			return {
				...state,
				registerState: {...registerInitialState},
			};
		case AUTH_REGISTER_UNMOUNT:
			return {
				...state,
				registerState: null,
			};
		case AUTH_REGISTER:
			return {
				...state,
				registerState: {
					...state.registerState,
					waitForResponse: true,
				},
			};
		case AUTH_REGISTER_SUCCEED:
			return {
				...state,
				registerState: {
					...state.registerState,
					waitForResponse: false,
					success: true,
				},
			};
		case AUTH_REGISTER_FAILED:
			return {
				...state,
				registerState: {
					...state.registerState,
					waitForResponse: false,
					errorCode: action.errorCode,
					errorMessage: action.errorMessage,
				},
			};

		case AUTH_LOGIN_MOUNT:
			return {
				...state,
				loginState: {...loginInitialState},
			};
		case AUTH_LOGIN_UNMOUNT:
			return {
				...state,
				loginState: null,
			};
		case AUTH_LOGIN:
			return {
				...state,
				loginState: {
					...state.loginState,
					waitForResponse: true,
				},
			}
		case AUTH_LOGIN_SUCCEED:
			return {
				...state,
				token: action.token,
				role: action.role,
				authorized: true,
				loginState: {
					...state.loginState,
					waitForResponse: false,
					success: true,
				},
			};
		case AUTH_LOGIN_FAILED:
			return {
				...state,
				loginState: {
					...state.loginState,
					waitForResponse: false,
					errorCode: action.errorCode,
					errorMessage: action.errorMessage,
				},
			};

		case AUTH_LOGOUT:
			return {
				...state,
				token: '',
				role: 'guest',
				authorized: false,
			};
		default:
			return state;
	}
};