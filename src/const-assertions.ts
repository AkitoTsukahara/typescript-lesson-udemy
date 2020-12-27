export {};

let name = 'Tsukahara';

name = 'Akito';

let nickname = 'Akito' as const;
nickname = 'Tsukahara';
nickname = 'Akito';

let profile = {
    name: 'Akito',
    height: 170
} as const;

profile.name = 'Tsukahara';
profile.height = 180;