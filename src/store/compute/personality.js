import {computeMatrix} from "./matrix";
import {add} from "./add";

export const computePersonality = (date) => {
    const matrix = computeMatrix(date);
    return [
        [
            add(matrix[0] + matrix[30] + matrix[31]),
            matrix[6],
            add(add(matrix[0] + matrix[30] + matrix[31]) + matrix[6])
        ],
        [
            add(matrix[32] + matrix[33] + matrix[34] + matrix[35] + matrix[36] + matrix[1]),
            matrix[6],
            add(add(matrix[32] + matrix[33] + matrix[34] + matrix[35] + matrix[36] + matrix[1]) + matrix[6])
        ],
        [
            add(matrix[39] + matrix[44]),
            add(matrix[50] + matrix[3]),
            add(add(matrix[39] + matrix[44]) + add(matrix[50] + matrix[3]))
        ],
        [
            matrix[43],
            add(matrix[55] + matrix[56]),
            add(matrix[43] + add(matrix[55] + matrix[56]))
        ],
    ];
}
