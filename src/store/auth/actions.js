import { sendPOST } from '../../api/send';

export const AUTH_REFRESH_SESSION = 'AUTH/REFRESH_SESSION';
export const AUTH_REFRESH_SESSION_SUCCEED = 'AUTH/REFRESH_SESSION/SUCCEED';
export const AUTH_REFRESH_SESSION_FAILED = 'AUTH/REFRESH_SESSION/FAILED';

export const AUTH_REGISTER_MOUNT = 'AUTH/REGISTER/MOUNT';
export const AUTH_REGISTER_UNMOUNT = 'AUTH/REGISTER/UNMOUNT';

export const AUTH_REGISTER = 'AUTH/REGISTER';
export const AUTH_REGISTER_SUCCEED = 'AUTH/REGISTER/SUCCEED';
export const AUTH_REGISTER_FAILED = 'AUTH/REGISTER/FAILED';

export const AUTH_LOGIN_MOUNT = 'AUTH/LOGIN/MOUNT';
export const AUTH_LOGIN_UNMOUNT = 'AUTH/LOGIN/UNMOUNT';

export const AUTH_LOGIN = 'AUTH/LOGIN';
export const AUTH_LOGIN_SUCCEED = 'AUTH/LOGIN/SUCCEED';
export const AUTH_LOGIN_FAILED = 'AUTH/LOGIN/FAILED';

export const AUTH_LOGOUT = 'AUTH/LOGOUT';

export const authRefreshSession = () => {
	return async (dispatch, getState) => {
		dispatch({type: AUTH_REFRESH_SESSION});

		const response = await sendPOST('auth/refresh', {
			fingerprint: getState().application.fingerprint,
		});
		if(response.success) {
			dispatch({
				type: AUTH_REFRESH_SESSION_SUCCEED,
				token: response.payload.token,
				role: response.payload.role,
			});
		} else {
			dispatch({
				type: AUTH_REFRESH_SESSION_FAILED,
			});
		}
	};
};

export const authRegisterMount = () => ({
	type: AUTH_REGISTER_MOUNT,
});

export const authRegisterUnmount = () => ({
	type: AUTH_REGISTER_UNMOUNT,
});

export const authRegister = (formData) => {
	return async (dispatch) => {
		dispatch({type: AUTH_REGISTER});

		const response = await sendPOST('auth/register', formData);

		if(response.success) {
			dispatch({
				type: AUTH_REGISTER_SUCCEED,
			});
		} else {
			dispatch({
				type: AUTH_REGISTER_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}
	};
};

export const authLoginMount = () => ({
	type: AUTH_LOGIN_MOUNT,
});

export const authLoginUnmount = () => ({
	type: AUTH_LOGIN_UNMOUNT,
});

export const authLogin = (formData) => {
	return async (dispatch, getState) => {
		dispatch({type: AUTH_LOGIN});

		const response = await sendPOST('auth/login', {
			email: formData.email,
			password: formData.password,
			fingerprint: getState().application.fingerprint,
		});

		if(response.success) {
			dispatch({
				type: AUTH_LOGIN_SUCCEED,
				token: response.payload.token,
				role: response.payload.role,
			});
		} else {
			dispatch({
				type: AUTH_LOGIN_FAILED,
				errorCode: response.payload.code,
				errorMessage: response.payload.message,
			});
		}
	};
};

export const authLogout = () => {
	return async (dispatch) => {
		await sendPOST('auth/logout');
		dispatch({type: AUTH_LOGOUT});
	}
}