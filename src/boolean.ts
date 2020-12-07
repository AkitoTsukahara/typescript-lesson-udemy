export {};

// export->モジュール化しないとグローバル変数と重複して、エラーになる
let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
//isFinished = 1;
console.log({ isFinished });

