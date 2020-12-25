export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Akito';
    static lastname: string = 'Tsukahara';

    static work() {
        return `Hey,guys! This is ${Me.firstName} Are you interested in TypeScript?`;
    }
}

//let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());