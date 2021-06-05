import {
	PROFILE_CHANGE_PASSWORD, PROFILE_CHANGE_PASSWORD_FAILED,
	PROFILE_CHANGE_PASSWORD_MOUNT, PROFILE_CHANGE_PASSWORD_SUCCEED,
	PROFILE_CHANGE_PASSWORD_UNMOUNT,
	PROFILE_GET,
	PROFILE_GET_SUCCEED,
} from './actions';

const initialState = {
	id: 0,
	role: 'employee',
	firstName: '',
	lastName: '',
	email: '',

	changePassword: null,
}

const changePasswordInitialState = {
	waitForResponse: false,
	success: false,
	errorCode: 0,
	errorMessage: '',
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE_GET_SUCCEED:
			return {
				...state,
				id: action.id,
				role: action.role,
				firstName: action.firstName,
				lastName: action.lastName,
				email: action.email,
			}

		case PROFILE_CHANGE_PASSWORD_MOUNT:
			return {
				...state,
				changePassword: {...changePasswordInitialState}
			}
		case PROFILE_CHANGE_PASSWORD_UNMOUNT:
			return {
				...state,
				changePassword: null
			}

		case PROFILE_CHANGE_PASSWORD:
			return {
				...state,
				changePassword: {
					...state.changePassword,
					waitForResponse: true,
					success: false,
				}
			}

		case PROFILE_CHANGE_PASSWORD_SUCCEED:
			return {
				...state,
				changePassword: {
					...state.changePassword,
					waitForResponse: false,
					success: true,
				}
			}
		case PROFILE_CHANGE_PASSWORD_FAILED:
			return {
				...state,
				changePassword: {
					...state.changePassword,
					waitForResponse: false,
					errorCode: action.errorCode,
					errorMessage: action.errorMessage,
				}
			}
		default:
			return state;
	}
}