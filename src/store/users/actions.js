import { sendGET } from '../api/sendGet';
import { sendPOST } from '../api/sendPost';
import {sendFile} from "../api/sendFile";


export const USERS_GET_ALL = 'USERS/GET_ALL';
export const USERS_GET_ALL_SUCCEED = 'USERS/GET_ALL/SUCCEED';
export const USERS_GET_ALL_FAILED = 'USERS/GET_ALL/FAILED';

export const USERS_REMOVE = 'USERS/REMOVE';
export const USERS_REMOVE_SUCCEED = 'USERS/REMOVE/SUCCEED';
export const USERS_REMOVE_FAILED = 'USERS/REMOVE/FAILED';

export const USERS_BAN = 'USERS/BAN';
export const USERS_BAN_SUCCEED = 'USERS/BAN/SUCCEED';
export const USERS_BAN_FAILED = 'USERS/BAN/FAILED';

export const USERS_UNBAN = 'USERS/UNBAN';
export const USERS_UNBAN_SUCCEED = 'USERS/UNBAN/SUCCEED';
export const USERS_UNBAN_FAILED = 'USERS/UNBAN/FAILED';

export const USERS_SET_ROLE = 'USERS/SET_ROLE';
export const USERS_SET_ROLE_SUCCEED = 'USERS/SET_ROLE/SUCCEED';
export const USERS_SET_ROLE_FAILED = 'USERS/SET_ROLE/FAILED';

export const usersGetAll = () => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_GET_ALL});

		const response = await sendGET('user/all', {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_GET_ALL_SUCCEED,
				users: response.payload.users,
			});
		} else {
			dispatch({
				type: USERS_GET_ALL_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}
	};
};

export const usersRemove = (id) => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_REMOVE});

		const response = await sendPOST('user/remove/' + id, {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_REMOVE_SUCCEED,
			});
		} else {
			dispatch({
				type: USERS_REMOVE_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}

		dispatch(usersGetAll());
	}
}

export const usersBan = (id) => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_BAN});

		const response = await sendPOST('user/ban/' + id, {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_BAN_SUCCEED,
			});
		} else {
			dispatch({
				type: USERS_BAN_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}

		dispatch(usersGetAll());
	}
}

export const usersUnban = (id) => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_UNBAN});

		const response = await sendPOST('user/unban/' + id, {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_UNBAN_SUCCEED,
			});
		} else {
			dispatch({
				type: USERS_UNBAN_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}

		dispatch(usersGetAll());
	}
}

export const usersSetRole = (id, role) => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_SET_ROLE, role: role, id: id});

		const response = await sendPOST('user/set-role/' + id + '/' + role, {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_SET_ROLE_SUCCEED,
			});
		} else {
			dispatch({
				type: USERS_SET_ROLE_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}
	}
}

export const usersImport = (file) => {
	return async (dispatch, getState) => {
		dispatch({type: USERS_REMOVE});

		const response = await sendFile('user/import', file, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: USERS_REMOVE_SUCCEED,
			});
		} else {
			dispatch({
				type: USERS_REMOVE_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}

		dispatch(usersGetAll());
	}
}
