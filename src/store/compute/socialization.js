import { add } from './add';


export const computeSocialization = (date) => {
	const d = date.getDate();
	const y = date.getFullYear();
	const m = date.getMonth() + 1;

	const matrix = [];
	matrix[0] = add(d);
	matrix[2] = add(m);
	matrix[4] = add(y);
	matrix[6] = add(matrix[0] + matrix[2] + matrix[4]);

	matrix[1] = add(matrix[0] + matrix[2]);
	matrix[3] = add(matrix[2] + matrix[4]);
	matrix[5] = add(matrix[4] + matrix[6]);
	matrix[7] = add(matrix[6] + matrix[0]);
	matrix[8] = add(matrix[0] + matrix[2] + matrix[4] + matrix[6]);

	const result = [];
	result[0] = add(matrix[1] + matrix[5]);
	result[1] = add(matrix[3] + matrix[7]);
	result[2] = add(result[0] + result[1]);
	return result;
};