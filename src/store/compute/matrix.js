import { add } from './add';

export const computeMatrix = (date) => {
	const d = date.getDate();
	const y = date.getFullYear();
	const m = date.getMonth() + 1;

	const values = [];

	for(let i =0; i < 86; i++) {
		values[i] = -i;
	}

	values[0] = add(d);
	values[2] = add(m);
	values[4] = add(y);
	values[6] = add(values[0] + values[2] + values[4]);

	values[1] = add(values[0] + values[2]);
	values[3] = add(values[2] + values[4]);
	values[5] = add(values[4] + values[6]);
	values[7] = add(values[6] + values[0]);

	values[29] = add(values[0] + values[2] + values[4]+ values[6]);

	values[16] = add(values[0] + values[29]);
	values[8] = add(values[0] + values[16]);
	values[24] = add(values[16] + values[29]);

	values[18] = add(values[2] + values[29]);
	values[10] = add(values[2] + values[18]);
	values[25] = add(values[29] + values[18]);

	values[22] = add(values[6] + values[29]);
	values[14] = add(values[6] + values[22]);

	values[20] = add(values[4] + values[29]);
	values[12] = add(values[4] + values[20]);

	values[23] = add(values[7] + values[29]);
	values[15] = add(values[7] + values[23]);

	values[19] = add(values[3] + values[29]);
	values[11] = add(values[3] + values[19]);

	values[17] = add(values[1] + values[29]);
	values[9] = add(values[1] + values[17]);

	values[21] = add(values[5] + values[29]);
	values[13] = add(values[5] + values[21]);


	values[33] = add(values[0] + values[1]);
	values[31] = add(values[0] + values[33]);
	values[30] = add(values[0] + values[31]);
	values[32] = add(values[33] + values[31]);
	values[35] = add(values[33] + values[1]);
	values[36] = add(values[1] + values[35]);
	values[34] = add(values[33] + values[35]);

	values[40] = add(values[2] + values[1]);
	values[38] = add(values[1] + values[40]);
	values[42] = add(values[2] + values[40]);
	values[37] = add(values[1] + values[38]);
	values[39] = add(values[38] + values[40]);
	values[41] = add(values[42] + values[40]);
	values[43] = add(values[2] + values[42]);

	values[47] = add(values[2]+values[3]);
	values[45] = add(values[2]+values[47]);
	values[49] = add(values[47]+values[3]);
	values[44] = add(values[2]+values[45]);
	values[46] = add(values[47]+values[45]);
	values[48] = add(values[47]+values[49]);
	values[50] = add(values[49]+values[3]);

	values[54] = add(values[3]+values[4]);
	values[52] = add(values[3]+values[54]);
	values[56] = add(values[4]+values[54]);
	values[51] = add(values[3]+values[52]);
	values[53] = add(values[54]+values[52]);
	values[55] = add(values[54]+values[56]);
	values[57] = add(values[4]+values[56]);

	values[61] = add(values[4]+values[5]);
	values[59] = add(values[4]+values[61]);
	values[63] = add(values[5]+values[61]);
	values[58] = add(values[4]+values[59]);
	values[60] = add(values[61]+values[59]);
	values[62] = add(values[61]+values[63]);
	values[64] = add(values[63]+values[5]);

	values[68] = add(values[5] + values[6]);
	values[70] = add(values[6] + values[68]);
	values[66] = add(values[5] + values[68]);
	values[65] = add(values[5] + values[66]);
	values[67] = add(values[66] + values[68]);
	values[69] = add(values[68] + values[70]);
	values[71] = add(values[70] + values[6]);

	values[75] = add(values[6] + values[7]);
	values[73] = add(values[6] + values[75]);
	values[77] = add(values[7] + values[75]);
	values[72] = add(values[6] + values[73]);
	values[74] = add(values[73] + values[75]);
	values[76] = add(values[77] + values[75]);
	values[78] = add(values[77] + values[7]);

	values[82] = add(values[7] + values[0]);
	values[80] = add(values[7] + values[82]);
	values[84] = add(values[82] + values[0]);
	values[81] = add(values[82] + values[80]);
	values[79] = add(values[7] + values[80]);
	values[83] = add(values[84] + values[82]);
	values[85] = add(values[0] + values[84]);

	return values;
}