export {};

// const sum = (...vaules: number[]): number => {
//     console.log(vaules);
//     return 100;
// };

const reducer = (accumulator: number, currentValue: number) => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
}


const sum: (...vaules: number[]) => number = (
    ...values: number[]
): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));