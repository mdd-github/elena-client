import {sendGET} from '../api/sendGet';
import {sendPOST} from '../api/sendPost';

export const PROFILE_GET = 'PROFILE/GET';
export const PROFILE_GET_SUCCEED = 'PROFILE/GET/SUCCEED';
export const PROFILE_GET_FAILED = 'PROFILE/GET/FAILED';

export const PROFILE_CHANGE_PASSWORD_MOUNT = 'PROFILE/CHANGE_PASSWORD/MOUNT';
export const PROFILE_CHANGE_PASSWORD_UNMOUNT = 'PROFILE/CHANGE_PASSWORD/UNMOUNT';
export const PROFILE_CHANGE_PASSWORD = 'PROFILE/CHANGE_PASSWORD';
export const PROFILE_CHANGE_PASSWORD_SUCCEED = 'PROFILE/CHANGE_PASSWORD/SUCCEED';
export const PROFILE_CHANGE_PASSWORD_FAILED = 'PROFILE/CHANGE_PASSWORD/FAILED';


export const profileGet = () => {
	return async (dispatch, getState) => {
		dispatch({type: PROFILE_GET});

		const response = await sendGET('user/' + getState().auth.id, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if(response.success) {
			dispatch({
				type: PROFILE_GET_SUCCEED,
				id: response.payload.id,
				role: response.payload.role,
				firstName: response.payload.firstName,
				lastName: response.payload.lastName,
				email: response.payload.email,
			});
		} else {
			dispatch({
				type: PROFILE_GET_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}

	}
}

export const profileChangePasswordMount = () => {
	return {
		type: PROFILE_CHANGE_PASSWORD_MOUNT
	}
}

export const profileChangePasswordUnmount = () => {
	return {
		type: PROFILE_CHANGE_PASSWORD_UNMOUNT
	}
}

export const profileChangePassword = (formData) => {
	return async (dispatch, getState) => {
		dispatch({type: PROFILE_CHANGE_PASSWORD});

		const response = await sendPOST('user/change-password',{
			...formData
		}, {
			'Authorization': 'Bearer ' + getState().auth.token
		});

		if (response.success) {
			dispatch({
				type: PROFILE_CHANGE_PASSWORD_SUCCEED
			});
		} else {
			dispatch({
				type: PROFILE_CHANGE_PASSWORD_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}
	}
}


