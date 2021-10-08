import { PERSONAL_SET_DATE } from './actions';

const initialState = {
	date: new Date(),
	matrixValues: [],
	navigatorValues: [],
	additionalTableValues: [],
	integrityValues: [],
	socializationValues: [],
	innerPointValue: 0,
	planetaryValues: 0,
	behaviourRange: [],
}

export const personalReducer = (state = initialState, action) => {
	switch(action.type) {
		case PERSONAL_SET_DATE:
			return {
				...state,
				date: action.date,
				matrixValues: action.matrixValues,
				additionalTableValues: action.additionalTableValues,
				navigatorValues: action.navigatorValues,
				integrityValues: action.integrityValues,
				socializationValues: action.socializationValues,
				innerPointValue: action.innerPointValue,
				planetaryValues: action.planetaryValues,
				behaviourRange: action.behaviourRange,
			}
		default:
			return state;
	}
}
