import { sendGET } from '../api/sendGet';


export const USERS_GET_ALL = 'USERS/GET_ALL';
export const USERS_GET_ALL_SUCCEED = 'USERS/GET_ALL/SUCCEED';
export const USERS_GET_ALL_FAILED = 'USERS/GET_ALL/FAILED';

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