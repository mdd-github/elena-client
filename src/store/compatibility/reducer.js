import { COMPATIBILITY_SET_DATE_1, COMPATIBILITY_SET_DATE_2, COMPATIBILITY_UPDATE } from './actions';

const initialState = {
	date1: new Date(),
	matrixValues1: [],
	navigatorValues1: [],
	additionalTableValues1: [],
	integrityValues1: [],
	socializationValues1: [],
	innerPointValue1: 0,
	planetaryValues1: 0,

	date2: new Date(),
	matrixValues2: [],
	navigatorValues2: [],
	additionalTableValues2: [],
	integrityValues2: [],
	socializationValues2: [],
	innerPointValue2: 0,
	planetaryValues2: 0,

	matrixValues3: [],
	integrityValues3: [],
	socializationValues3: [],
	unityValues3: 0,
	planetaryValues3: 0,
}

export const compatibilityReducer = (state = initialState, action) => {
	switch(action.type) {
		case COMPATIBILITY_SET_DATE_1:
			return {
				...state,
				date1: action.date,
				matrixValues1: action.matrixValues,
				additionalTableValues1: action.additionalTableValues,
				navigatorValues1: action.navigatorValues,
				integrityValues1: action.integrityValues,
				socializationValues1: action.socializationValues,
				innerPointValue1: action.innerPointValue,
				planetaryValues1: action.planetaryValues,
			};
		case COMPATIBILITY_SET_DATE_2:
			return {
				...state,
				date2: action.date,
				matrixValues2: action.matrixValues,
				additionalTableValues2: action.additionalTableValues,
				navigatorValues2: action.navigatorValues,
				integrityValues2: action.integrityValues,
				socializationValues2: action.socializationValues,
				innerPointValue2: action.innerPointValue,
				planetaryValues2: action.planetaryValues,
			};
		case COMPATIBILITY_UPDATE:
			return {
				...state,
				matrixValues3: action.matrixValues,
				integrityValues3: action.integrityValues,
				socializationValues3: action.socializationValues,
				unityValues3: action.unityValues,
				planetaryValues3: action.planetaryValues,
			};
		default:
			return state;
	}
}