import { PERSONAL_SET_DATE } from './actions';

const initialState = {
	date: null,

	computed: false,

	matrixValues: [],
	navigatorValues: [],
	additionalTableValues: [],
	integrityValues: [],
	socializationValues: [],
	innerPointValue: 0,
	planetaryValues: 0,
}

export const personalReducer = (state = initialState, action) => {
	switch(action.type) {
		case PERSONAL_SET_DATE:
			return {
				...state,
				matrixValues: action.matrixValues,
				additionalTableValues: action.additionalTableValues,
				navigatorValues: action.navigatorValues,
				integrityValues: action.integrityValues,
				socializationValues: action.socializationValues,
				innerPointValue: action.innerPointValue,
				planetaryValues: action.planetaryValues,
			}
		default:
			return state;
	}
}