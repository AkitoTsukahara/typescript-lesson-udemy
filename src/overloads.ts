export {};

function double(value: number): number;
function double(value: string): string;


function double(value: any): any {
    console.log(typeof value);
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return value + value;
    }else{
        //シグネチャの型制約で引っかかるので、処理自体はここまで流れてこない
        throw 'numberでもstringでも無いので、引数の型を確認してください。'
    }
}

console.log(double(100));
console.log(double('GO '));
//console.log(double(true));