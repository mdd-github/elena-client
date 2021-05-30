import { composeSocialization } from './socialization';
import { composeIntegrity } from './integrity';
import { add } from './add';

export const composeUnity = (date1, date2) => {
	const socialization = composeSocialization(date1, date2);
	const integrity = composeIntegrity(date1, date2);

	return [
		socialization[2],
		integrity[2],
		add(socialization[2] + integrity[2])
	];
}