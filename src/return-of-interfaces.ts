export {};

class Mahotsukai {}
class Souryo {}

// 複数のクラスを継承することはできないが、複数のインターフェースを継承することができる
class taro extends Mahotsukai {}

interface Kenja {
    ionazun(): void;
}
interface Senshi {
    kougeki(): void;
}

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();