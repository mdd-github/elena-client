import { sendPOST } from '../../api/send';

export const AUTH_REFRESH_SESSION = 'AUTH/REFRESH_SESSION';
export const AUTH_REFRESH_SESSION_SUCCEED = 'AUTH/REFRESH_SESSION/SUCCEED';
export const AUTH_REFRESH_SESSION_FAILED = 'AUTH/REFRESH_SESSION/FAILED';

const extractRole = (token) => {
	return 'role';
}

export const authRefreshSession = () => {
	return async (dispatch) => {
		dispatch({type: AUTH_REFRESH_SESSION});

		const response = await sendPOST('/auth/refresh');
		if(response.success) {
			dispatch({
				type: AUTH_REFRESH_SESSION_SUCCEED,
				token: response.token,
				role: extractRole(response.token),
			});
		}else{
			dispatch({
				type: AUTH_REFRESH_SESSION_FAILED,
				errorCode: response.errorCode,
				errorMessage: response.errorMessage,
			});
		}
	}
}
