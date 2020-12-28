export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Akito';
    age: 29,
}
me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Taro',
    age: 29,
};
//friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
