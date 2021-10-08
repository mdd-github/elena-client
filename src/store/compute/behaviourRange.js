import {computeMatrix} from "./matrix";

export const computeBehaviourRange = (date) => {
    const count = {};
    const cells = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 29
    ];

    const matrix = computeMatrix(date);

    for(let i = 1; i <= 22; i++){
        count[i] = 0;
    }

    for(let i = 0; i < cells.length; i++){
        const j = matrix[i];
        count[j]++;
    }

    return [
        count['1'],
        count['2'],
        count['3'],
        count['4'],
        count['5'],
        count['6'],
        count['7'],
        count['8'],
        count['9'],
        count['10'],
        count['11'],
        count['12'],
        count['13'],
        count['14'],
        count['15'],
        count['16'],
        count['17'],
        count['18'],
        count['19'],
        count['20'],
        count['21'],
        count['22'],
    ];
};
