export {};

class VisaCard {
    // readonly owner: string;

    // constructor(owner: string) {
    //     this.owner = owner;
    // }

    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Akito');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'Tsukahara';