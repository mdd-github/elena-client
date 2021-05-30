import { computeMatrix } from '../compute/matrix';
import { computeAdditionalTable } from '../compute/additionalTable';
import { computeNavigator } from '../compute/navigator';
import { computeIntegrity } from '../compute/integrity';
import { computeSocialization } from '../compute/socialization';
import { add } from '../compute/add';

export const PERSONAL_SET_DATE = 'PERSONAL/SET_DATE';

export const personalSetDate = (date) => {
	return {
		type: PERSONAL_SET_DATE,
		date: date,
		matrixValues: computeMatrix(date),
		navigatorValues: computeNavigator(date),
		additionalTableValues: computeAdditionalTable(date),
		integrityValues: computeIntegrity(date),
		socializationValues: computeSocialization(date),
		innerPointValue: add(computeIntegrity(date)[2] + computeSocialization(date)[2]),
		planetaryValues: add(add(computeIntegrity(date)[2] + computeSocialization(date)[2]) + computeSocialization(date)[2]),
	}
}