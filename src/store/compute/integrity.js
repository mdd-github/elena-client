import { add } from './add';
import { composeMatrix, computeShortMatrix } from './matrix';


export const computeIntegrity = (date) => {
	const matrix = computeShortMatrix(date);

	const result = [];
	result[0] = add(matrix[2] + matrix[6]);
	result[1] = add(matrix[0] + matrix[4]);
	result[2] = add(result[0] + result[1]);
	return result;
};

export const composeIntegrity = (date1, date2) => {
	const matrix = composeMatrix(date1, date2);

	const result = [];
	result[0] = add(matrix[2] + matrix[6]);
	result[1] = add(matrix[0] + matrix[4]);
	result[2] = add(result[0] + result[1]);
	return result;
};