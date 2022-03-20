import {
	USERS_APPLY_INVITE, USERS_APPLY_INVITE_FAILED, USERS_APPLY_INVITE_START, USERS_APPLY_INVITE_SUCCEED,
	USERS_GET_ALL,
	USERS_GET_ALL_FAILED,
	USERS_GET_ALL_SUCCEED,
	USERS_REMOVE, USERS_REMOVE_FAILED,
	USERS_REMOVE_SUCCEED, USERS_SEND_CONFIRMATION, USERS_SET_ROLE, USERS_SET_ROLE_FAILED, USERS_SET_ROLE_SUCCEED,
} from './actions';

const initialState = {
	loaded: false,
	waitForResponse: false,
	all: [],
	inviteError: false,
	confirmationSent: false,
};

export const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case USERS_GET_ALL:
			return {
				...state,
				loaded: false,
				waitForResponse: true,
				all: [],
			};
		case USERS_GET_ALL_SUCCEED:
			return {
				...state,
				loaded: true,
				waitForResponse: false,
				all: action.users,
			};
		case USERS_GET_ALL_FAILED:
			return {
				...state,
				loaded: false,
				waitForResponse: false,
				all: [],
			};
		case USERS_REMOVE:
			return {
				...state,
				waitForResponse: true,
			};
		case USERS_REMOVE_SUCCEED:
		case USERS_REMOVE_FAILED:
			return {
				...state,
				waitForResponse: false,
			};
		case USERS_SET_ROLE:
			return {
				...state,
				all: state.all.map((user) => {
					if(user.id === action.id){
						return {
							...user,
							role: action.role,
						}
					}else {
						return user;
					}
				}),
				waitForResponse: true,
			};
		case USERS_SET_ROLE_SUCCEED:
		case USERS_SET_ROLE_FAILED:
			return {
				...state,
				waitForResponse: false,
			};

		case USERS_APPLY_INVITE_START:
			return {
				...state,
				inviteError: false,
				waitForResponse: false,
			}
		case USERS_APPLY_INVITE:
			return {
				...state,
				inviteError: false,
				waitForResponse: true,
			}
		case USERS_APPLY_INVITE_SUCCEED:
			return {
				...state,
				inviteError: false,
				waitForResponse: false,
			}
		case USERS_APPLY_INVITE_FAILED:
			return {
				...state,
				inviteError: true,
				waitForResponse: false,
			}
		case USERS_SEND_CONFIRMATION:
			return {
				...state,
				confirmationSent: true,
			}
		default:
			return state;
	}
};