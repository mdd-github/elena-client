import { add } from './add';
import { composeMatrix, computeShortMatrix } from './matrix';


export const computeSocialization = (date) => {
	const matrix = computeShortMatrix(date);

	const result = [];
	result[0] = add(matrix[1] + matrix[5]);
	result[1] = add(matrix[3] + matrix[7]);
	result[2] = add(result[0] + result[1]);
	return result;
};

export const composeSocialization = (date1, date2) => {
	const matrix = composeMatrix(date1, date2);

	const result = [];
	result[0] = add(matrix[1] + matrix[5]);
	result[1] = add(matrix[3] + matrix[7]);
	result[2] = add(result[0] + result[1]);
	return result;
};