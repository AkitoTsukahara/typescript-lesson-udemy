export {};

const nextYearSalary = (currnetSalary: number, rate: number = 1.1) => {
    return currnetSalary * rate;
}

console.log(nextYearSalary(1000, 1.05));

console.log(nextYearSalary(1000));