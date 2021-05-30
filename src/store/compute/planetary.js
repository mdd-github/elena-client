import { add } from './add';
import { composeIntegrity, computeIntegrity } from './integrity';
import { composeSocialization, computeSocialization } from './socialization';

export const computePlanetary = (date) => {
	return add(add(computeIntegrity(date)[2] + computeSocialization(date)[2]) + computeSocialization(date)[2]);
}

export const composePlanetary = (date1, date2) => {
	const socialization = composeSocialization(date1, date2)[2];
	return add(add(composeIntegrity(date1, date2)[2] + socialization) + socialization);
}