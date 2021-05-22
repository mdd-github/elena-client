import Fingerprint from '@fingerprintjs/fingerprintjs';
import { authRefreshSession } from '../auth/actions';

export const APPLICATION_INITIALIZE = 'APPLICATION/INITIALIZE';
export const APPLICATION_SET_FINGERPRINT = 'APPLICATION/SET_FINGERPRINT';

const applicationGetFingerprint = () => {
	return async (dispatch) => {
		const fingerprintCreator = await Fingerprint.load();
		const fingerprint = await fingerprintCreator.get()

		dispatch({
			type: APPLICATION_SET_FINGERPRINT,
			fingerprint: fingerprint.visitorId,
		});
	}
}

export const applicationInitialize = () => {
	return async (dispatch) => {
		await dispatch(applicationGetFingerprint());
		await dispatch(authRefreshSession());
		dispatch({type: APPLICATION_INITIALIZE});
	}
}