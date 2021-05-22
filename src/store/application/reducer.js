import { APPLICATION_INITIALIZE, APPLICATION_SET_FINGERPRINT } from './actions';

const initialState = {
	initialized: false,
	fingerprint: '',
}

export const applicationReducer = (state = initialState, action) => {
	switch(action.type) {
		case APPLICATION_INITIALIZE:
			return {
				...state,
				initialized: true,
			};
		case APPLICATION_SET_FINGERPRINT:
			return {
				...state,
				fingerprint: action.fingerprint,
			}
		default:
			return state;
	}
}