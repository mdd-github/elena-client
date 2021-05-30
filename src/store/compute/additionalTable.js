import { add } from './add';

const weekdays = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
];

const calculateAge = (date) => {
	const today = new Date();
	let age = today.getFullYear() - date.getFullYear();

	if(today.getMonth() < date.getMonth()) {
		return age - 1;
	}

	if(today.getMonth() === date.getMonth() && today.getDate() < date.getDate())
		return age - 1;

	return age;
};

export const computeAdditionalTable = (date) => {
	const d = date.getDate();
	const day = date.getDay();
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

	const socializationValues = [];
	socializationValues[0] = add(matrix[1] + matrix[5]);
	socializationValues[1] = add(matrix[3] + matrix[7]);
	socializationValues[2] = add(socializationValues[0] + socializationValues[1]);

	const values = [];
	values[0] = weekdays[day];
	values[1] = calculateAge(date);
	values[2] = matrix[1];
	values[3] = matrix[5];
	values[4] = add(values[2] + values[3]);
	values[5] = matrix[3];
	values[6] = matrix[7];
	values[7] = add(values[5] + values[6]);
	values[8] = add(matrix[1] + matrix[3] + matrix[5] + matrix[7]);
	values[9] = matrix[8];
	values[10] = socializationValues[2];
	values[11] = add(values[9] + values[10]);

	return values;
}