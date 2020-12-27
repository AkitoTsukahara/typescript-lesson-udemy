export {};

let name: any = 'Akito';
//let length: number = name.length;
let length = (<string>name).length;

length = 'hogehoge';