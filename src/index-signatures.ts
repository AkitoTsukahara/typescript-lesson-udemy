export {};

interface Profle {
    name: string;
    underTwenty: boolean;
    [inedex: string]: string | number | boolean;
}

let profile: Profle = { name: 'Akito', underTwenty: false };

profile.name = 'Akito';
profile.age = 29;
profile.nationality = 'Japna';