

export const add = (number) => {
	if(number > 22) {

		let sum = 0;

		for(let char of number.toString()) {
			sum += +char;
		}

		return add(sum);
	}

	return number;
}