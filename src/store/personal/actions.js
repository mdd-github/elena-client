import { computeMatrix } from '../compute/matrix';
import { computeAdditionalTable } from '../compute/additionalTable';
import { computeNavigator } from '../compute/navigator';
import { computeIntegrity } from '../compute/integrity';
import { computeSocialization } from '../compute/socialization';
import { computeInnerPoint } from '../compute/innerPont';
import { computePlanetary } from '../compute/planetary';
import {computeBehaviourRange} from "../compute/behaviourRange";

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
		innerPointValue: computeInnerPoint(date),
		planetaryValues: computePlanetary(date),
		behaviourRange: computeBehaviourRange(date),
	}
}
