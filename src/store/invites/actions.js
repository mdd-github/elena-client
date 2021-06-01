import { sendGET } from '../api/sendGet';
import { sendPOST } from '../api/sendPost';

export const INVITES_GET_ALL = 'INVITES/GET_ALL';
export const INVITES_GET_ALL_SUCCEED = 'INVITES/GET_ALL/SUCCEED';
export const INVITES_GET_ALL_FAILED = 'INVITES/GET_ALL/FAILED';

export const INVITES_REMOVE = 'INVITES/REMOVE';
export const INVITES_REMOVE_SUCCEED = 'INVITES/REMOVE/SUCCEED';
export const INVITES_REMOVE_FAILED = 'INVITES/REMOVE/FAILED';

export const INVITES_CREATE = 'INVITES/CREATE';
export const INVITES_CREATE_SUCCEED = 'INVITES/CREATE/SUCCEED';
export const INVITES_CREATE_FAILED = 'INVITES/CREATE/FAILED';

export const invitesGetAll = () => {
	return async(dispatch, getState) => {
		dispatch({type: INVITES_GET_ALL});

		const response = await sendGET('invite/all', {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: INVITES_GET_ALL_SUCCEED,
				invites: response.payload.invites
			});
		} else {
			dispatch({
				type: INVITES_GET_ALL_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}
	}
}

export const invitesRemove = (invite) => {
	return async(dispatch, getState) => {
		dispatch({type: INVITES_REMOVE});

		const response = await sendPOST('invite/remove/' + invite, {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: INVITES_REMOVE_SUCCEED,
			});
		} else {
			dispatch({
				type: INVITES_REMOVE_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}

		dispatch(invitesGetAll());
	}
}

export const invitesCreate = () => {
	return async(dispatch, getState) => {
		dispatch({type: INVITES_CREATE});

		const response = await sendPOST('invite/create', {}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: INVITES_CREATE_SUCCEED,
			});
		} else {
			dispatch({
				type: INVITES_CREATE_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}

		dispatch(invitesGetAll());
	}
}