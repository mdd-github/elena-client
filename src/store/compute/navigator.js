import { add } from './add';

export const computeNavigator = (date) => {
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
	matrix[8] = add(matrix[0] + matrix[2] + matrix[4]+ matrix[6]);

	const result = [];

	result[0] = matrix[0];
	result[1] = matrix[2];
	result[2] = add(result[0] + result[1]);

	result[6] = add(matrix[8] + result[0]);
	result[7] = add(matrix[8] + result[1]);
	result[8] = add(result[6] + result[7]);

	result[3] = add(result[6] + result[0]);
	result[4] = add(result[7] + result[1]);
	result[5] = add(result[3] + result[4]);

	result[9] = add(matrix[8] + result[6]);
	result[10] = add(matrix[8] + result[7]);
	result[11] = add(result[9] + result[10]);

	result[12] = matrix[8];
	result[13] = matrix[8];
	result[14] = add(result[12] + result[13]);
	result[15] = add(result[12] + matrix[4]);
	result[16] = add(result[13] + matrix[6]);
	result[17] = add(result[15] + result[16]);
	result[18] = matrix[4];
	result[19] = matrix[6];
	result[20] = add(result[0] + result[1]);

	result[21] = add(result[0] + result[3] + result[6] + result[9] + result[12] + result[15] + result[18])
	result[22] = add(result[1] + result[4] + result[7] + result[10] + result[13] + result[16] + result[19])
	result[23] = add(result[21] + result[22]);
	return result;
}