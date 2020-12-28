export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age })
};

debugProfile('Akito', 29);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['Totoro', 500];

debugProfile(...profile);

type Myparameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any ? P : never;