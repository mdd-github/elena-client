import { add } from './add';
import { composeIntegrity, computeIntegrity } from './integrity';
import { composeSocialization, computeSocialization } from './socialization';

export const computeInnerPoint = (date) => {
	return add(computeIntegrity(date)[2] + computeSocialization(date)[2]);
}

export const composeInnerPoint = (date1, date2) => {
	return add(composeIntegrity(date1, date2)[2] + composeSocialization(date1, date2)[2]);
}