import { composeMatrix, computeMatrix } from '../compute/matrix';
import { computeNavigator } from '../compute/navigator';
import { computeAdditionalTable } from '../compute/additionalTable';
import { composeIntegrity, computeIntegrity } from '../compute/integrity';
import { composeSocialization, computeSocialization } from '../compute/socialization';
import { computeInnerPoint } from '../compute/innerPont';
import { composePlanetary, computePlanetary } from '../compute/planetary';
import { composeUnity } from '../compute/unity';

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
		innerPointValue: computeInnerPoint(date),
		planetaryValues: computePlanetary(date),
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
		innerPointValue: computeInnerPoint(date),
		planetaryValues: computePlanetary(date),
	};
}

export const compatibilityUpdate = (date1, date2) => {
	return {
		type: COMPATIBILITY_UPDATE,
		matrixValues: composeMatrix(date1, date2),
		integrityValues: composeIntegrity(date1, date2),
		socializationValues: composeSocialization(date1, date2),
		unityValues: composeUnity(date1, date2),
		planetaryValues: composePlanetary(date1, date2),
	};
}