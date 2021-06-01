import { sendGET } from '../api/sendGet';

export const INVITES_GET_ALL = 'INVITES/GET_ALL';
export const INVITES_GET_ALL_SUCCEED = 'INVITES/GET_ALL/SUCCEED';
export const INVITES_GET_ALL_FAILED = 'INVITES/GET_ALL/FAILED';

export const invitesGetAll = () => {
	return async(dispatch, getState) => {
		dispatch({type: INVITES_GET_ALL});

		const response = await sendGET('invite/all/', {
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