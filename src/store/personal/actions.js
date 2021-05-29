import { computeMatrix } from '../compute/matrix';

export const PERSONAL_SET_DATE = 'PERSONAL/SET_DATE';

export const personalSetDate = (date) => {
	return {
		type: PERSONAL_SET_DATE,
		matrixValues: computeMatrix(date),
		navigatorValues: [],
		additionalTableValues: [],
		integrityValues: [],
		socializationValues: [],
		innerPointValue: 0,
		planetaryValues: 0,
	}
}