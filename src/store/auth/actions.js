import { sendPOST } from '../../api/send';

export const AUTH_REFRESH_SESSION = 'AUTH/REFRESH_SESSION';
export const AUTH_REFRESH_SESSION_SUCCEED = 'AUTH/REFRESH_SESSION/SUCCEED';
export const AUTH_REFRESH_SESSION_FAILED = 'AUTH/REFRESH_SESSION/FAILED';

export const authRefreshSession = () => {
	return async (dispatch) => {
		dispatch({type: AUTH_REFRESH_SESSION});

		const response = await sendPOST('/auth/refresh');
		if(response.success) {
			dispatch({
				type: AUTH_REFRESH_SESSION_SUCCEED,
				token: response.payload.token,
				role: response.payload.role,
			});
		}else{
			dispatch({
				type: AUTH_REFRESH_SESSION_FAILED,
				errorCode: response.payload.errorCode,
				errorMessage: response.payload.errorMessage,
			});
		}
	}
}
