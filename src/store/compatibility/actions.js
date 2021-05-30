import { computeMatrix } from '../compute/matrix';
import { computeNavigator } from '../compute/navigator';
import { computeAdditionalTable } from '../compute/additionalTable';
import { computeIntegrity } from '../compute/integrity';
import { computeSocialization } from '../compute/socialization';
import { add } from '../compute/add';

export const COMPATIBILITY_SET_DATE_1 = 'COMPATIBILITY/SET_DATE_1';
export const COMPATIBILITY_SET_DATE_2 = 'COMPATIBILITY/SET_DATE_2';
export const COMPATIBILITY_UPDATE = 'COMPATIBILITY/UPDATE';

export const compatibilitySetDate1 = (date) => {
	return {
		type: COMPATIBILITY_SET_DATE_1,
		date: date,
		matrixValues: computeMatrix(date),
		navigatorValues: computeNavigator(date),
		additionalTableValues: computeAdditionalTable(date),
		integrityValues: computeIntegrity(date),
		socializationValues: computeSocialization(date),
		innerPointValue: add(computeIntegrity(date)[2] + computeSocialization(date)[2]),
		planetaryValues: add(add(computeIntegrity(date)[2] + computeSocialization(date)[2]) + computeSocialization(date)[2]),
	};
}

export const compatibilitySetDate2 = (date) => {
	return {
		type: COMPATIBILITY_SET_DATE_2,
		date: date,
		matrixValues: computeMatrix(date),
		navigatorValues: computeNavigator(date),
		additionalTableValues: computeAdditionalTable(date),
		integrityValues: computeIntegrity(date),
		socializationValues: computeSocialization(date),
		innerPointValue: add(computeIntegrity(date)[2] + computeSocialization(date)[2]),
		planetaryValues: add(add(computeIntegrity(date)[2] + computeSocialization(date)[2]) + computeSocialization(date)[2]),
	};
}

export const compatibilityUpdate = (date1, date2) => {
	return {
		type: COMPATIBILITY_UPDATE,
	};
}