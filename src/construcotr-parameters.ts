export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('taro', 20);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profle: Profile = ['Akito', 29];
const akito = new Person(...profle);
console.log(akito)

type MyConstructorParameters<
    T extends new (...args: any) => any
> = T extends new (...args:infer P) => any ? P : never;